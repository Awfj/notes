import React from "react";

import styles from "./Notes.module.scss";
import Note from "../Note/Note";

const Notes = props => {
  let classNotes = styles.Notes;

  switch (props.view) {
    case "grid":
      classNotes += ` ${styles.grid}`;
      break;
    default:
      classNotes += ` ${styles.list}`;
  }
  return (
    <div className={classNotes}>
      {props.notes.map((note, index) => (
        <Note
          key={index}
          note={note}
          removeNote={props.removeNote.bind(this, index)}
        ></Note>
      ))}
    </div>
  );
};

export default Notes;
