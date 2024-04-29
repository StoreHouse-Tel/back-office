import mongoose, { Document, Model } from 'mongoose';

export interface IOrder extends Document {
  name: string;
  quantity: number;
  
}

const orderSchema = new mongoose.Schema<IOrder>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
   
    quantity: {
      type: Number,
      required: true,
    },
   
  },
  { timestamps: true }
);

const Order: Model<IOrder> =
  mongoose.models.order || mongoose.model<IOrder>('order', orderSchema);

export default Order;
