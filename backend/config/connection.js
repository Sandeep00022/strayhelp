import mongoose from "mongoose";

// Connect to MongoDB
export const connectDB  = () => {
    try {
        mongoose.connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}