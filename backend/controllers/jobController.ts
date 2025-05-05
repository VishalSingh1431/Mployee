import { Request, Response } from "express";
import Job from "../models/Jobs";

export const getAllJobs = async (req: Request, res: Response) => {
  try {
    const location = req.query.location as string;
    const query = location ? { location: new RegExp(location, "i") } : {};
    const jobs = await Job.find(query);
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch jobs." });
  }
};
