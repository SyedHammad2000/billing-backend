import express from "express";
import {
  GetProduct,
  GetProductById,
  PostProduct,
} from "../controllers/ProductController.js";
import { PostMultipleInvoice } from "../controllers/InvoiceController.js";

const router = express.Router();

router.get("/", GetProduct);
router.get("/:id", GetProductById);
router.post("/add", PostProduct);

// {invoice route}
router.post("/multipleinvoice", PostMultipleInvoice);

export default router;
