import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
// import styles from "./NewNote.module.scss";
import NoteForm from "../NoteForm/NoteForm";
import { addNote } from "../../redux/actions/actionCreators";
import { NOTE_STATUS } from "../../constants";

const NewNote = ({ addNote }) => {
  const [color, setColor] = useState("white");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [isPinned, setIsPinned] = useState(false);
  const [isFormActive, setIsFormActive] = useState(true);

  useEffect(() => {
    if (isFormActive) {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  });

  const handleSubmit = e => {
    e.preventDefault();
    addNewNote();
  };

  const handleClick = e => {
    if (document.forms["noteForm"].contains(e.target)) return;
    addNewNote();
  };

  const addNewNote = () => {
    if (!validateForm()) {
      resetForm();
      return;
    }

    addNote(title, content, color, [], isPinned, NOTE_STATUS.ACTIVE);
    resetForm();
  };

  const handleAddNote = status => {
    if (!validateForm()) return;
    addNote(title, content, color, [], isPinned, status);
    if (status === NOTE_STATUS.ACTIVE) return;
    resetForm();
  };

  const validateForm = () => {
    return !!(title.trim() || content.trim());
  };

  const resetForm = () => {
    setColor("white");
    setTitle("");
    setContent("");
    setIsPinned(false);
    // setIsFormActive(false);
  };

  return (
    <>
      <NoteForm
        title={title}
        content={content}
        color={color}
        onSetTitle={setTitle}
        onSetContent={setContent}
        onSetColor={setColor}
        onSubmit={handleSubmit}
        addNote={() => handleAddNote(NOTE_STATUS.ACTIVE)}
        archiveNote={() => handleAddNote(NOTE_STATUS.ARCHIVED)}
        deleteNote={() => handleAddNote(NOTE_STATUS.DELETED)}
      />
      {/* {isFormActive ? (
      ) : (
        <form>
          <textarea
            name="content"
            placeholder="Take a note..."
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </form>
      )} */}
    </>
  );
};

export default connect(null, { addNote })(NewNote);

/* <Toolbox
  activeColor={activeColor}
  isPinned={isPinned}
  onChangeNoteColor={setActiveColor}
  onPinNote={() => setIsPinned(!isPinned)}
></Toolbox>; */

/* <form
  className={`note ${styles.NewNote} ${activeColor}`}
  onClick={isFormActive ? undefined : () => setIsFormActive(true)}
  // onClick={() => setIsFormActive(true)}
></form> */
