import React, { createRef, useState, useEffect } from "react";
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
  const noteFormRef = createRef();

  const handleSubmit = e => {
    e.preventDefault();

    // if (noteFormRef.current.contains(e.target)) return;
    if (!title.trim() && !content.trim()) {
      setTitle("");
      setContent("");
      setIsPinned(false);
      setIsFormActive(false);
      return;
    }

    addNote(title, content, color, [], isPinned, NOTE_STATUS.ACTIVE);
    setColor("white");
    setTitle("");
    setContent("");
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

  const handleArchiveNote = () => {
    addNote(title, content, color, [], isPinned, NOTE_STATUS.ARCHIVED);
  };

  const handleDeleteNote = () => {
    addNote(title, content, color, [], isPinned, NOTE_STATUS.DELETED);
  };

  return (
    <>
      {isFormActive ? (
        <NoteForm
          title={title}
          content={content}
          color={color}
          onSetTitle={setTitle}
          onSetContent={setContent}
          onSetColor={setColor}
          onSubmit={handleSubmit}
          addNote={addNote}
          archiveNote={handleArchiveNote}
          deleteNote={handleDeleteNote}
        />
      ) : (
        <form>
          <textarea
            name="content"
            placeholder="Take a note..."
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </form>
      )}
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
  ref={noteFormRef}
  className={`note ${styles.NewNote} ${activeColor}`}
  onClick={isFormActive ? undefined : () => setIsFormActive(true)}
  // onClick={() => setIsFormActive(true)}
></form> */
