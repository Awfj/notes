import React from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.scss";
// import Option from "./Option/Option";

const Menu = ({ layout, options, children, custom }) => {
  console.log(custom)
  return (
    <div className={styles.Menu} hidden>
      <ul className={styles[layout]}>
        {options.map((option, index) => (
          <li key={index}>
            <button type="button">{option}</button>
          </li>
        ))}
        {children}
      </ul>
    </div>
  );
};

Menu.propTypes = {
  layout: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  // onClick: PropTypes.func
  children: PropTypes.node,

};

export default Menu;
