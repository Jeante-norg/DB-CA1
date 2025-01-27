import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import { connectDB } from "./db.js";
import restaurantModel from "./restaurant.model.js";
import itemModel from "./item.model.js";
const app = express();

app.use(express.json());

app.get("/get-restaurant", async (req, res) => {
  try {
    const allRestaurants = await restaurantModel.find();
    res.status(200).json({
      success: true,
      data: allRestaurants,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

app.post("/create-restaurant", async (req, res) => {
  const { name, city } = req.body;
  try {
    const newRestaurant = await restaurantModel.create({
      name,
      city,
    });
    res.status(201).json({
      success: true,
      message: "Restaurant successfully created.",
      data: newRestaurant,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

app.put("/update-restaurant/:id", async (req, res) => {
  const restaurantId = req.params.id;
  try {
    const updatedRestaurant = await restaurantModel.findByIdAndUpdate(
      restaurantId,
      req.body,
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Restaurant successfully updated.",
      data: updatedRestaurant,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

app.delete("/delete-restaurant/:id", async (req, res) => {
  const restaurantId = req.params.id;
  try {
    const deletedRestaurant = await restaurantModel.findByIdAndDelete(
      restaurantId
    );
    res.status(200).json({
      success: true,
      message: "Restaurant successfully deleted.",
      data: deletedRestaurant,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

app.post("/create-item", async (req, res) => {
  const { name, price } = req.body;
  try {
    const newItem = await itemModel.create({
      name,
      price,
    });
    res.status(201).json({
      success: true,
      message: "item successfully created.",
      data: newItem,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

app.get("/get-item", async (req, res) => {
  try {
    const allItems = await itemModel.find();
    res.status(200).json({
      success: true,
      data: allItems,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

app.put("/update-item/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    const updatedItem = await itemModel.findByIdAndUpdate(itemId, req.body, {
      new: true,
    });
    res.status(200).json({
      success: true,
      message: "Item successfully updated.",
      data: updatedItem,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

app.delete("/delete-item/:id", async (req, res) => {
  const itemId = req.params.id;
  try {
    const deletedItem = await itemModel.findByIdAndDelete(itemId);
    res.status(200).json({
      success: true,
      message: "Item successfully deleted.",
      data: deletedItem,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

app.post("/add-item-to-restaurant/:id", async (req, res) => {
  const { itemId } = req.params.id;
  try {
    const restaurantId = req.params.id;
    // const item = await itemModel.findOne(itemId);
    const restaurant = await restaurantModel.findOne(restaurantId);
    const updated = restaurant.push({ itemsArr: updated });
    res.status(200).json({
      success: true,
      message: "Item successfully added to the restaurant.",
      data: updated,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error." });
  }
});

const port = process.env.PORT;

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port http://localhost:${port}`);
});
