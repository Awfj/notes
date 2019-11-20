import { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, onCloseModal }) => {
  const modal = document.createElement("div");
  modal.setAttribute("class", styles.Modal);

  const handleClose = e => {
    if (modal.isEqualNode(e.target)) {
      onCloseModal();
    }
  };

  modal.addEventListener("click", handleClose);

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
  onCloseModal: PropTypes.func.isRequired
};

export default Modal;
