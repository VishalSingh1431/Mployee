import express from "express";
import mongoose from "mongoose"; 
import cors from "cors";
import dotenv from "dotenv";
import jobRoutes from "./routes/jobsRoutes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", jobRoutes);

mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(5000, () => console.log("Server running on port 5000"));
  })
  .catch((err) => console.log(err));
