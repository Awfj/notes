import React, { useState } from "react";
import { connect } from "react-redux";

import NoteForm from "../NoteForm/NoteForm";
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
    setFormIsActive(false);
  };

  // console.log('new', formIsActive);
  return (
    <>
      <NoteForm
        formIsActive={formIsActive}
        title={title}
        content={content}
        color={color}
        onSetTitle={setTitle}
        onSetContent={setContent}
        onSetColor={setColor}
        onSetFormIsActive={setFormIsActive}
        onSubmit={addNewNote}
        addNote={() => handleAddNote(NOTE_STATUS.ACTIVE)}
        archiveNote={() => handleAddNote(NOTE_STATUS.ARCHIVED)}
        deleteNote={() => handleAddNote(NOTE_STATUS.DELETED)}
      />
      {/* {formIsActive ? (
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
  isPinned={isPinned}
  onPinNote={() => setIsPinned(!isPinned)}
></Toolbox>; */
