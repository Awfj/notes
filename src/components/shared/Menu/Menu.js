import React from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.scss";
// import Option from "./Option/Option";

const Menu = ({ buttonValue, layout, options, children }) => {
  return (
    <div className={styles.container}>
      <button type="button">{buttonValue}</button>

      <div className={styles.menu} hidden>
        <ul className={styles[layout]}>
          {options.map((option, index) => (
            <li key={index}>
              <button type="button">{option}</button>
            </li>
          ))}
          {children}
        </ul>
      </div>
    </div>
  );
};

Menu.propTypes = {
  buttonValue: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  layout: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  // onClick: PropTypes.func
  children: PropTypes.element
};

export default Menu;
