import React from "react";
import PropTypes from "prop-types";
import styles from "./DialogTitle.module.scss";

const DialogTitle = ({ id, title }) => {
  return (
    <header className={styles.root}>
      <h2 id={id}>{title}</h2>
    </header>
  );
};

DialogTitle.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default DialogTitle;
