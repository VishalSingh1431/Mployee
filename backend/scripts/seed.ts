import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import Job from "../models/Jobs";

dotenv.config();

const jobsFilePath = path.resolve(__dirname, "../data/jobs.json");
const rawData = fs.readFileSync(jobsFilePath, "utf-8");
const jobData = JSON.parse(rawData);

const seedJobs = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log("MongoDB connected.");

    await Job.deleteMany({});
    await Job.insertMany(jobData);

    console.log("Job data seeded successfully.");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding job data:", err);
    process.exit(1);
  }
};

seedJobs();
