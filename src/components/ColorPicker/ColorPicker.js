import React, { useState } from "react";
import PropTypes from "prop-types";

import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import PaletteOutlinedIcon from "@material-ui/icons/PaletteOutlined";

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

const ColorPicker = ({ activeColor, onChangeNoteColor }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.container}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Tooltip title="Change colour">
        <IconButton>
          <PaletteOutlinedIcon />
        </IconButton>
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
                    onClick={() => {
                      console.log(color)
                      onChangeNoteColor(color)}}
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
  activeColor: PropTypes.string.isRequired,
  onChangeNoteColor: PropTypes.func.isRequired
};

export default ColorPicker;
