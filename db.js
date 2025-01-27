import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB = process.env.DB_URL;

export const connectDB = async () => {
  mongoose
    .connect(DB)
    .then(() => {
      console.log("Connected to MongoDB atlas.");
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB: ", err);
    });
};

// export default connectDB;
