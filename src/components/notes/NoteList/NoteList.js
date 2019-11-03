import React from "react";
import PropTypes from "prop-types";

import styles from "./NoteList.module.scss";
import Note from "./Note/Note";

const NoteList = ({
  notes,
  onAddNote,
  onArchiveNote,
  onChangeNoteColor,
  onDeleteNote,
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
              onAddNote(note.title, note.content, note.color, note.labels)
            }
            onArchiveNote={() => onArchiveNote(note.id)}
            onChangeNoteColor={color => onChangeNoteColor(note.id, color)}
            onDeleteNote={() => onDeleteNote(note.id)}
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
  onAddNote: PropTypes.func.isRequired,
  onArchiveNote: PropTypes.func.isRequired,
  onChangeNoteColor: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
  notesLayout: PropTypes.string.isRequired
};

export default NoteList;
