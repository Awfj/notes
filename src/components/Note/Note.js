import React from "react";
import PropTypes from "prop-types";
import styles from "./Note.module.scss";

const Note = ({ children }) => {
  return <div className={styles.Note}>{children}</div>;
};

Note.propTypes = {
  children: PropTypes.element.isRequired,
  // type: PropTypes.string.isRequired
};

export default Note;
