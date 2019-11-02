import React, { createRef } from "react";
import PropTypes from "prop-types";

import styles from "./Note.module.scss";
import Toolbox from "../../../shared/Toolbox/Toolbox";

const Note = ({
  title,
  body,
  color,
  onArchiveNote,
  onDeleteNote,
  onChangeNoteColor
}) => {
  const noteRef = createRef();
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
      ref={noteRef}
      className={`note ${styles.Note} ${color}`}
      onMouseEnter={handleMouseHover}
      onMouseLeave={handleMouseHover}
    >
      <Toolbox
        activeColor={color}
        parent="Note"
        onArchiveNote={onArchiveNote}
        onChangeNoteColor={onChangeNoteColor}
        onDeleteNote={onDeleteNote}
      >
        {title ? <h2>{title}</h2> : null}
        {body ? <p>{body}</p> : null}
      </Toolbox>
    </div>
  );
};

Note.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onChangeNoteColor: PropTypes.func.isRequired
};

export default Note;
