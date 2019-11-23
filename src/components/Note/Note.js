import React, { useState, createRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styles from "./Note.module.scss";
import Toolbox from "../Toolbox/Toolbox";
import EditNote from "../EditNote/EditNote";

import {
  addNote,
  archiveNote,
  changeNoteColor,
  deleteNote,
  pinNote
} from "../../redux/actions/actionCreators";

const Note = ({
  addNote,
  archiveNote,
  changeNoteColor,
  deleteNote,
  note,
  pinNote
}) => {
  const [noteIsEditable, setNoteIsEditable] = useState(false);
  const noteRef = createRef();
  const { id, title, content, color, labels, isPinned, status } = note;

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
    <>
      {noteIsEditable && (
        <EditNote
          note={note}
          onSetNoteIsEditable={setNoteIsEditable}
        />
      )}
      <div
        ref={noteRef}
        className={`${styles.Note} ${styles[color]}`}
        onMouseEnter={handleMouseHover}
        onMouseLeave={handleMouseHover}
        onClick={() => setNoteIsEditable(true)}
      >
        <Toolbox
          activeColor={color}
          dropdownOptions={[
            ["Delete note", () => deleteNote(id)],
            ["Add label"],
            [
              "Make a copy",
              () => addNote(title, content, color, labels, isPinned, status)
            ]
          ]}
          isPinned={isPinned}
          onArchiveNote={() => archiveNote(id)}
          onChangeNoteColor={newColor => changeNoteColor(id, newColor)}
          onPinNote={() => pinNote(id)}
          role="view"
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
    </>
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
  addNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  changeNoteColor: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  pinNote: PropTypes.func.isRequired
};

export default connect(null, {
  addNote,
  archiveNote,
  changeNoteColor,
  deleteNote,
  pinNote
})(Note);
