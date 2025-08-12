import mongoose from 'mongoose';
// ...
const MONGO_URL = process.env.MONGO_URL;
// ...
mongoose.connect(MONGO_URL, {
})
.then(() => {
  console.log('✅ MongoDB connected');
  app.listen(PORT, () => {
    console.log(`🚀 Server running at http://localhost:${PORT}`);
  });
})
.catch((err) => {
  console.error('❌ MongoDB connection error:', err.message);
});
