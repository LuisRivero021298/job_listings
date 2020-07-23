import React from "react";
import PropTypes from "prop-types";
import CardJob from "./CardJob";
import { useJobsData } from "../hooks/useJobsData";

const CardGrid = ({ category, setCategories }) => {
  const jobList = useJobsData(category);

  return (
    <section className="card-grid">
      {jobList.map((job) => {
        return <CardJob key={job.id} job={job} setCategories={setCategories} />;
      })}
    </section>
  );
};

CardGrid.defaultProps = {};

CardGrid.propTypes = {
  job: PropTypes.object,
};

export default CardGrid;
