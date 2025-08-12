// backend/models/userModel.js
import mongoose from 'mongoose';

// models/User.js
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },       // ✅ Add this if missing
  address: { type: String },     // ✅ Add this if missing
}, { timestamps: true });


const User = mongoose.model('User', userSchema);
export default User;
