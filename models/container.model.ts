import mongoose, { Document, Model } from 'mongoose';

export interface IContainer extends Document {
  name: string;
  unit: string;
  maxCapacity: number;
  quantity: number;
  threshold: number;
  populatorCurrentPercentage: number;
}

const containerSchema = new mongoose.Schema<IContainer>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    unit: {
      type: String,
      required: true,
    },
    maxCapacity: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    threshold: {
      type: Number,
      required: true,
    },
    populatorCurrentPercentage: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Container: Model<IContainer> =
  mongoose.models.container || mongoose.model<IContainer>('container', containerSchema);

export default Container;
