import React from "react";
import PropTypes from "prop-types";
import styles from "./DialogActions.module.scss";

const DialogActions = ({ children }) => {
  return <footer className={styles.root}>{children}</footer>;
};

DialogActions.propTypes = {
  children: PropTypes.node.isRequired
};

export default DialogActions;
