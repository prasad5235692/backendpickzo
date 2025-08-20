import jwt from "jsonwebtoken";
import User from "../models/User.js"; // only if you want to fetch user

export default async function authMiddleware(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Access Denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // ✅ match what you actually signed when creating the token
    // If you signed { id: user._id }, use decoded.id
    req.user = { userId: decoded.id || decoded.userId };

    // Optionally fetch full user (without password)
    // req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (err) {
    console.error("JWT Verify Failed:", err.message);
    res.status(401).json({ message: "Invalid Token" });
  }
}
