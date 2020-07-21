import data from "../data/data";

export const getJobs = (category) => {
  const jobList = data.filter((job) => {
    return job.role === category;
  });

  return jobList;
};
