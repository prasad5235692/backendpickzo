import User from '../models/User.js';

// ✅ Get user profile (GET /users/profile)
export const getProfile = async (req, res) => {
  console.log("📥 Fetching profile for userId:", req.user?.userId);

  try {
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error('❌ getProfile error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Update user profile (PUT /users/profile)

export const updateProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update fields if provided
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.phone = req.body.phone || user.phone;
    user.address = req.body.address || user.address;

    const updatedUser = await user.save();
    const { password, ...userWithoutPassword } = updatedUser.toObject();
    res.json(userWithoutPassword); // Return updated profile
  } catch (err) {
    console.error('❌ updateProfile error:', err.message);
    res.status(500).json({ message: 'Server error' });
  }
};