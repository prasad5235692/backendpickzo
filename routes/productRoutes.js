import express from 'express';
import { getAllProducts, getHomePageProducts, getProductById } from '../controllers/productController.js';
import Product from '../models/Product.js';

const router = express.Router();

// ✅ GET homepage fixed products
router.get('/home', getHomePageProducts);

// ✅ GET all products (with optional search query)
router.get('/', getAllProducts);

// ✅ GET products by category (case-insensitive match inside array)
router.get('/category/:category', async (req, res) => {
  try {
    const category = req.params.category;

    const products = await Product.find({
      category: { $elemMatch: { $regex: new RegExp(category, 'i') } }
    }).lean(); // ⚡ faster with lean()

    res.json(products);
  } catch (err) {
    console.error('❌ Category fetch error:', err.message);
    res.status(500).json({ msg: 'Failed to fetch category products' });
  }
});

// ✅ GET product by ID (keep this last!)
router.get('/:id', getProductById);

export default router;
