import React, { createRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./NewNote.module.scss";
import Toolbox from "../Toolbox/Toolbox";
import {
  addNote,
  archiveNote,
  deleteNote,
} from "../../redux/actions/actionCreators";

const NewNote = ({ addNote, archiveNote, deleteNote }) => {
  // console.warn('NewNote')
  const [activeColor, setActiveColor] = useState("white");
  const [titleValue, setTitleValue] = useState("");
  const [bodyValue, setBodyValue] = useState("");
  const [isPinned, setIsPinned] = useState(false);
  const [isFormActive, setIsFormActive] = useState(true);
  const noteFormRef = createRef();

  const handleSubmit = e => {
    e.preventDefault();

    // if (noteFormRef.current.contains(e.target)) return;
    if (!titleValue.trim() && !bodyValue.trim()) {
      setTitleValue("");
      setBodyValue("");
      setIsPinned(false);
      setIsFormActive(false);
      return;
    }

    addNote(titleValue, bodyValue, activeColor, [], isPinned);
    setActiveColor("white");
    setTitleValue("");
    setBodyValue("");
    setIsPinned(false);
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

  const test = Boolean(titleValue.trim() || bodyValue.trim());

  let dropdownOptions = [["Add label"]];
  if (test) {
    dropdownOptions = [
      ["Delete note", deleteNote],
      ...dropdownOptions,
      ["Make a copy", addNote]
    ];
  }

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
        dropdownOptions={dropdownOptions}
        isPinned={isPinned}
        onArchiveNote={archiveNote}
        onChangeNoteColor={setActiveColor}
        onPinNote={() => setIsPinned(!isPinned)}
        parent="NewNote"
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

export default connect(null, { addNote, archiveNote, deleteNote })(NewNote);
