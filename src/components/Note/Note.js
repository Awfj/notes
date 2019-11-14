import React, { createRef } from "react";
import PropTypes from "prop-types";

import styles from "./Note.module.scss";
import Toolbox from "../Toolbox/Toolbox";

const Note = ({
  note,
  onAddNote,
  onArchiveNote,
  onChangeNoteColor,
  onDeleteNote,
  onPinNote
}) => {
  const noteRef = createRef();
  const { title, content, color, labels, isPinned } = note;

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
        dropdownOptions={[
          ["Delete note", onDeleteNote],
          ["Add label"],
          ["Make a copy", onAddNote]
        ]}
        isPinned={isPinned}
        onArchiveNote={onArchiveNote}
        onChangeNoteColor={onChangeNoteColor}
        onPinNote={onPinNote}
        parent="Note"
      >
        {title && <h3>{title}</h3>}
        {content && <p>{content}</p>}
        {labels.length > 0 && (
          <ul className={styles.labels}>
            {labels.map((label, index) => (
              <li key={index}>{label}</li>
            ))}
          </ul>
        )}
      </Toolbox>
    </div>
  );
};

Note.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    labels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    isPinned: PropTypes.bool.isRequired
  }).isRequired,
  onAddNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
  onChangeNoteColor: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onPinNote: PropTypes.func.isRequired
};

export default Note;
