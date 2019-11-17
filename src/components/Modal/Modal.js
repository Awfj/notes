// import React, { useEffect, createRef } from "react";
import { useEffect } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

const modalRoot = document.querySelector("#modal-root");

const Modal = ({ children, onCloseModal }) => {
  // const modalRef = createRef();

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

  // return ReactDOM.createPortal(
  //   <div ref={modalRef} className={styles.Modal} onClick={handleClose}>
  //     {children}
  //   </div>,
  //   modalRoot
  // );
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  onCloseModal: PropTypes.func.isRequired
};

export default Modal;
