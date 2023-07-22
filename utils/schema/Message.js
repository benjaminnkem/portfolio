import mongoose from "mongoose";

const msgSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, trim: true, lowecase: true },
  message: { type: String, required: true },
});

export default mongoose.models.Msg || mongoose.model("Msg", msgSchema);
