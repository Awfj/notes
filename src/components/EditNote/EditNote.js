import React, { useState } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

// import Modal from "../Modal/Modal";
import NoteForm from "../NoteForm/NoteForm";

import {
  addNote,
  archiveNote,
  deleteNote
} from "../../redux/actions/actionCreators";

const EditNote = ({ note, onEditNote, addNote, archiveNote, deleteNote }) => {
  const { id, title, content, color, labels, isPinned, status } = note;
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [newColor, setNewColor] = useState(color);

  const handleEditNote = () => {
    if (title !== newTitle || content !== newContent || color !== newColor) {
      onEditNote();
    }
  };

  return (
    // <Modal>
    <NoteForm
      title={title}
      content={content}
      color={color}
      onSetTitle={setNewTitle}
      onSetContent={setNewContent}
      onSetColor={setNewColor}
      handleSubmit={handleEditNote}
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
  deleteNote: PropTypes.func.isRequired
};

export default connect(null, { addNote, archiveNote, deleteNote })(EditNote);
