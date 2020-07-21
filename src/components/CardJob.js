import React from "react";
import PropTypes from "prop-types";
import LabelHeader from "./LabelHeader";

const CardJob = ({ job }) => {
  const { role, level, languages, tools } = job;
  const labels = [role, level, ...languages, ...tools];

  return (
    <article className="card-job" key={job.id}>
      <div className="card-info">
        <div className="card-logo">
          <img src={job.logo} alt={job.company} />
        </div>
        <div className="name-company">
          <h3>{job.company}</h3>
          <LabelHeader show={job.new} nameProp="new" />
          <LabelHeader show={job.featured} nameProp="featured" />
        </div>
        <h2>{job.position}</h2>
        <div className="info-job">
          <span>{job.postedAt}</span>
          <span>{job.contract}</span>
          <span>{job.location}</span>
        </div>
      </div>
      <hr></hr>
      <div className="card-labels">
        {labels.map((label) => (
          <span key={label + 1} className="card-label">
            {label}
          </span>
        ))}
      </div>
    </article>
  );
};

CardJob.defaultProps = {};

CardJob.propTypes = {
  jobs: PropTypes.object,
};

export default CardJob;
