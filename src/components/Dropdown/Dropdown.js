import React, { createRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Dropdown.module.scss";

const Dropdown = ({ mainButton, options, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = createRef();
  const mainButtonRef = createRef();

  function handleClose(e) {
    if (
      menuRef.current.contains(e.target) ||
      mainButtonRef.current.contains(e.target)
    ) {
      return;
    }
    setIsDropdownOpen(false);
  }

  function handleOptionFunction(optionFunction) {
    optionFunction();
    // setIsDropdownOpen(false);
  }

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClose);
      return () => {
        document.removeEventListener("mousedown", handleClose);
      };
    }
  });

  return (
    <div className={styles.container}>
      <button
        type="button"
        ref={mainButtonRef}
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        {mainButton}
      </button>

      {isDropdownOpen && (
        <ul className={styles.menu} ref={menuRef}>
          {options.map((option, index) => {
            const [name, optionFunction] = option;
            return (
              <li key={index}>
                <button
                  type="button"
                  onClick={() => handleOptionFunction(optionFunction)}
                >
                  {name}
                </button>
              </li>
            );
          })}
          {children}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  mainButton: PropTypes.element.isRequired,
  options: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  children: PropTypes.node
};

export default Dropdown;
