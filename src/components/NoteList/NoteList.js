import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styles from "./NoteList.module.scss";
import Note from "../Note/Note";
import { getNotesByVisibilityFilter } from "../../redux/selectors/notes";
import {
  addNote,
  archiveNote,
  changeNoteColor,
  deleteNote,
  pinNote
} from "../../redux/actions/actionCreators";

const NoteList = ({
  notes,
  notesLayout,
  addNote,
  archiveNote,
  changeNoteColor,
  deleteNote,
  pinNote,
  filter
}) => {
  let styledNoteList = styles.NoteList;
  if (notesLayout === "list") {
    styledNoteList += ` ${styles.list}`;
  }
  console.log(notes)
  return (
    <div className={styledNoteList}>
      {filter === "active" ? (
        <>
          <div className={styles.pinned}>
            <h2>Pinned</h2>
            {notes.pinned.map((note, index) => {
              const { id, title, content, color, labels } = note;
              return (
                <Note
                  key={index}
                  note={note}
                  onAddNote={() => addNote(title, content, color, labels)}
                  onArchiveNote={() => archiveNote(id)}
                  onChangeNoteColor={newColor => changeNoteColor(id, newColor)}
                  onDeleteNote={() => deleteNote(id)}
                  onPinNote={() => pinNote(id)}
                />
              );
            })}
          </div>
          <div className={styles.others}>
            <h2>Others</h2>
            {notes.others.map((note, index) => {
              const { id, title, content, color, labels } = note;
              return (
                <Note
                  key={index}
                  note={note}
                  onAddNote={() => addNote(title, content, color, labels)}
                  onArchiveNote={() => archiveNote(id)}
                  onChangeNoteColor={newColor => changeNoteColor(id, newColor)}
                  onDeleteNote={() => deleteNote(id)}
                  onPinNote={() => pinNote(id)}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          {notes.map((note, index) => {
            const { id, title, content, color, labels } = note;
            return (
              <Note
                key={index}
                note={note}
                onAddNote={() => addNote(title, content, color, labels)}
                onArchiveNote={() => archiveNote(id)}
                onChangeNoteColor={newColor => changeNoteColor(id, newColor)}
                onDeleteNote={() => deleteNote(id)}
                onPinNote={() => pinNote(id)}
              />
            );
          })}
        </>
      )}

      {/* {notes.length > 0 ? (
        notes.map((note, index) => {
          const { id, title, content, color, labels } = note;
          return (
            <Note
              key={index}
              note={note}
              onAddNote={() => addNote(title, content, color, labels)}
              onArchiveNote={() => archiveNote(id)}
              onChangeNoteColor={newColor => changeNoteColor(id, newColor)}
              onDeleteNote={() => deleteNote(id)}
              onPinNote={() => pinNote(id)}
            />
          );
        })
      ) : (
        <p>There are no notes</p>
      )} */}
    </div>
  );
};

NoteList.propTypes = {
  // notes: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     title: PropTypes.string.isRequired,
  //     content: PropTypes.string.isRequired,
  //     color: PropTypes.string.isRequired,
  //     labels: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  //     isPinned: PropTypes.bool.isRequired
  //   }).isRequired
  // ).isRequired,
  notesLayout: PropTypes.string.isRequired,
  addNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  changeNoteColor: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired
};

const mapStateToProps = (state, props) => ({
  notes: getNotesByVisibilityFilter(state, props),
  filter: state.visibilityFilter
});

export default connect(mapStateToProps, {
  addNote,
  archiveNote,
  changeNoteColor,
  deleteNote,
  pinNote
})(NoteList);
