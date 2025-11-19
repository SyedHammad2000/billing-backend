import dotenv from "dotenv";
dotenv.config(); // Load environment variables immediately

import express from "express";
import ProductRoute from "./route/ProductRoute.js";
import connectDB from "./lib/db.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

connectDB(); // Connect to MongoDB

app.use("/api/v1", ProductRoute);
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});


const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log("Server running on port", port);
});
