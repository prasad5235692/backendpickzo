import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
  title: String,          // snapshot of product title at time of order
  price: Number,
  quantity: Number,
});


const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [orderItemSchema],
    totalAmount: { type: Number, required: true },
    status: {
      type: String,
      enum: ['Placed', 'Cancelled'],
      default: 'Placed',
    },
    address: { type: String, required: true },
    paymentMethod: {
      type: String,
      enum: ['COD', 'UPI', 'Card'],
      required: true,
    },
  },
  { timestamps: true }
);

const Order = mongoose.models.Order || mongoose.model('Order', orderSchema);
export default Order;
