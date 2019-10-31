import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.scss";

const ColorPicker = ({ mainButton, options }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle() {
    setIsOpen(!isOpen);
  }
  return (
    <div
      className={styles.container}
      onMouseEnter={handleToggle}
      onMouseLeave={handleToggle}
    >
      <button type="button">{mainButton}</button>

      {isOpen && (
        <div className={styles.menu}>
          <ul className={styles.grid}>
            {options.map((option, index) => {
              const [color, onColorChange] = option;
              return (
                <li key={index}>
                  <button
                    type="button"
                    className={styles[color]}
                    onClick={() => onColorChange(color)}
                  >
                    {color}
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
  options: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired
};

export default ColorPicker;
