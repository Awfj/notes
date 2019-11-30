import React from "react";
import PropTypes from "prop-types";
import styles from './Input.module.scss'

const Input = ({ id, placeholder, type = "text" }) => {
  return <input className={styles.root} id={id} placeholder={placeholder} type={type} />;
};

Input.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(["text", 'search'])
};

export default Input;
