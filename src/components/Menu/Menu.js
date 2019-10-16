import React from "react";
import PropTypes from "prop-types";
import styles from "./Menu.module.scss";
// import Option from "./Option/Option";

const Menu = ({ view, options, onClick }) => {
  return (
    <div className={styles.Menu}>
      <ul className={styles[view]}>
        {options.map((option, index) => (
          <li key={index}>
            <button type="button" onClick={onClick}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Menu.propTypes = {
  view: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onClick: PropTypes.func
};

export default Menu;
