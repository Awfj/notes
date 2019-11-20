import React from "react";
import PropTypes from "prop-types";
import styles from "./NoteInput.module.scss";

const NoteInput = ({ name, placeholder, value, onSetValue }) => {
  return (
    <input
      autoComplete="off"
      className={styles.NoteInput}
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onSetValue}
    />
  );
};

NoteInput.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onSetValue: PropTypes.func.isRequired
};

export default NoteInput;
