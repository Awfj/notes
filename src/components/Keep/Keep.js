import React from "react";

import styles from "./Keep.module.scss";
import Notes from "../Notes/Notes";
import Toolbox from "../Toolbox/Toolbox";

const Keep = props => {
  let NoteFormStyles = styles.NoteForm;
  // if (props.expanded) {
  //   NoteFormStyles += " newNote";
  // }
  return (
    <div className={styles.Keep}>
      <form
        name="noteForm"
        className={NoteFormStyles}
        onSubmit={props.handleSubmit}
      >
        {props.expanded ? (
          <Toolbox>
            <input type="text" name="title" placeholder="Title" />
            <input
              className={props.expanded ? null : "newNote"}
              type="text"
              placeholder="Take a note..."
              autoComplete="off"
              name="body"
              value={props.value}
              onChange={props.handleChange}
              onClick={props.expandForm}
            />
          </Toolbox>
        ) : (
          <input
            className={styles.newNote}
            type="text"
            placeholder="Take a note..."
            autoComplete="off"
            name="body"
            value={props.value}
            onChange={props.handleChange}
            onClick={props.expandForm}
          />
        )}
      </form>
      <Notes notes={props.notes} removeNote={props.removeNote} />
    </div>
  );
};

export default Keep;
