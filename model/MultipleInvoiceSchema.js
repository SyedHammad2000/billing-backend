import mongoose from "mongoose";

const MultipleInvoiceSchema = new mongoose.Schema(
  {
    customerName: {
      type: String,
      required: true,
    },

    litre1: {
      type: String,
      required: true,
    },
    price1: {
      type: Number,
      required: true,
    },
    quantity1: {
      type: Number,
      default: 0,
    },
    litre2: {
      type: String,
    },
    price2: {
      type: Number,
      default: 0,
      
    },
    quantity2: {
      type: Number,
      default: 0,
    },
    subtotal1: {
      type: Number,
    },
    subtotal2: {
      type: Number,
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

export default mongoose.models.MultipleInvoice ||
  mongoose.model("MultipleInvoice", MultipleInvoiceSchema);
