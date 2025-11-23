import mongoose from "mongoose";

const MultipleInvoiceSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
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
      default: 0,
    },
    litre2: {
      type: String,
      required: true,
    },
    price2: {
      type: Number,
      required: true,
    },
    quantity2: {
      type: Number,
      default: 0,
    },
    subtotal1: {
      type: Number,
      default: 0,
    },
    subtotal2: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
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

export default mongoose.models.Invoice ||
  mongoose.model("Invoice", MultipleInvoiceSchema);
