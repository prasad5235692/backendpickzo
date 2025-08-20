import express from 'express';
import { verifyToken } from '../middleware/verifyToken.js';
import { getProfile, updateProfile } from '../controllers/userController.js';

const router = express.Router();

// ✅ Get user profile
router.get('/profile', verifyToken, getProfile);

// ✅ Update user profile
router.put('/profile', verifyToken, updateProfile);  // ✅ FIXED: Added verifyToken middleware

export default router;
