import connectDB from "../lib/db.js";

import MultipleInvoiceSchema from "../model/MultipleInvoiceSchema.js";

export const GetInvoice = async (req, res) => {
  try {
    await connectDB();
    // ascending order
    const invoice = await MultipleInvoiceSchema.find()
      .sort({ createdAt: "desc" })
      .limit(10);

    res.status(200).json(invoice);
  } catch (error) {
    throw new Error(error);
  }
};

export const PostMultipleInvoice = async (req, res) => {
  try {
    await connectDB();
    const {
      customerName,
      price1,
      quantity1,
      litre1,
      price2,
      quantity2,
      litre2,
    } = req.body;

    if (!price1 || !quantity1 || !litre1)
      return res
        .status(400)
        .json({ message: "Please provide price2 and quantity2" });
    const Price2 = Number(price2) || 0;
    const Quantity2 = Number(quantity2) || 0;

    console.log("req.body", req.body, price2, quantity2);

    const subtotal1 = price1 * quantity1;
    const subtotal2 = Price2 * Quantity2;

    const invoice = await MultipleInvoiceSchema.create({
      customerName,
      litre1,
      price1,
      quantity1,
      litre2,
      price2: Price2,
      quantity2: Quantity2,
      subtotal1,
      subtotal2,
      total: price1 * quantity1 + Price2 * Quantity2,
    });
    res.status(200).json({ invoice, message: "invoice added successfully" });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
