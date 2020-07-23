import React, { useState } from "react";
import PropTypes from "prop-types";
import LabelHeader from "./LabelHeader";

const CardJob = ({ job, setCategories }) => {
  const { labels } = job;

  const handleFilterJob = (e) => {
    const nameCategory = e.target.innerHTML;

    setCategories(([category]) => {
      if (category === "") {
        return [[nameCategory]];
      }
      return [[...category, nameCategory]];
    });
  };

  return (
    <article
      className={`card-job ${job.featured ? "border-card" : ""}`}
      key={job.id}
    >
      <div className="card-info">
        <div className="card-logo">
          <div className="logo">
            <img src={job.logo} alt={job.company} />
          </div>
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
          <div key={label + 1} className="card-label">
            <div onClick={handleFilterJob}>{label}</div>
          </div>
        ))}
      </div>
    </article>
  );
};

CardJob.defaultProps = {
  job: {},
};

CardJob.propTypes = {
  job: PropTypes.object.isRequired,
};

export default CardJob;
