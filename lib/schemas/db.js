import mongoose from "mongoose";

const connectToDB = async () => mongoose.connect(process.env.MONGODB_URI);
export default connectToDB;
