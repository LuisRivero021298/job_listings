import React from "react";
import PropTypes from "prop-types";

const LabelHeader = ({ show, nameProp }) => {
  if (nameProp === "new") {
    if (show) {
      return (
        <div className="new-job">
          <span>New!</span>
        </div>
      );
    }
    return <></>;
  }
  if (nameProp === "featured") {
    if (show) {
      return (
        <div className="featured">
          <span>featured</span>
        </div>
      );
    }
    return <></>;
  }
};

LabelHeader.propTypes = {
  show: PropTypes.bool.isRequired,
  nameProp: PropTypes.string.isRequired,
};

export default LabelHeader;
