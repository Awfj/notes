import React from "react";
import PropTypes from "prop-types";
import styles from "./FilterMessage.module.scss";

const FilterMessage = ({ extraMessage, icon, message }) => {
  return (
    <div className={styles.FilterMessage}>
      <p>{extraMessage}</p>
      <div>
        {icon}
        <p>{message}</p>
      </div>
    </div>
  );
};

FilterMessage.propTypes = {
  extraMessage: PropTypes.string,
  icon: PropTypes.node.isRequired,
  message: PropTypes.string.isRequired
};

export default FilterMessage;
