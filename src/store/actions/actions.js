import {
  ADD_NOTE,
  ARCHIVE_NOTE,
  CHANGE_NOTE_COLOR,
  CHANGE_NOTES_VISIBILITY,
  DELETE_NOTE,
  SEARCH_NOTES
} from "./actionTypes";

let nextNoteId = 4; // 0
export const addNote = (title, content, color) => ({
  type: ADD_NOTE,
  id: nextNoteId++,
  title,
  content,
  color
});

export const archiveNote = id => ({ type: ARCHIVE_NOTE, id });
export const deleteNote = id => ({ type: DELETE_NOTE, id });
export const changeNoteColor = (id, color) => ({
  type: CHANGE_NOTE_COLOR,
  id,
  color
});

export const changeNotesVisibility = filter => ({
  type: CHANGE_NOTES_VISIBILITY,
  filter
});

export const searchNotes = query => ({
  type: SEARCH_NOTES,
  query
});
