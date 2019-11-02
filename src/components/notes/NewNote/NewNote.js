import React, { createRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { addNote } from "../../../store/actions/actions";
import styles from "./NewNote.module.scss";
import Toolbox from "../../shared/Toolbox/Toolbox";

const NewNote = ({ dispatch }) => {
  const [activeColor, setActiveColor] = useState("white");
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [isFormActive, setIsFormActive] = useState(true);
  const noteFormRef = createRef();

  const handleSubmit = e => {
    e.preventDefault();

    // if (noteFormRef.current.contains(e.target)) return;
    if (!titleValue.trim() && !bodyValue.trim()) {
      setTitleValue("");
      setBodyValue("");
      setIsFormActive(false);
      return;
    }

    dispatch(addNote(titleValue, bodyValue, activeColor));
    setActiveColor("white");
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
      className={`note ${styles.NewNote} ${activeColor}`}
      onSubmit={handleSubmit}
      onClick={isFormActive ? undefined : () => setIsFormActive(true)}
      // onClick={() => setIsFormActive(true)}
    >
      <Toolbox
        activeColor={activeColor}
        parent="NewNote"
        onChangeNoteColor={setActiveColor}
      >
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
