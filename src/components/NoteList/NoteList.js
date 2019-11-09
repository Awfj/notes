import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styles from "./NoteList.module.scss";
import Note from "../Note/Note";
import {
  getNotesByVisibilityFilter,
  getNotesBySearchQuery
} from "../../redux/selectors";
import {
  addNote,
  archiveNote,
  changeNoteColor,
  deleteNote
} from "../../redux/actions/actionCreators";

const NoteList = ({
  notes,
  notesLayout,
  addNote,
  archiveNote,
  changeNoteColor,
  deleteNote
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
        notes.map((note, index) => {
          const { id, title, content, color, labels } = note;
          return (
            <Note
              key={index}
              currentNote={note}
              onAddNote={() => addNote(title, content, color, labels)}
              onArchiveNote={() => archiveNote(id)}
              onChangeNoteColor={newColor => changeNoteColor(id, newColor)}
              onDeleteNote={() => deleteNote(id)}
            ></Note>
          );
        })
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
  notesLayout: PropTypes.string.isRequired,
  addNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  changeNoteColor: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired
};

const mapStateToProps = (state, { searchQuery }) => ({
  notes: searchQuery
    ? getNotesBySearchQuery(state.notes, searchQuery)
    : getNotesByVisibilityFilter(state.notes, state.notesVisibility)
});

export default connect(
  mapStateToProps,
  { addNote, archiveNote, changeNoteColor, deleteNote }
)(NoteList);
