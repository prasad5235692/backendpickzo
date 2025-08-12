import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },         // Google Drive or public image URL
  price: { type: Number, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  about: { type: String, required: true },
  category: {
    type: [String], // <-- array of strings
    required: true
      }    // ✅ Add this line
});

const Product = mongoose.model("Product", productSchema);

export default Product;
