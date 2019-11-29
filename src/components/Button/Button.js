import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = ({
  children,
  color = "default",
  onClick,
  type = "button",
  variant = "icon"
}) => {
  return (
    <button
      className={`${styles.root} ${styles[variant]} ${styles[color]}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit']),
  variant: PropTypes.oneOf(["icon", "text"])
};

export default Button;
