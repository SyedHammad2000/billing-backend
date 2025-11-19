import InvoiceSchema from "../model/InvoiceSchema.js";

export const PostInvoice = async (req, res) => {
  try {
    const { customername, price, quantity, litre } = req.body;

    const invoice = await InvoiceSchema.create({
      customername,
      productid: "691c5c0f8f6e670b39092fce",
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
