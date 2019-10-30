import React from "react";
import PropTypes from "prop-types";

import styles from "./NoteList.module.scss";
import Note from "./Note/Note";

const NoteList = ({
  notes,
  onArchiveNote,
  onDeleteNote,
  onChangeNoteColor,
  notesLayout
}) => {
  let classNoteList = styles.NoteList;
  if (notesLayout === "list") {
    classNoteList += ` ${styles.list}`;
  }
  return (
    <div className={classNoteList}>
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <Note
            key={index}
            {...note}
            onArchiveNote={() => onArchiveNote(note.id)}
            onDeleteNote={() => onDeleteNote(note.id)}
            onChangeNoteColor={() => onChangeNoteColor(note.id)}
          ></Note>
        ))
      ) : (
        <p>There are no notes</p>
      )}
    </div>
  );
};

NoteList.propTypes = {
  // notes: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     title: PropTypes.string.isRequired,
  //     body: PropTypes.string.isRequired,
  //     color: PropTypes.string.isRequired
  //   }).isRequired
  // ).isRequired,
  onArchiveNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  onChangeNoteColor: PropTypes.func.isRequired,
  notesLayout: PropTypes.string.isRequired
};

export default NoteList;
