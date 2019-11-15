import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import styles from "./NoteList.module.scss";
import Note from "../Note/Note";
import { getNotesByVisibilityFilter } from "../../redux/selectors/notes";

const NoteList = ({ notes, notesLayout }) => {
  let styledNoteList = styles.NoteList;
  if (notesLayout === "list") {
    styledNoteList += ` ${styles.list}`;
  }

  return (
    <div className={styledNoteList}>
      {notes.map((note, index) => {
        return <Note key={index} note={note} />;
      })}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.oneOfType([
    PropTypes.object.isRequired,
    PropTypes.array.isRequired
  ]).isRequired,
  notesLayout: PropTypes.string.isRequired,
  searchQuery: PropTypes.string.isRequired
};

const mapStateToProps = (state, props) => ({
  notes: getNotesByVisibilityFilter(state, props)
});

export default connect(mapStateToProps)(NoteList);
