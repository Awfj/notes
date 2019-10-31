import React, { createRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.scss";

const Menu = ({
  mainButton,
  options,
  isGrid = false,
  isHoverable = false,
  isOptionPassesArgs = false,
  children
}) => {
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
    if (isOpen && !isHoverable) {
      document.addEventListener("mousedown", handleClose);
      return () => {
        document.removeEventListener("mousedown", handleClose);
      };
    }
  });

  return (
    <div
      className={styles.container}
      onMouseEnter={isHoverable ? handleToggle : undefined}
      onMouseLeave={isHoverable ? handleToggle : undefined}
    >
      <button
        type="button"
        ref={mainButtonRef}
        onClick={isHoverable ? undefined : handleToggle}
      >
        {mainButton}
      </button>

      {isOpen && (
        <div className={styles.menu} ref={menuRef}>
          <ul className={styles[isGrid ? "grid" : "list"]}>
            {options.map((option, index) => {
              const [name, onFunction] = option;
              return (
                <li key={index}>
                  <button
                    type="button"
                    onClick={
                      isOptionPassesArgs
                        ? () => onFunction(name)
                        : onFunction
                    }
                  >
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

Menu.propTypes = {
  mainButton: PropTypes.element.isRequired,
  options: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  isGrid: PropTypes.bool,
  isHoverable: PropTypes.bool,
  isOptionPassesArgs: PropTypes.bool,
  children: PropTypes.element
};

export default Menu;
