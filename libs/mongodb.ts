import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const connect = await mongoose.connect(process.env.MONGODB_URI as string);
        console.log(`MongoDB Connected: ${connect.connection.host}`);
    } catch (error: any) {
        console.error(`Error: ${(error as Error).message}`);
        process.exit(1);
    }
};

export default connectDB;
