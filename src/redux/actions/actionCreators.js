import {
  ADD_NOTE,
  ADD_NOTE_LABEL,
  ARCHIVE_NOTE,
  CHANGE_NOTE_COLOR,
  CHANGE_NOTES_VISIBILITY,
  DELETE_NOTE,
  SEARCH_NOTES,
  ADD_LABEL,
  DELETE_LABEL
} from "./actionTypes";

// notes
let nextNoteId = 4; // 0
export const addNote = (title, content, color, labels) => ({
  type: ADD_NOTE,
  id: ++nextNoteId,
  title,
  content,
  color,
  labels
});

export const addNoteLabel = (id, label) => ({
  type: ADD_NOTE_LABEL,
  id,
  label
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

export const searchNotes = searchQuery => ({
  type: SEARCH_NOTES,
  searchQuery
});

// labels
let nextLabelId = 2; // 0
export const addLabel = label => ({
  type: ADD_LABEL,
  id: ++nextLabelId,
  label
});

export const deleteLabel = id => ({ type: DELETE_LABEL, id });
