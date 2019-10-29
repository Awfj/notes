import React, { createRef } from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.scss";

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

  const test = true;

  return (
    <div
      className={styles.container}
      onMouseEnter={test ? undefined : toggleMenu}
      onMouseLeave={test ? undefined : toggleMenu}
    >
      <button type="button" onClick={test ? toggleMenu : undefined}>
        {mainButton}
      </button>

      <div id="menu" className={styles.menu} ref={menuRef} hidden>
        <ul className={styles[layout]}>
          {options.map((option, index) => {
            const [name, method] = option;
            return (
              <li key={index}>
                <button type="button" onClick={method}>
                  {name}
                </button>
              </li>
            );
          })}
          {children}
        </ul>
      </div>
    </div>
  );
};

Menu.propTypes = {
  mainButton: PropTypes.element.isRequired,
  layout: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.array.isRequired).isRequired,
  children: PropTypes.element
};

export default Menu;
