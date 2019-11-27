import React, { useState } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";

import Dialog from "@material-ui/core/Dialog";
import NoteForm from "../NoteForm/NoteForm";

import {
  addNote,
  archiveNote,
  editNote,
  deleteNote
} from "../../redux/actions/actionCreators";

const EditNote = ({
  note,
  addNote,
  archiveNote,
  editNote,
  deleteNote,
  onSetNoteIsEditable,
  open,
  onClose
}) => {
  const { id, title, content, color, labels, isPinned, status } = note;
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);
  const [newColor, setNewColor] = useState(color);
  const [newIsPinned, setNewIsPinned] = useState(isPinned);
  // const [formIsActive, setFormIsActive] = useState(false);

  const handleEditNote = () => {
    if (title !== newTitle || content !== newContent || color !== newColor) {
      editNote(id, newTitle, newContent, newColor, labels, isPinned, status);
    }
    onSetNoteIsEditable(false);
    // setFormIsActive(false);
  };

  // console.log('edit', formIsActive)
  return (
    <Dialog open={open} onClose={onClose}>
      <NoteForm
        title={newTitle}
        content={newContent}
        color={newColor}
        isPinned={newIsPinned}
        onSetTitle={setNewTitle}
        onSetContent={setNewContent}
        onSetColor={setNewColor}
        onSetIsPinned={() => setNewIsPinned(!newIsPinned)}
        onSubmit={handleEditNote}
        addNote={() => addNote(title, content, color, labels, isPinned, status)}
        archiveNote={() => archiveNote(id)}
        deleteNote={() => deleteNote(id)}
      />
    </Dialog>
  );
};

EditNote.propTypes = {
  addNote: PropTypes.func.isRequired,
  archiveNote: PropTypes.func.isRequired,
  editNote: PropTypes.func.isRequired,
  deleteNote: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
};

export default connect(null, { addNote, archiveNote, editNote, deleteNote })(
  EditNote
);
