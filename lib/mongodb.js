import mongoose from "mongoose";

export const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connection to mongod");
    } catch(error) {
        console.log("Error connecting mongodb : ", error);
    }
}