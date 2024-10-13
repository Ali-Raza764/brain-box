import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("connected successfully");
  } catch (error) {
    console.log("Error while connecting to the database");
  }
};
