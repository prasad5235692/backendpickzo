// middleware/authMiddleware.js
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // ✅ No token
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ success: false, msg: "Access Denied. No token provided." });
  }

  const token = authHeader.split(" ")[1];

  try {
    // ✅ Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("✅ Decoded token:", decoded);

    // Attach user to request
    req.user = { userId: decoded.userId };

    next();
  } catch (err) {
    console.error("❌ JWT Error:", err.message);
    return res.status(403).json({ success: false, msg: "Invalid or expired token" });
  }
};
