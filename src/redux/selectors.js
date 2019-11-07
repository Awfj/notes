import { VISIBILITY_FILTERS } from "../redux/actions/actionTypes";

const getNotesState = store => store.notes;
const getNoteList = store =>
  getNotesState(store) ? getNotesState(store).allIds : [];
const getNoteById = (store, id) =>
  getNotesState(store) ? { ...getNotesState(store).byId[id] } : {};

export const getNotes = store =>
  getNoteList(store).map(id => getNoteById(store, id));

export const getNotesByVisibilityFilter = (store, visibilityFilter) => {
  const allNotes = getNotes(store);
  console.log(store.notes)
  console.log(getNotesState(store))
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

export const getNotesBySearchQuery = (store, searchQuery) => {
  const allNotes = getNotes(store);
  return allNotes.filter(
    note =>
      (note.title.toLowerCase().includes(searchQuery) ||
        note.content.toLowerCase().includes(searchQuery)) &&
      note.status !== "deleted"
  );
};
