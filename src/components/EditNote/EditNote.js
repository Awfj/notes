import React, { useState } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

// import Modal from "../Modal/Modal";
import NoteForm from "../NoteForm/NoteForm";

import {
  addNote,
  archiveNote,
  editNote,
  deleteNote
} from "../../redux/actions/actionCreators";

const EditNote = ({ note, addNote, archiveNote, editNote, deleteNote }) => {
  const { id, title, content, color, labels, isPinned, status } = note;
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [newColor, setNewColor] = useState(color);
  const [newIsPinned, setNewIsPinned] = useState(isPinned);
  const [formIsActive, setFormIsActive] = useState(false);

  const handleEditNote = () => {
    if (title !== newTitle || content !== newContent || color !== newColor) {
      editNote(id, newTitle, newContent, newColor, labels, isPinned, status);
    }
    setFormIsActive(false);
  };

  // console.log('edit', formIsActive)
  return (
    // <Modal>
    <NoteForm
      formIsActive={formIsActive}
      title={newTitle}
      content={newContent}
      color={newColor}
      isPinned={newIsPinned}
      onSetTitle={setNewTitle}
      onSetContent={setNewContent}
      onSetColor={setNewColor}
      onSetIsPinned={() => setNewIsPinned(!newIsPinned)}
      onSetFormIsActive={setFormIsActive}
      onSubmit={handleEditNote}
      addNote={() => addNote(title, content, color, labels, isPinned, status)}
      archiveNote={() => archiveNote(id)}
      deleteNote={() => deleteNote(id)}
    />
    // </Modal>
  );
};

EditNote.propTypes = {
  addNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  editNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired
};

export default connect(null, { addNote, archiveNote, editNote, deleteNote })(
  EditNote
);
