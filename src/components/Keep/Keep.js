import React from "react";

import styles from "./Keep.module.scss";
import NewNote from "../NewNote/NewNote";
import NoteList from "../NoteList/NoteList";

const Keep = props => {
  return (
    <div className={styles.Keep}>
      <NewNote
        value={props.value}
        notes={props.notes}
        expanded={props.expanded}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        expandForm={props.expandForm}
        removeNote={props.removeNote}
        makeNote={props.makeNote}
      />
      <NoteList
        notes={props.notes}
        removeNote={props.removeNote}
        view={props.view}
      />
    </div>
  );
};

export default Keep;
