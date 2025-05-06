import  { useEffect, useState } from 'react';
import axios from 'axios';
import JobsCard from './JobsCard';
import OpenJobsCard from './OpenJobsCard';

interface Job {
  title: string;
  company: string;
  location: string;
  job_link: string;
  employment_type: string;
  experience: string;
  source: string;
  postedDateTime: { $date: string };
  companyImageUrl: string;
  min_exp: number;
  max_exp: number;
  seniority_level?: string;
  company_url?: string;
  country?: string;
  companytype?: string;
}

const Jobs = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get('https://mployee-production.up.railway.app/api/jobs');
        if (Array.isArray(res.data)) {
          setJobs(res.data);
        } else {
          console.error("Unexpected response format:", res.data);
          setError("Unexpected response format.");
        }
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Error fetching jobs.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="flex w-full min-h-screen p-4 gap-4">
      {isLoading ? (
        <p>Loading jobs...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          {/* Job List */}
          <div className="w-1/2 overflow-y-auto max-h-screen pr-2">
            {jobs.length === 0 ? (
              <p>No jobs available</p>
            ) : (
              jobs.map((job, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedJob(job)}
                  className="cursor-pointer"
                >
                  <JobsCard
                    title={job.title || "Not available"}
                    company={job.company || "Not available"}
                    location={job.location || "Not available"}
                    rating={4.0}
                    description={job.experience || "Experience not specified"}
                    salaryRange={`${job.min_exp}-${job.max_exp} yrs`}
                    quickApply={true}
                    postedDaysAgo={
                      job.postedDateTime?.$date
                        ? Math.floor((Date.now() - new Date(job.postedDateTime.$date).getTime()) / (1000 * 60 * 60 * 24))
                        : 0
                    }
                  />
                </div>
              ))
            )}
          </div>

          {/* Selected Job Details */}
          <div className="w-1/2">
            {selectedJob ? (
              <OpenJobsCard
                title={selectedJob.title || "Not available"}
                company={selectedJob.company || "Not available"}
                location={selectedJob.location || "Not available"}
                jobType={selectedJob.seniority_level || "Not specified"}
                salary={`${selectedJob.min_exp}-${selectedJob.max_exp} years experience`}
                postedDaysAgo={
                  selectedJob.postedDateTime?.$date
                    ? Math.floor((Date.now() - new Date(selectedJob.postedDateTime.$date).getTime()) / (1000 * 60 * 60 * 24))
                    : 0
                }
                source={selectedJob.source || "Not available"}
                experienceRange={selectedJob.experience || "Not available"}
                employmentType={selectedJob.employment_type || "Not available"}
                qualifications={['Not available']}
                fullDescription={`Apply here: ${selectedJob.job_link}`}
              />
            ) : (
              <p className="text-gray-500">Click on a job to view details</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Jobs;
