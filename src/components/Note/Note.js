import React from "react";

import styles from "./Note.module.scss";
// import Toolbox from "../Toolbox/Toolbox";

const Note = props => {
  const { title, body } = props.note;

  // function handleMouseEnter(e) {
  //   const overlay = e.currentTarget.lastElementChild;
  //   overlay.style.opacity = "1";
  //   // console.log(e.target);
  // }

  // function handleMouseLeave(e) {
  //   const overlay = e.currentTarget.lastElementChild;
  //   overlay.style.opacity = "0";
  // }

  return (
    <article
      className={`note ${styles.Note}`}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      {/* <Toolbox> */}
      {title ? <h2>{title}</h2> : null}
      {body ? <p>{body}</p> : null}
      {/* </Toolbox> */}
    </article>
  );
};

export default Note;
