import {
  ADD_NOTE,
  LABEL_NOTE,
  ARCHIVE_NOTE,
  CHANGE_NOTE_COLOR,
  CHANGE_VISIBILITY_FILTER,
  DELETE_NOTE,
  PIN_NOTE,
  SEARCH_NOTES,
  ADD_LABEL,
  DELETE_LABEL
} from "./actionTypes";

// notes
let nextNoteId = 4; // 0
export const addNote = (title, content, color, labels, isPinned) => ({
  type: ADD_NOTE,
  id: ++nextNoteId,
  title,
  content,
  color,
  labels,
  isPinned
});

export const labelNote = (id, label) => ({
  type: LABEL_NOTE,
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
export const pinNote = id => ({ type: PIN_NOTE, id });

export const changeVisibilityFilter = filter => ({
  type: CHANGE_VISIBILITY_FILTER,
  filter
});

export const searchNotes = searchQuery => ({
  type: SEARCH_NOTES,
  searchQuery
});

// labels
let nextLabelId = 3; // 0
export const addLabel = label => ({
  type: ADD_LABEL,
  id: ++nextLabelId,
  label
});

export const deleteLabel = id => ({ type: DELETE_LABEL, id });
