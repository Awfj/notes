import React from "react";
import PropTypes from "prop-types";

import styles from "./Note.module.scss";
import Toolbox from "../../../shared/Toolbox/Toolbox";

const Note = ({ title, body, color, deleteNote }) => {
  function handleMouseHover(e) {
    // const toolbox = e.currentTarget.children[0].children;
    // for (var tag of toolbox) {
    //   if (tag.type === "button" || tag.tagName === "FOOTER") {
    //     if (e.type === "mouseenter") {
    //       tag.style.opacity = "1";
    //     } else if (e.type === "mouseleave") {
    //       tag.style.opacity = "0";
    //     }
    //   }
    // }
  }

  return (
    <div
      className={`note ${styles.Note}`}
      style={{backgroundColor: color}}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      <Toolbox parent="Note" deleteNote={deleteNote}>
        {title ? <h2>{title}</h2> : null}
        {body ? <p>{body}</p> : null}
      </Toolbox>
    </div>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  deleteNote: PropTypes.func.isRequired
};

export default Note;
