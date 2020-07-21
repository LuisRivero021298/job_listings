import React from "react";
import PropTypes from "prop-types";

const CardJob = ({ jobs }) => {
  console.log(jobs);
  return (
    <article className="card-job">
      <div className="card-header"></div>
      <div className="card-body"></div>
    </article>
  );
};

CardJob.defaultProps = {};

CardJob.propTypes = {
  jobs: PropTypes.array.isRequired,
};

export default CardJob;
