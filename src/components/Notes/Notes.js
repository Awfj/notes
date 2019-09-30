import React from "react";

import styles from "./Notes.module.scss";
import Note from "../Note/Note";

const Notes = props => {
  return (
    <div className={styles.Notes}>
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
