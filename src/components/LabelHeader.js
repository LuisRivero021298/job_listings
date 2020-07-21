import React from "react";
import PropTypes from "prop-types";

const LabelHeader = ({ show, nameProp }) => {
  if (nameProp === "new") {
    if (show) {
      return <span>New!</span>;
    }
    return <></>;
  }
  if (nameProp === "featured") {
    if (show) {
      return <span>featured</span>;
    }
    return <></>;
  }
};

LabelHeader.propTypes = {};

export default LabelHeader;
