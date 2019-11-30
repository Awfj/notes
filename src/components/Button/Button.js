import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.scss";

const Button = forwardRef(
  (
    {
      children,
      color = "default",
      label,
      onClick,
      type = "button",
      variant = "icon"
    },
    ref
  ) => {
    return (
      <button
        className={`${styles.root} ${styles[variant]} ${styles[color]}`}
        aria-label={label}
        onClick={onClick}
        ref={ref}
        type={type}
      >
        {children}
      </button>
    );
  }
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["default", "primary", "secondary"]),
  onClick: PropTypes.func,
  label: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  variant: PropTypes.oneOf(["icon", "text"])
};

export default Button;
