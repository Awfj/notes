import React from "react";
// import PropTypes from "prop-types";

import styles from "./NoteList.module.scss";
import Note from "./Note/Note";

const NoteList = ({ notes, deleteNote, view }) => {
  let classNotes = styles.NoteList;

  switch (view) {
    case "grid":
      classNotes += ` ${styles.grid}`;
      break;
    default:
      classNotes += ` ${styles.list}`;
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
};

export default NoteList;
