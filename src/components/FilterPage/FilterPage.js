import React from "react";
import PropTypes from "prop-types";
import styles from "./FilterPage.module.scss";

const FilterPage = ({ children }) => {
  return <div className={styles.FilterPage}>{children}</div>;
};

FilterPage.propTypes = {
  children: PropTypes.node.isRequired
};

export default FilterPage;
