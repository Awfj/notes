import React from "react";
import PropTypes from "prop-types";

import styles from "./NoteList.module.scss";
import Note from "./Note/Note";

const NoteList = ({
  notes,
  addNote,
  archiveNote,
  changeNoteColor,
  deleteNote,
  notesLayout
}) => {
  let classNoteList = styles.NoteList;
  if (notesLayout === "list") {
    classNoteList += ` ${styles.list}`;
  }
  return (
    <div className={classNoteList}>
      {/* <div className={styles.pinned}>
        <h2>Pinned</h2>
      </div>
      <div>
        <h2>Others</h2>
      </div> */}

      {notes.length > 0 ? (
        notes.map((note, index) => (
          <Note
            key={index}
            {...note}
            onAddNote={() =>
              addNote(note.title, note.content, note.color, note.labels)
            }
            onArchiveNote={() => archiveNote(note.id)}
            onChangeNoteColor={color => changeNoteColor(note.id, color)}
            onDeleteNote={() => deleteNote(note.id)}
          ></Note>
        ))
      ) : (
        <p>There are no notes</p>
      )}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
      labels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      pinned: PropTypes.bool.isRequired
    }).isRequired
  ).isRequired,
  addNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  changeNoteColor: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  notesLayout: PropTypes.string.isRequired
};

export default NoteList;
