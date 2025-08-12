import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import { addToCart, removeItemFromCart, updateQuantity } from '../controllers/cartController.js';
import Cart from '../models/Cart.js';

const router = express.Router();

// Get current user's cart items
router.get('/', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    const cart = await Cart.findOne({ userId }).populate('items.productId');

    if (!cart || cart.items.length === 0) {
      return res.status(200).json({ cartItems: [] });
    }

    const cartItems = cart.items
      .filter(item => item.productId)
      .map(item => ({
        _id: item._id,
        productId: item.productId._id,
        title: item.productId.title || 'Unknown',
        price: item.productId.price || 0,
        quantity: item.quantity,
        image: item.productId.image || '',
      }));

    res.json({ cartItems });
  } catch (err) {
    console.error('❌ Cart fetch error:', err.message);
    res.status(500).json({ message: 'Failed to fetch cart' });
  }
});

router.post('/add', authMiddleware, addToCart);
router.delete('/remove/:itemId', authMiddleware, removeItemFromCart);
router.put('/update-quantity', authMiddleware, updateQuantity);

// Optional: clear entire cart
router.delete('/clear', authMiddleware, async (req, res) => {
  try {
    const userId = req.user.userId;
    await Cart.deleteOne({ userId });
    res.status(200).json({ message: 'Cart cleared' });
  } catch (err) {
    console.error('❌ Clear cart error:', err.message);
    res.status(500).json({ message: 'Failed to clear cart' });
  }
});

export default router;
