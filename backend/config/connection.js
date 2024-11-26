import mongoose from "mongoose";

// Connect to MongoDB
export const connectDB  = () => {
    try {
        mongoose.connect('mongodb+srv://sy344942:sHzMbjt7BYqxbPtR@helpbuddy.oz0wq.mongodb.net/');
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
}