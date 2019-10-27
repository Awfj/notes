import React, { createRef } from "react";
import { connect } from "react-redux";
import { addNote } from "../../../store/actions/actions";
import styles from "./NewNote.module.scss";
import Toolbox from "../../shared/Toolbox/Toolbox";

const NewNote = ({ dispatch }) => {
  const noteForm = createRef();
  const title = createRef();
  const body = createRef();

  // function changeColor(color) {
  //   noteForm.style.backgroundColor = color;
  // }

  const onSubmitHandler = e => {
    e.preventDefault();
    if (!title.current.value.trim() && !body.current.value.trim()) return;
    dispatch(addNote(title.current.value, body.current.value, 'white'));
    title.current.value = "";
    body.current.value = "";
  };

  return (
    <form
      ref={noteForm}
      name="noteForm"
      className={`note ${styles.NewNote}`}
      // onClick={expandForm}
      onSubmit={onSubmitHandler}
    >
      {/* <button type="button" onClick={() => changeColor("red")}>
        test
      </button> */}
      <Toolbox parent="NewNote">
        <input ref={title} type="text" name="title" placeholder="Title" />
        <input
          ref={body}
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
