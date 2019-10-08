import React from "react";
import PropTypes from "prop-types";

import styles from "./NoteList.module.scss";
import Note from "../Note/Note";

const Notes = props => {
  let classNotes = styles.NoteList;

  switch (props.view) {
    case "grid":
      classNotes += ` ${styles.grid}`;
      break;
    default:
      classNotes += ` ${styles.list}`;
  }
  return (
    <div className={classNotes}>
      {props.notes.length > 0 ? (
        props.notes.map((note, index) => (
          <Note
            key={index}
            {...note}
            removeNote={props.removeNote.bind(this, index)}
          ></Note>
        ))
      ) : (
        <p>There are no notes</p>
      )}
    </div>
  );
};

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default Notes;
