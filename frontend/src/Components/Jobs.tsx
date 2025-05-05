import React from 'react'
import JobsCard from './JobsCard'
import OpenJobsCard from './OpenJobsCard'

const Jobs = () => {
  return (
    <div>
    <JobsCard
        title="Immediate Cleaning Position Available - Starting at $23.00/Hour"
        company="Reliance Contractors"
        location="Sandy, OR"
        rating={4.2}
        description="Clean and sanitize restrooms, break rooms, and other designated areas. Notify management of any damages or repairs needed. DO NOT SHOW UP AT THE FACILITY."
        salaryRange="23 - $33 an hour"
        quickApply={true}
        postedDaysAgo={9}
      />
      
      <OpenJobsCard
        title="Garbage Collector (Rider)"
        company="Sam's Sanitation"
        location="Marion, OH"
        jobType="Full-time"
        salary="From $19 an hour"
        postedDaysAgo={12}
        source="Indeed"
        experienceRange="0-1 years"
        employmentType="Permanent"
        qualifications={['Management', 'Heavy lifting', 'Sanitation', 'Entry level']}
        fullDescription={`This is a full-time role for a rider at Sam's Sanitation located in Marion, OH. We are seeking a reliable and hardworking garbage collector to join our team. As a rider, you will be responsible for collecting and disposing of waste materials from residential and commercial areas. The rider will also be responsible for ensuring excellent customer service and safety.`}
      />
    </div>
  )
}

export default Jobs
