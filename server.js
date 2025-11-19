import express from "express";
import dotenv from "dotenv";
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

dotenv.config();
connectDB();
app.use("/api/v1", ProductRoute);

const port = process.env.PORT || 3000;
app.listen(port, "0.0.0.0", () => {
  console.log("Server running on port", port);
});
