import data from "../data/data";

export const getJobs = (category) => {
  const { role, level } = category;
  if (category === "") {
    return data;
  }

  const roleList = data.filter((job) => {
    if (role && level) {
      return job.role === role && job.level === level;
    }
    if (role && !level) {
      return job.role === role;
    }
    if (!role && level) {
      return job.level === level;
    }
  });

  const jobList = data.map((job) => {
    return {
      id: job.id,
      company: job.company,
      contract: job.contract,
      featured: job.featured,
      location: job.location,
      logo: job.logo,
      new: job.new,
      position: job.position,
      postedAt: job.postedAt,
      labels: [job.role, job.level, ...job.tools, ...job.languages],
    };
  });

  const filterJob = () => {
    return jobList.filter((job) => {
      let existWord = false;
      for (let i = 0; i < category.length; i++) {
        existWord = job.labels.includes(category[i]);
        if (existWord === false) {
          return existWord;
        }
      }
      return existWord;
    });
  };

  return filterJob;
};
