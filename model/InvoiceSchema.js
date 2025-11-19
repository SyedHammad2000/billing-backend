import mongoose from "mongoose";

const InvoiceSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
    },
    productid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    litre: {
      type: Number,
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
    date: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Invoice", InvoiceSchema);
