import mongoose from "mongoose";

const MultipleInvoiceSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
    },
    productid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    litre: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      required: true,
    },
    productid2: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    litre2: {
      type: String,
    },
    price2: {
      type: Number,
    },
    quantity2: {
      type: Number,
      default: 0,
    },
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Invoice", MultipleInvoiceSchema);
