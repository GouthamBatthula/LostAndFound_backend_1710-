import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  googleId: { type: String, required: true },
  name: String,
  email: String,
  profilePic: String
}, { timestamps: true });

export default mongoose.model("User", userSchema);
