import connectDB from "../lib/db.js";
import InvoiceSchema from "../model/InvoiceSchema.js";

export const PostInvoice = async (req, res) => {
  try {
    await connectDB();
    const { customername, price, quantity, litre } = req.body;

    const invoice = await InvoiceSchema.create({
      customername,
      productid,
      litre,
      price,
      quantity,
      total: price * quantity,
    });
    await invoice.save();
    res.status(200).json({ invoice, message: "Invoice added successfully" });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

const MultipleInvoiceController = async (req, res) => {
  try {
    await connectDB();
    const { customername, price, quantity, litre } = req.body;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
