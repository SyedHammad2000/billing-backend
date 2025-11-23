import connectDB from "../lib/db.js";
import InvoiceSchema from "../model/InvoiceSchema.js";
import MultipleInvoiceSchema from "../model/MultipleInvoiceSchema.js";

export const PostInvoice = async (req, res) => {
  try {
    await connectDB();
    const { customerName, price, quantity, litre } = req.body;

    const invoice = await InvoiceSchema.create({
      customerName,
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

export const MultipleInvoiceController = async (req, res) => {
  try {
    await connectDB();
    const {
      customerName,
      price,
      quantity,
      litre,
      price2,
      quantity2,
      litre2,
    } = req.body;

    const invoice = await MultipleInvoiceSchema.create({
      customerName,
      litre,
      price,
      quantity,
      litre2,
      price2,
      quantity2,
      subtotal: price * quantity,
      subtotal2: price2 * quantity2,
      total: subtotal + subtotal2,
    });
    await invoice.save();
    res.status(200).json({ invoice, message: "Invoice added successfully" });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
