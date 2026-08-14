

import mongoose from "mongoose";

const connectDb = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }

const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Error:", error);
    throw error;
  }
};

export default connectDb;