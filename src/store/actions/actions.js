export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const SET_VIEW_OPTION = "SET_VIEW_OPTION";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";

export const viewOptions = {
  LIST: "LIST",
  GRID: "GRID"
};

export const visibilityFilters = {
  SHOW_ACTIVE: "SHOW_ACTIVE",
  SHOW_DELETED: "SHOW_DELETED"
};

let nextNoteId = 0;
export const addNote = (title, body) => ({
  type: ADD_NOTE,
  id: nextNoteId++,
  title,
  body
});

export const deleteNote = id => ({ type: DELETE_NOTE, id });

export const setViewOption = () => ({ type: SET_VIEW_OPTION });
export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});
