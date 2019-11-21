import React from "react";
import PropTypes from "prop-types";
import styles from "./NoteBorder.module.scss";

const NoteBorder = ({ children }) => {
  return <div className={styles.NoteBorder}>{children}</div>;
};

NoteBorder.propTypes = {
  children: PropTypes.element.isRequired,
  // type: PropTypes.string.isRequired
};

export default NoteBorder;
