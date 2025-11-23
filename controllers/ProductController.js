import ProductSchema from "../model/ProductSchema.js";
import connectDB from "../lib/db.js";

export const GetProduct = async (req, res) => {
  try {
    await connectDB();
    const product = await ProductSchema.find();
    res.status(200).json(product);
  } catch (error) {
    throw new Error(error.message);
  }
};

export const PostProduct = async (req, res) => {
  try {
    await connectDB();
    const { name, price, image, litre } = req.body;
    console.log(name);

    const product = await ProductSchema.create({
      name,
      price,
      image,
      litre,
    });
    await product.save();
    res.status(200).json({ product, message: "Product added successfully" });
  } catch (error) {
    console.log(error);
    throw new Error(error.message);
  }
};

export const GetProductById = async (req, res) => {
  try {
    await connectDB();
    const { id } = req.params;
    const product = await ProductSchema.findById(id);
    res.status(200).json(product);
  } catch (error) {
    console.log(error);

    throw new Error(error);
  }
};
