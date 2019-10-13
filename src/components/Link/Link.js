import React from "react";
import PropTypes from "prop-types";
import styles from "./Link.module.scss";

const Link = ({ active, children, onClick }) => {
  return (
    <a href={`#${children}`} className={styles.Link} onClick={onClick}>
      {children}
    </a>
  );
};

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;
