// server.js
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// Route imports
import productRoutes from './routes/productRoutes.js';
import authRoutes from './routes/authRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import userRoutes from './routes/userRoutes.js';
import ordersRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

// Config
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URL = process.env.MONGO_URL;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/users', userRoutes); 
app.use('/api/orders', ordersRoutes);
app.use('/api', uploadRoutes);


// Root Route
app.get('/', (req, res) => {
  res.send('✅ API is running...');
});

// MongoDB Connection
import connectDB from './config/db.js';

// Connect to MongoDB
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
});
