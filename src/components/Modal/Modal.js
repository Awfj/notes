import { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, onCloseModal }) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", styles.Modal);

  if (onCloseModal) {
    const handleClose = e => {
      if (modal.isEqualNode(e.target)) {
        onCloseModal();
      }
    };

    const handleKeyDown = e => {
      e.keyCode === 27 && onCloseModal();
    };

    modal.addEventListener("click", handleClose);
    modal.addEventListener("keydown", handleKeyDown);
  }

  useEffect(() => {
    modalRoot.appendChild(modal);
    return () => {
      modalRoot.removeChild(modal);
    };
  });
  return ReactDOM.createPortal(children, modal);
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  onCloseModal: PropTypes.func
};

export default Modal;
