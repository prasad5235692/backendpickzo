// backend/controllers/productController.js
import mongoose from 'mongoose';
import Product from '../models/Product.js';

export const getAllProducts = async (req, res) => {
  console.log("📦 /api/products called");

  try {
    const { search } = req.query;
    const query = {};

    if (search) {
      const searchRegex = new RegExp(`\\b${search}\\b`, "i"); // Match whole words only

      // Optional: stricter matching if search is a category
     const knownCategories = ['mobiles', 'laptops', 'fashion', 'beauty', 'electronics'];

if (search) {
  const searchRegex = new RegExp(`\\b${search}\\b`, "i");

  if (knownCategories.includes(search.toLowerCase())) {
    query.category = { $in: [new RegExp(search, 'i')] };  // ✅ Use $in + RegExp for array support
  } else {
    query.$or = [
      { title: { $regex: searchRegex } },
      { description: { $regex: searchRegex } },
      { category: { $in: [searchRegex] } } // ✅ Handle category as array of strings
    ];
  }
}

    }

    const products = await Product.find(query);
    console.log(`✅ Found ${products.length} products for search: ${search || 'All'}`);
    res.json(products);

  } catch (err) {
    console.error("❌ Failed to fetch products:", err.message);
    res.status(500).json({ message: 'Failed to fetch products' });
  }
};
export const getHomePageProducts = async (req, res) => {
  console.log("🏠 /api/products/home called");

  try {
    // Fixed homepage categories and limits
    const categories = [
      { name: "iPhone", limit: 8 },
      { name: "Android", limit: 8 },
      { name: "Laptop", limit: 8 },
      { name: "Home", limit: 8 },
      {name: "Pants", limit: 8},
      {name: "Shirts", limit: 8},
      { name: "Men Shirt", limit: 8 },
      { name: "Shoes", limit: 8 },
      { name: "Tshirt", limit: 8 },
      { name: "Kitchen", limit: 8 },
      { name: "Beauty", limit: 8 }
    ];

    const results = {};

    for (const { name, limit } of categories) {
      // ✅ Matches any variant in category array (case-insensitive, singular/plural)
      const items = await Product.find({
        category: { $in: [new RegExp(name, "i")] }
      }).limit(limit);

      results[name] = items;
    }

    res.json(results);
  } catch (err) {
    console.error("❌ Failed to fetch home products:", err.message);
    res.status(500).json({ message: "Failed to fetch home products" });
  }
};
export const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    // ✅ Prevent CastError on invalid IDs
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product ID format' });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    console.error('❌ Failed to fetch product by ID:', err.message);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};