import React, { createRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./NoteForm.module.scss";
import Toolbox from "../Toolbox/Toolbox";
// import NoteBorder from "../NoteBorder/NoteBorder";

const NoteForm = ({
  formIsActive,
  title,
  content,
  color,
  onSetTitle,
  onSetContent,
  onSetColor,
  onSetFormIsActive,
  onSubmit,
  addNote,
  archiveNote,
  deleteNote
}) => {
  const noteFormRef = createRef();

  useEffect(() => {
    if (formIsActive) {
      document.addEventListener("click", handleClick);
      return () => {
        document.removeEventListener("click", handleClick);
      };
    }
  });

  const handleClick = e => {
    if (noteFormRef.current.contains(e.target)) return;
    onSubmit();
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit();
  };

  const test = Boolean(title.trim() || content.trim());
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
      name="noteForm"
      ref={noteFormRef}
      onSubmit={handleSubmit}
      className={`note ${styles.NoteForm} ${color}`}
      onClick={() => onSetFormIsActive(true)}
    >
      <Toolbox
        activeColor={color}
        dropdownOptions={dropdownOptions}
        role="edit"
        onArchiveNote={archiveNote}
        onChangeNoteColor={onSetColor}
      >
        <textarea
          name="title"
          placeholder="Title"
          value={title}
          onChange={e => onSetTitle(e.target.value)}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={content}
          onChange={e => onSetContent(e.target.value)}
        />
      </Toolbox>
    </form>
  );
};

NoteForm.propTypes = {
  formIsActive: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onSetTitle: PropTypes.func.isRequired,
  onSetContent: PropTypes.func.isRequired,
  onSetColor: PropTypes.func.isRequired,
  onSetFormIsActive: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired
};

export default NoteForm;
