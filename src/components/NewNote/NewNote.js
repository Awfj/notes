import React from "react";
import styles from "./NewNote.module.scss";
import Toolbox from "../Toolbox/Toolbox";

const NewNote = props => {
  return (
    <form
      name="noteForm"
      className={`note ${styles.NewNote}`}
      onClick={props.expandForm}
      onSubmit={props.handleSubmit}
    >
      {props.expanded ? (
        // <div>
        <Toolbox>
          <input type="text" name="title" placeholder="Title" />
          <input
            type="text"
            placeholder="Take a note..."
            autoComplete="off"
            name="body"
            value={props.value}
            onChange={props.handleChange}
          />
        {/* </div> */}
          </Toolbox>
      ) : (
        <input
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
  );
};

export default NewNote;
