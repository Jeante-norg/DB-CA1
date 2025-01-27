import mongoose from "mongoose";

const restaurantSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  city: {
    type: String,
  },
  itemsArr: [
    {
      type: mongoose.Types.ObjectId,
      ref: "items",
    },
  ],
});

export default mongoose.model("restaurants", restaurantSchema);
