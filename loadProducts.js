import mongoose from "mongoose";
import products from "./productsData.js";
import Product from "./models/Product.js";

const MONGODB_URI = "mongodb+srv://prasad:Rojao9342@cluster0.3zqzcev.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0";


async function loadProducts() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ MongoDB connected...");

    await Product.deleteMany();
    console.log("🧹 Old products deleted.");

    await Product.insertMany(products);
    console.log("✅ Products successfully loaded to database!");

    // 🔍 Log inserted products to verify
    const inserted = await Product.find({});
    console.log("📦 Inserted products:", inserted);

    process.exit();
  } catch (err) {
    console.error("❌ Error loading data:", err.message);
    process.exit(1);
  }
}

loadProducts();
