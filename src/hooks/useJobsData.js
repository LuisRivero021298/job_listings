import { useState, useEffect } from "react";
import { getJobs } from "../helper/getJobs";

export const useJobsData = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    const data = getJobs(category);
    setState({
      data,
      loading: false,
    });
  }, [category]);

  return state;
};
