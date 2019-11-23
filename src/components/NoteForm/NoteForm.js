import React, { createRef, useEffect } from "react";
import PropTypes from "prop-types";
import styles from "./NoteForm.module.scss";
import Toolbox from "../Toolbox/Toolbox";
import NoteFormField from "../NoteFormField/NoteFormField";
// import NoteBorder from "../NoteBorder/NoteBorder";

const NoteForm = ({
  title,
  content,
  color,
  isPinned,
  onSetTitle,
  onSetContent,
  onSetColor,
  onSetIsPinned,
  onSubmit,
  addNote,
  archiveNote,
  deleteNote
}) => {
  const noteFormRef = createRef();
  const textRef = createRef();

  useEffect(() => {
    textRef.current.focus();
    // console.log(Boolean(noteFormRef))
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  });

  const handleClick = e => {
    // console.log(!!noteFormRef)
    if (noteFormRef.current && noteFormRef.current.contains(e.target)) return;
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
      className={`${styles.NoteForm} ${styles[color]}`}
    >
      <Toolbox
        activeColor={color}
        dropdownOptions={dropdownOptions}
        role="edit"
        isPinned={isPinned}
        onArchiveNote={archiveNote}
        onChangeNoteColor={onSetColor}
        onPinNote={onSetIsPinned}
      >
        <NoteFormField
          name="title"
          placeholder="Title"
          value={title}
          onSetField={e => onSetTitle(e.target.value)}
        />
        <NoteFormField
          name="content"
          placeholder="Take a note..."
          value={content}
          onSetField={e => onSetContent(e.target.value)}
          isFocused
          textRef={textRef}
        />
      </Toolbox>
    </form>
  );
};

NoteForm.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onSetTitle: PropTypes.func.isRequired,
  onSetContent: PropTypes.func.isRequired,
  onSetColor: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  addNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired
};

export default NoteForm;
