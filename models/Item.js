import mongoose from "mongoose";

const itemSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  title: String,
  description: String,
  status: { type: String, enum: ["Lost", "Found"] },
  imageUrl: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Item", itemSchema);
