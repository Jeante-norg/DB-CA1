import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const DB = process.env.DB_URL;

// RestId- 6797496c9ec5bd80066155b3
//ItemId - 679749c99ec5bd80066155ba

export const connectDB = async () => {
  mongoose
    .connect(
      'mongodb+srv://nayan:UozX3KGkbLI5OHPP@cluster0.vtmuk.mongodb.net/test-DBCA'
    )
    .then(() => {
      console.log('Connected to MongoDB atlas.');
    })
    .catch((err) => {
      console.log('Error connecting to MongoDB: ', err);
    });
};

// export default connectDB;
