import React from "react";
import PropTypes from "prop-types";

const withNotes = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent asf='gege' {...props} />;
  };
};

withNotes.propTypes = {};

export default withNotes;
