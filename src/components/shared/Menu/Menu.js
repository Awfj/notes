import React, { createRef } from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.scss";
// import Option from "./Option/Option";

const Menu = ({ mainButton, layout, options, children }) => {
  const menuRef = createRef();

  function toggleMenu() {
    const menu = menuRef.current;
    if (menu.hidden) {
      menu.hidden = false;
    } else {
      menu.hidden = true;
    }
  }

  return (
    <div className={styles.container}>
      <button type="button" onClick={toggleMenu}>
        {mainButton}
      </button>

      <div className={styles.menu} ref={menuRef} hidden>
        <ul className={styles[layout]}>
          {options.map((option, index) => (
            <li key={index}>
              <button type="button" onClick={option[1]}>
                {option[0]}
              </button>
            </li>
          ))}
        </ul>
        {/* {children} */}
      </div>
    </div>
  );
};

Menu.propTypes = {
  mainButton: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  layout: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  // onClick: PropTypes.func
  children: PropTypes.element
};

export default Menu;
