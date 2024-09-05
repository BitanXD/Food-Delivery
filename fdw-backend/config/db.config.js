import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://bitansarkar088:rigenix2002@cluster0.ev3cf.mongodb.net/food-delivery"
    )
    .then(() => console.log("DB Connected"));
};
