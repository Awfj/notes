import React, { createRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { addNote } from "../../../store/actions/actions";
import styles from "./NewNote.module.scss";
import Toolbox from "../../shared/Toolbox/Toolbox";

const NewNote = ({ dispatch }) => {
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [isFormActive, setIsFormActive] = useState(false);
  const noteFormRef = createRef();

  function handleChangeNoteColor(color) {
    noteFormRef.current.style.backgroundColor = color;
  }

  const handleSubmit = e => {
    e.preventDefault();

    // if (noteFormRef.current.contains(e.target)) return;
    if (!titleValue.trim() && !bodyValue.trim()) {
      setTitleValue("");
      setBodyValue("");
      setIsFormActive(false);
      return;
    }

    dispatch(
      addNote(titleValue, bodyValue, noteFormRef.current.style.backgroundColor)
    );
    noteFormRef.current.style.backgroundColor = "white";
    setTitleValue("");
    setBodyValue("");
    setIsFormActive(false);
  };

  useEffect(() => {
    // if (isFormActive) {
    //   document.addEventListener("mousedown", handleSubmit);
    //   return () => {
    //     document.removeEventListener("mousedown", handleSubmit);
    //   };
    // }
  });

  return (
    <form
      ref={noteFormRef}
      name="noteForm"
      className={`note ${styles.NewNote}`}
      onSubmit={handleSubmit}
      onClick={isFormActive ? undefined : () => setIsFormActive(true)}
      // onClick={() => setIsFormActive(true)}
    >
      <Toolbox parent="NewNote" onChangeNoteColor={handleChangeNoteColor}>
        {isFormActive ? (
          <>
            <input
              type="text"
              name="title"
              placeholder="Title"
              autoComplete="off"
              value={titleValue}
              onChange={e => setTitleValue(e.target.value)}
            />
            <input
              type="text"
              name="body"
              placeholder="Take a note..."
              autoComplete="off"
              value={bodyValue}
              onChange={e => setBodyValue(e.target.value)}
            />
          </>
        ) : (
          <input
            type="text"
            name="body"
            placeholder="Take a note..."
            autoComplete="off"
            value={bodyValue}
            onChange={e => setBodyValue(e.target.value)}
          />
        )}
      </Toolbox>
    </form>
  );
};

export default connect()(NewNote);
