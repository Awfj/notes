import React from "react";

import styles from "./Keep.module.scss";
import NewNote from "../NewNote/NewNote";
import Notes from "../Notes/Notes";

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
      />
      <Notes notes={props.notes} removeNote={props.removeNote} />
    </div>
  );
};

export default Keep;
