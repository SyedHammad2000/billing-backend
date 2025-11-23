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
    res.status(200).json({ invoice, message: "Invoice added successfully" });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const PostMultipleInvoice = async (req, res) => {
  try {
    await connectDB();
    const { customerName, price, quantity, litre, price2, quantity2, litre2 } =
      req.body;

    console.log(req.body);

    const subtotal1 = price * quantity;
    const subtotal2 = price2 * quantity2;

    const invoice = await MultipleInvoiceSchema.create({
      customerName,
      litre,
      price,
      quantity,
      litre2,
      price2,
      quantity2,
      subtotal1,
      subtotal2,
      total: price * quantity + price2 * quantity2,
    });
    res.status(200).json({ invoice, message: "Invoice added successfully" });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
