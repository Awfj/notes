import React, { useState } from "react";
import { connect } from "react-redux";

import styles from "./NewNote.module.scss";
import NoteForm from "../NoteForm/NoteForm";
// import NoteFormField from "../NoteFormField/NoteFormField";
// import NoteBorder from "../NoteBorder/NoteBorder";
import { addNote } from "../../redux/actions/actionCreators";
import { NOTE_STATUS } from "../../constants";

const NewNote = ({ addNote }) => {
  const [color, setColor] = useState("white");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isPinned, setIsPinned] = useState(false);
  const [formIsActive, setFormIsActive] = useState(false);

  const addNewNote = () => {
    if (!validateForm()) {
      resetForm();
      return;
    }
    // handleAddNote(NOTE_STATUS.ACTIVE)
    addNote(title, content, color, [], isPinned, NOTE_STATUS.ACTIVE);
    resetForm();
  };

  const handleAddNote = status => {
    if (!validateForm()) return;
    // handleAddNote(status);
    addNote(title, content, color, [], isPinned, status);
    if (status === NOTE_STATUS.ACTIVE) return;
    resetForm();
  };

  // const handleAddNote = status => {
  //   addNote(title, content, color, [], isPinned, status);
  // }

  const validateForm = () => {
    return !!(title.trim() || content.trim());
  };

  const resetForm = () => {
    setColor("white");
    setTitle("");
    setContent("");
    setIsPinned(false);
    setFormIsActive(false);
  };

  // console.log('new', formIsActive);
  return (
    <>
      {formIsActive ? (
        <NoteForm
          title={title}
          content={content}
          color={color}
          isPinned={isPinned}
          onSetTitle={setTitle}
          onSetContent={setContent}
          onSetColor={setColor}
          onSetIsPinned={() => setIsPinned(!isPinned)}
          onSubmit={addNewNote}
          addNote={() => handleAddNote(NOTE_STATUS.ACTIVE)}
          archiveNote={() => handleAddNote(NOTE_STATUS.ARCHIVED)}
          deleteNote={() => handleAddNote(NOTE_STATUS.DELETED)}
        />
      ) : (
        // <NoteBorder>
        <form
          className={`${styles.dummyForm}`}
          onClick={() => setFormIsActive(true)}
          onKeyDown={() => setFormIsActive(true)}
        >
          <input type="text" placeholder="Take a note..." />
        </form>
        /* </NoteBorder> */
      )}
    </>
  );
};

export default connect(null, { addNote })(NewNote);
