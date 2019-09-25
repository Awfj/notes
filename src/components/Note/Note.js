import React from "react";

import styles from "./Note.module.scss";
// import Overlay from "../Overlay/Overlay";

const Note = props => {
  const { title, body } = props.note;
  // console.log(color);

  function handleMouseEnter(e) {
    const overlay = e.currentTarget.lastElementChild;
    overlay.style.opacity = "1";
    // console.log(e.target);
  }

  function handleMouseLeave(e) {
    const overlay = e.currentTarget.lastElementChild;
    overlay.style.opacity = "0";
  }

  return (
    // <Overlay>
    <article
      className={styles.Note}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {title ? <h2>{title}</h2> : null}
      {body ? <p>{body}</p> : null}
      <div className={styles.Overlay}>
        <button type="button">Change Color</button>
        <button type="button" onClick={props.removeNote}>
          Delete note
        </button>
      </div>
    </article>
    // </Overlay>
  );
};

export default Note;
