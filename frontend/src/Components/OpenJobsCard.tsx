import React from 'react';

interface OpenJobsCardProps {
  title: string;
  company: string;
  location: string;
  jobType: string;
  salary: string;
  postedDaysAgo: number;
  source: string;
  experienceRange: string;
  employmentType: string;
  qualifications?: string[];
  fullDescription: string;
}

const OpenJobsCard: React.FC<OpenJobsCardProps> = ({
  title,
  company,
  location,
  jobType,
  salary,
  postedDaysAgo,
  source,
  experienceRange,
  employmentType,
  qualifications = [],
  fullDescription,
}) => {
  return (
    <div className="border rounded-md shadow-sm max-w-2xl p-4 font-sans bg-white overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <p className="text-gray-700 mt-1">{company}</p>
          <p className="text-gray-500 text-sm">{location}</p>
        </div>
        <button className="bg-pink-600 text-white text-sm font-semibold px-4 py-1 rounded-md">
          ⚡ Quick Apply
        </button>
      </div>

      {/* Job Details */}
      <h3 className="mt-6 text-md font-semibold text-gray-800">Job Details</h3>
      <div className="flex flex-wrap gap-4 text-sm text-gray-600 mt-2">
        <span>🧾 {jobType}</span>
        <span>💲 {salary}</span>
        <span>🕒 {postedDaysAgo} days ago</span>
      </div>

      {/* Qualifications */}
      {qualifications.length > 0 && (
        <>
          <h3 className="mt-6 text-md font-semibold text-gray-800">Qualifications</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {qualifications.map((q, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-gray-700 px-3 py-1 text-sm rounded-full"
              >
                {q}
              </span>
            ))}
          </div>
        </>
      )}

      {/* Full Job Description */}
      <h3 className="mt-6 text-md font-semibold text-gray-800">Full Job Description</h3>
      <div className="text-sm text-gray-700 mt-2 leading-relaxed space-y-2">
        <p>{fullDescription}</p>
        <p><strong>Employment Type:</strong> {employmentType}</p>
        <p><strong>Posted:</strong> {postedDaysAgo} day{postedDaysAgo !== 1 ? 's' : ''} ago</p>
        <p><strong>Source:</strong> {source}</p>
        <p><strong>Experience Range:</strong> {experienceRange}</p>
      </div>
    </div>
  );
};

export default OpenJobsCard;
