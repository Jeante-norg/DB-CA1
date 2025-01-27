import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
});

export default mongoose.model("items", itemSchema);
