import express from "express";
import { GetInvoice } from "../controllers/InvoiceController.js";

const router = express.Router();

// {invoice route}
router.get("/invoice", GetInvoice);

export default router;
