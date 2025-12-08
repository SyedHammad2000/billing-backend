import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true,
  },
  price1: {
    type: Number,
    required: true,
  },
  price2: {
    type: Number,
  },
  litre1: {
    type: String,
    required: true,
  },
  litre2: {
    type: String,
  },

  image: {
    type: String,
    default: "https://i.ibb.co/PzW9cb9G/hudwater.png",
  },
});

export default mongoose.model("Product", ProductSchema);
