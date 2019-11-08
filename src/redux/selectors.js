import { VISIBILITY_FILTERS } from "../redux/actions/actionTypes";

const getNoteIds = notes => (notes ? notes.allIds : []);
const getNoteById = (notes, id) => (notes ? { ...notes.byIds[id] } : {});
const getNotes = notesState =>
  getNoteIds(notesState).map(id => getNoteById(notesState, id));

export const getNotesByVisibilityFilter = (notesState, visibilityFilter) => {
  const allNotes = getNotes(notesState);
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
