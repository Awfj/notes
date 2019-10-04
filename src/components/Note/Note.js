import React from "react";

import styles from "./Note.module.scss";
import Toolbox from "../Toolbox/Toolbox";

const Note = props => {
  const { title, body } = props.note;

  function handleMouseHover(e) {
    const toolbox = e.currentTarget.children[0].children;
    for (var tag of toolbox) {
      if (tag.type === "button" || tag.tagName === "FOOTER") {
        if (e.type === "mouseenter") {
          tag.style.opacity = "1";
        } else if(e.type === "mouseleave") {
          tag.style.opacity = "0";
        }
      }
    }
  }

  return (
    <article
      className={`note ${styles.Note}`}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      <Toolbox>
        {title ? <h2>{title}</h2> : null}
        {body ? <p>{body}</p> : null}
      </Toolbox>
    </article>
  );
};

export default Note;
