import React, { useEffect } from "react";
import PropTypes from "prop-types";

const Dialog = ({ children }) => {

  useEffect(() => {
    
  })

  return <section>{children}</section>;
};

Dialog.propTypes = {
  children: PropTypes.element.isRequired
};

export default Dialog;
