import React from 'react';

interface JobsCardProps {
  title: string;
  company: string;
  location: string;
  rating?: number;
  description: string;
  salaryRange: string;
  postedDaysAgo: number;
  quickApply?: boolean;
}

const JobsCard: React.FC<JobsCardProps> = ({
  title,
  company,
  location,
  rating,
  description,
  salaryRange,
  postedDaysAgo,
  quickApply = false,
}) => {
  return (
    <div className="border-b py-4 px-2 max-w-2xl font-sans hover:bg-gray-50 transition">
      {/* Title */}
      <h2 className="text-blue-700 font-semibold text-md">
        {title}
      </h2>

      {/* Company, Location, Rating */}
      <div className="flex items-center text-sm text-gray-700 mt-1 gap-1">
        <span className="font-medium">{company}</span>
        <span>—</span>
        <span>{location}</span>
        {rating !== undefined && (
          <>
            <span className="ml-2 text-yellow-500">★</span>
            <span>{rating.toFixed(1)}</span>
          </>
        )}
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-1 line-clamp-2">
        {description}
      </p>

      {/* Bottom Row */}
      <div className="flex items-center justify-between text-sm mt-2">
        <p className="font-medium text-gray-800">{salaryRange}</p>
        <div className="flex items-center gap-2">
          {quickApply && (
            <button className="text-purple-600 font-semibold hover:underline">
              Quick Apply
            </button>
          )}
          <span className="text-gray-500">{postedDaysAgo}d</span>
        </div>
      </div>
    </div>
  );
};

export default JobsCard;
