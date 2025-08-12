import Order from '../models/Order.js';
import Cart from '../models/Cart.js';

/**
 * Place an order from user's cart
 */
export const placeOrder = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { address, paymentMethod } = req.body;

    if (!address || !paymentMethod) {
      return res.status(400).json({ message: 'Address and payment method are required' });
    }

    // Get cart and populate product details
    const cart = await Cart.findOne({ userId }).populate('items.productId');
    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ message: 'Cart is empty' });
    }

    // Map cart items to order items with product snapshot
    const orderItems = cart.items.map(item => ({
      product: item.productId._id,
      title: item.productId.title || item.productId.name || 'Unnamed Product',
      price: item.productId.price || 0,
      quantity: item.quantity,
    }));

    const totalAmount = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const order = new Order({
      user: userId,
      items: orderItems,
      totalAmount,
      address,
      paymentMethod,
      status: 'Placed',
    });

    await order.save();

    // Clear the cart after placing order
    await Cart.deleteOne({ userId });

    res.status(201).json({ message: 'Order placed successfully', orderId: order._id });
  } catch (error) {
    console.error('Place order error:', error);
    res.status(500).json({ message: 'Failed to place order', error: error.message });
  }
};

/**
 * Get all orders for current user, sorted by latest
 */
export const getUserOrders = async (req, res) => {
  try {
    const userId = req.user.userId;

    // Populate product details inside items.product (optional fields)
  const orders = await Order.find({ user: userId })
  .sort({ createdAt: -1 })
  .populate('items.product', 'title name price image');


    res.status(200).json(orders);
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ message: 'Failed to fetch orders', error: error.message });
  }
};

/**
 * Cancel an order by ID
 */
export const cancelOrder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findById(orderId);

    if (!order) return res.status(404).json({ message: 'Order not found' });

    order.status = 'Cancelled';
    await order.save();

    res.json({ message: 'Order cancelled successfully' });
  } catch (error) {
    console.error('Cancel order error:', error);
    res.status(500).json({ message: 'Failed to cancel order' });
  }
};

/**
 * Reorder: Place new order using old order's details
 */
export const reorder = async (req, res) => {
  try {
    const orderId = req.params.orderId;
    const userId = req.user.userId;

    const oldOrder = await Order.findOne({ _id: orderId, user: userId });

    if (!oldOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    if (!oldOrder.address || !oldOrder.paymentMethod) {
      return res.status(400).json({ message: 'Original order missing address or payment method' });
    }

    const newOrder = new Order({
      user: userId,
      items: oldOrder.items,
      totalAmount: oldOrder.totalAmount,
      address: oldOrder.address,
      paymentMethod: oldOrder.paymentMethod,
      status: 'Placed',
    });

    await newOrder.save();

    res.status(201).json({ message: 'Reorder placed successfully', orderId: newOrder._id });
  } catch (error) {
    console.error('Reorder error:', error);
    res.status(500).json({ message: 'Failed to reorder', error: error.message });
  }
};

/**
 * Buy Now: Place order directly without cart
 */
export const buyNowOrder = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { items, totalAmount, address, paymentMethod } = req.body;

    if (!address || !paymentMethod) {
      return res.status(400).json({ message: 'Address and payment method required' });
    }

    const order = new Order({
      user: userId,
      items,
      totalAmount,
      address,
      paymentMethod,
      status: 'Placed',
    });

    await order.save();

    res.status(201).json({ message: 'Order placed successfully', orderId: order._id });
  } catch (error) {
    console.error('Buy now order error:', error);
    res.status(500).json({ message: 'Failed to place order', error: error.message });
  }
};

/**
 * Delete multiple orders by IDs
 */
export const deleteOrders = async (req, res) => {
  try {
    const userId = req.user.userId;
    const { orderIds } = req.body;

    if (!orderIds || !Array.isArray(orderIds) || orderIds.length === 0) {
      return res.status(400).json({ message: 'No order IDs provided' });
    }

    const result = await Order.deleteMany({
      _id: { $in: orderIds },
      user: userId,
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({ message: 'No matching orders found to delete.' });
    }

    res.status(200).json({ message: `${result.deletedCount} order(s) deleted.` });
  } catch (error) {
    console.error('Delete orders error:', error);
    res.status(500).json({ message: 'Failed to delete orders', error: error.message });
  }
};

