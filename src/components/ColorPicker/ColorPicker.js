import React, { useState } from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

import styles from "./ColorPicker.module.scss";

const COLORS = [
  "white",
  "red",
  "orange",
  "yellow",
  "green",
  "teal",
  "blue",
  "dark-blue",
  "purple",
  "pink",
  "brown",
  "grey"
];

const ColorPicker = ({ mainButton, onChangeNoteColor, activeColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Tooltip title="Change colour">
        <IconButton>{mainButton}</IconButton>
      </Tooltip>

      {isOpen && (
        <div className={styles.menu}>
          <ul>
            {COLORS.map((color, index) => {
              return (
                <li key={index}>
                  <IconButton
                    // classes={{root: styles[color]}}
                    className={styles[color]}
                    onClick={() => onChangeNoteColor(color)}
                  >
                    {activeColor === color ? (
                      <CheckCircleOutlineIcon />
                    ) : (
                      <RadioButtonUncheckedIcon />
                    )}
                  </IconButton>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

ColorPicker.propTypes = {
  mainButton: PropTypes.element.isRequired,
  onChangeNoteColor: PropTypes.func.isRequired,
  activeColor: PropTypes.string.isRequired
};

export default ColorPicker;
