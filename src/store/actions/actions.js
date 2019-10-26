import {
  ADD_NOTE,
  ARCHIVE_NOTE,
  DELETE_NOTE,
  CHANGE_NOTES_VISIBILITY,
  SEARCH_NOTES
} from "./actionTypes";

let nextNoteId = 0;
export const addNote = (title, body) => ({
  type: ADD_NOTE,
  id: nextNoteId++,
  title,
  body
});

export const archiveNote = id => ({ type: ARCHIVE_NOTE, id });
export const deleteNote = id => ({ type: DELETE_NOTE, id });

export const changeNotesVisibility = filter => ({
  type: CHANGE_NOTES_VISIBILITY,
  filter
});

export const searchNotes = value => ({
  type: SEARCH_NOTES,
  value
});
