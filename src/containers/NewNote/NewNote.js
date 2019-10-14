import React from "react";
import { connect } from "react-redux";
import { addNote } from "../../store/actions/actions";
import styles from "./NewNote.module.scss";
import Toolbox from "../../components/Toolbox/Toolbox";

const NewNote = ({ dispatch }) => {
  let title, body;
  return (
    <form
      name="noteForm"
      className={`note ${styles.NewNote}`}
      // onClick={expandForm}
      onSubmit={e => {
        e.preventDefault();
        if (!title.value.trim() && !body.value.trim()) return;
        dispatch(addNote(title.value, body.value));
        title.value = "";
        body.value = "";
      }}
    >
      <Toolbox parent="NewNote">
        <input
          ref={node => (title = node)}
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          ref={node => (body = node)}
          type="text"
          placeholder="Take a note..."
          autoComplete="off"
          name="body"
          // value={value}
          // onChange={handleChange}
        />
      </Toolbox>
      {/* {props.expanded ? (
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
      )} */}
    </form>
  );
};

export default connect()(NewNote);
