import data from "../data/data";

export const getJobs = (category) => {
  if (category === "") {
    return data;
  }
  const jobList = data.filter((job) => {
    return job.role === category;
  });

  return jobList;
};
