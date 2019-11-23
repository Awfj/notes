import React from "react";
import PropTypes from "prop-types";

import styles from "./NoteList.module.scss";
import Note from "../Note/Note";

const NoteList = ({ notes, notesLayout }) => {
  let styledNoteList = styles.NoteList;
  if (notesLayout === "list") {
    styledNoteList += ` ${styles.list}`;
  }

  return (
    <div className={styledNoteList}>
      {notes.map(note => {
        return <Note key={note.id} note={note} />;
      })}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired
  ]).isRequired,
  notesLayout: PropTypes.string.isRequired
};

export default NoteList;
