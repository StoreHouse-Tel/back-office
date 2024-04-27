import mongoose from 'mongoose';

const containerSchema = new mongoose.Schema(
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
    threshold : {
      type: Number,
      required: true,
    },
    populatorCurrentPercentage : {
      type: Number,
      default: 0
    },
    
    
  },
  { timestamps: true }
);

const Container = mongoose.models.container || mongoose.model('container', containerSchema);

export default Container;
