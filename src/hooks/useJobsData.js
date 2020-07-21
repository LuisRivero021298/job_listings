import { useState, useEffect } from "react";
import { getJobs } from "../helper/getJobs";

export const useJobsData = (category) => {
  const [state, setState] = useState([]);

  useEffect(() => {
    const data = getJobs(category);
    setState(data);
  }, [category]);

  return state;
};
