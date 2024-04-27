import mongoose, { Schema, Model, Document } from "mongoose";

interface OrderAttributes {
    containerName: string;
    quantity: number;
}

interface OrderDocument extends OrderAttributes, Document {
    createdAt: Date;
    updatedAt: Date;
}

const OrderSchema: Schema<OrderDocument> = new Schema<OrderDocument>(
    {
        containerName: { type: String, required: true },
        quantity: { type: Number, required: true }
    },
    {
        timestamps: true
    }
);

const Order: Model<OrderDocument> = mongoose.models.Order || mongoose.model<OrderDocument>("OOrder", OrderSchema);

export default Order;