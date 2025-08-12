import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';
import {
  placeOrder,
  getUserOrders,
  cancelOrder,
  reorder,
  buyNowOrder,
  deleteOrders,

} from '../controllers/orderController.js';

const router = express.Router();

router.post('/place', authMiddleware, placeOrder);
router.get('/', authMiddleware, getUserOrders);
router.put('/cancel/:orderId', authMiddleware, cancelOrder);
router.post('/reorder/:orderId', authMiddleware, reorder);
router.post('/buy', authMiddleware, buyNowOrder);
router.delete('/delete', authMiddleware, deleteOrders);


export const getOrders = async (req, res) => {
  try {
    const userId = req.user.userId;
    const orders = await Order.find({ userId }).populate('items.productId');
    // Transform orders to add a `product` field inside each item for convenience
    const transformedOrders = orders.map(order => ({
      ...order._doc,
      items: order.items.map(item => ({
        ...item._doc,
        product: item.productId,  // populated product details
      })),
    }));
    res.json(transformedOrders);
  } catch (error) {
    res.status(500).json({ message: 'Failed to fetch orders' });
  }
};


export default router;
