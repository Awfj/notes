import {
  ADD_NOTE,
  ARCHIVE_NOTE,
  DELETE_NOTE,
  SET_VIEW_OPTION,
  SET_VISIBILITY_FILTER
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

export const setViewOption = () => ({ type: SET_VIEW_OPTION });
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
