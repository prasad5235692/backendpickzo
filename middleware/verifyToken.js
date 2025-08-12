import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ msg: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
  console.log("Decoded token:", decoded); // ✅ Shows userId
    req.user = { userId: decoded.userId }; // ✅ Use correct key
    next();
  } catch (err) {
    return res.status(403).json({ msg: 'Invalid token' });
  }
};
