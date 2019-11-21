import React, { createRef } from "react";
import PropTypes from "prop-types";
import Toolbox from "../Toolbox/Toolbox";
import styles from "./NoteForm.module.scss";

const NoteForm = ({
  title,
  content,
  color,
  onSetTitle,
  onSetContent,
  onSetColor,
  onSubmit,
  addNote,
  archiveNote,
  deleteNote
}) => {
  const noteFormRef = createRef();

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
      onSubmit={onSubmit}
      className={`note ${styles.NoteForm} ${color}`}
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
