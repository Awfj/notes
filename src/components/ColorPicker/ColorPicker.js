import React, { useState } from "react";
// import { connect } from "react-redux";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./ColorPicker.module.scss";
// import { changeNoteColor } from "../../redux/actions/actionCreators";

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
      <button type="button">{mainButton}</button>

      {isOpen && (
        <div className={styles.menu}>
          <ul>
            {COLORS.map((color, index) => {
              return (
                <li key={index}>
                  <button
                    type="button"
                    className={`${styles[color]} fa-layers`}
                    onClick={() => onChangeNoteColor(color)}
                  >
                    <FontAwesomeIcon
                      className={styles.circle}
                      icon={faCircle}
                    />
                    {activeColor === color && (
                      <FontAwesomeIcon
                        className={styles.check}
                        icon={faCheck}
                        inverse
                        transform="shrink-8"
                      />
                    )}
                  </button>
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
