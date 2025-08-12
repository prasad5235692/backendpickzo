import mongoose from 'mongoose';

const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
  },
  title: {
    type: String,
    required: true,
    default: 'Unnamed Product',
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  image: {
    type: String,
    default: '', // Optional image URL
  },
  quantity: {
    type: Number,
    default: 1,
    min: 1,
  },
});

const cartSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true,
  },
  items: [cartItemSchema],
});

export default mongoose.models.Cart || mongoose.model('Cart', cartSchema);
