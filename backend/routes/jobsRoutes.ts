import express from "express";
import { getAllJobs, getJobById } from "../controllers/jobController";

const router = express.Router();

// Route to get all jobs
router.get("/jobs", getAllJobs);

// Route to get a specific job by ID
router.get("/jobs/:id", getJobById);

export default router;
