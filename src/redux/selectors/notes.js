import { getSlice } from "./generics";
import { VISIBILITY_FILTERS } from "../actions/actionTypes";

const getNotes = notes => getSlice(notes);

export const getNotesByVisibilityFilter = (notes, visibilityFilter) => {
  const allNotes = getNotes(notes);
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.SHOW_ACTIVE:
      return allNotes.filter(note => note.status === "active");
    case VISIBILITY_FILTERS.SHOW_ARCHIVED:
      return allNotes.filter(note => note.status === "archived");
    case VISIBILITY_FILTERS.SHOW_DELETED:
      return allNotes.filter(note => note.status === "deleted");
    default:
      return allNotes;
  }
};

export const getNotesBySearchQuery = (notes, searchQuery) => {
  const allNotes = getNotes(notes);
  return allNotes.filter(
    note =>
      (note.title.toLowerCase().includes(searchQuery) ||
        note.content.toLowerCase().includes(searchQuery)) &&
      note.status !== "deleted"
  );
};

export const getNotesByLabel = (notes, label) => {
  const allNotes = getNotes(notes);
  return allNotes;
}