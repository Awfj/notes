import React from "react";
import PropTypes from "prop-types";
import styles from "./NoteFormField.module.scss";

const NoteFormField = ({ isFocused, name, placeholder, value, onSetField }) => {
  return (
    <textarea
      className={styles.NoteFormField}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onSetField}
      // wrap="hard"
      autoFocus={isFocused}
    />
  );
};

NoteFormField.propTypes = {
  isFocused: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onSetField: PropTypes.func,
};

export default NoteFormField;
