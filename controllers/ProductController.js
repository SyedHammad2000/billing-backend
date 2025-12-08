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
    const { customerName, price1, image, litre1, price2, litre2 } = req.body;
    console.log(customerName);

    const product = await ProductSchema.create({
      customerName,
      price1,
      image,
      litre1,
      price2,
      litre2,
      
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
