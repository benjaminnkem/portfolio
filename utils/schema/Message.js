import mongoose from "mongoose";

const msgSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  content: { type: String, required: true },
  date: Date,
});

export default mongoose.models.Messages || mongoose.model("Messages", msgSchema);
