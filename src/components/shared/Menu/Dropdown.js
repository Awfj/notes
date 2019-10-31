import React, { createRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.scss";

const Dropdown = ({ mainButton, options, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = createRef();
  const mainButtonRef = createRef();

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleClose(e) {
    if (
      menuRef.current.contains(e.target) ||
      mainButtonRef.current.contains(e.target)
    ) {
      return;
    }
    setIsOpen(false);
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("mousedown", handleClose);
      return () => {
        document.removeEventListener("mousedown", handleClose);
      };
    }
  });

  return (
    <div className={styles.container}>
      <button type="button" ref={mainButtonRef} onClick={handleToggle}>
        {mainButton}
      </button>

      {isOpen && (
        <div className={styles.menu} ref={menuRef}>
          <ul className={styles.list}>
            {options.map((option, index) => {
              const [name, onFunction] = option;
              return (
                <li key={index}>
                  <button type="button" onClick={onFunction}>
                    {name}
                  </button>
                </li>
              );
            })}
            {children}
          </ul>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  mainButton: PropTypes.element.isRequired,
  options: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  children: PropTypes.element
};

export default Dropdown;
