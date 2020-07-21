import React from "react";
import PropTypes from "prop-types";

const CardJob = ({ job }) => {
  return <div className="card-job"></div>;
};

CardJob.defaultProps = {};

CardJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default CardJob;
