import Cart from '../models/Cart.js';
import Product from '../models/Product.js';

// Add item or update quantity if exists
export const addToCart = async (req, res) => {
  try {
    const userId = req.user?.userId;
    if (!userId) return res.status(401).json({ message: 'Unauthorized' });

    const { productId, quantity } = req.body;
    if (!productId || quantity == null) {
      return res.status(400).json({ message: 'Product ID and quantity are required' });
    }

    const product = await Product.findById(productId).lean();
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    const safeTitle = (typeof product.title === 'string' && product.title.trim()) || `Product-${product._id}`;
    const safeQuantity = Math.max(1, parseInt(quantity, 10) || 1);

    let cart = await Cart.findOne({ userId });

    const newItem = {
      productId: product._id,
      title: safeTitle,
      price: product.price ?? 0,
      quantity: safeQuantity,
      image: product.image || '',
    };

    if (!cart) {
      cart = new Cart({ userId, items: [newItem] });
    } else {
      const existingItem = cart.items.find(item => item.productId.toString() === productId);
      if (existingItem) {
        existingItem.quantity += safeQuantity;
        existingItem.title = safeTitle;
        existingItem.price = product.price ?? 0;
        existingItem.image = product.image || '';
      } else {
        cart.items.push(newItem);
      }
    }

    await cart.save();
    res.status(200).json({ message: 'Item added to cart', cart });
  } catch (error) {
    console.error('Add to cart error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Update quantity of cart item
export const updateQuantity = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const { itemId, quantity } = req.body;

    if (!itemId || quantity == null || quantity < 1) {
      return res.status(400).json({ message: 'Valid item ID and quantity (>=1) required' });
    }

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    const item = cart.items.id(itemId);
    if (!item) return res.status(404).json({ message: 'Item not found in cart' });

    item.quantity = quantity;

    // Refresh title, price, image from Product in case updated
    const product = await Product.findById(item.productId);
    if (product) {
      item.title = product.title || 'Unnamed Product';
      item.price = product.price;
      item.image = product.image || '';
    }

    await cart.save();

    res.status(200).json({ message: 'Quantity updated', item });
  } catch (error) {
    console.error('Update quantity error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Remove an item from cart
export const removeItemFromCart = async (req, res) => {
  try {
    const userId = req.user?.userId;
    const itemId = req.params.itemId;

    const cart = await Cart.findOne({ userId });
    if (!cart) return res.status(404).json({ message: 'Cart not found' });

    cart.items = cart.items.filter(item => item._id.toString() !== itemId);
    await cart.save();

    res.status(200).json({ message: 'Item removed' });
  } catch (error) {
    console.error('Remove from cart error:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
