import React from "react";
import PropTypes from "prop-types";

import styles from "./NoteList.module.scss";
import Note from "./Note/Note";

const NoteList = ({ notes, deleteNote, notesLayout }) => {
  let classNotes = styles.NoteList;
  switch (notesLayout) {
    case "list":
      classNotes += ` ${styles.list}`;
      break;
    default:
      classNotes += ` ${styles.grid}`;
  }
  return (
    <div className={classNotes}>
      {notes.length > 0 ? (
        notes.map((note, index) => (
          <Note
            key={index}
            {...note}
            deleteNote={() => deleteNote(note.id)}
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
  // deleteNote: PropTypes.func.isRequired
  notesLayout: PropTypes.string.isRequired
};

export default NoteList;
