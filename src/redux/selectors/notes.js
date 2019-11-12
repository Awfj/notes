import { createSelector } from "reselect";
import { getSlice } from "./generics";
import { VISIBILITY_FILTERS } from "../actions/actionTypes";

// export const getNotes = storedNotes => getSlice(storedNotes);

const getNotes = state => getSlice(state.notes);
const getVisibilityFilter = state => state.notesVisibility;

export const getNotesByVisibilityFilter = createSelector(
  [getVisibilityFilter, getNotes],
  (visibilityFilter, notes) => {
    switch (visibilityFilter) {
      case VISIBILITY_FILTERS.SHOW_ACTIVE:
        return notes.filter(note => note.status === "active");
      case VISIBILITY_FILTERS.SHOW_ARCHIVED:
        return notes.filter(note => note.status === "archived");
      case VISIBILITY_FILTERS.SHOW_DELETED:
        return notes.filter(note => note.status === "deleted");
      default:
        return notes;
    }
  }
);

const getNotDeletedNotes = createSelector(
  [getNotes],
  notes => notes.filter(note => note.status !== "deleted")
);

const getSearchQuery = (_, props) => props.searchQuery;

export const getNotesBySearchQuery = createSelector(
  [getNotDeletedNotes, getSearchQuery],
  (notes, searchQuery) =>
    notes.filter(
      note =>
        note.title.toLowerCase().includes(searchQuery) ||
        note.content.toLowerCase().includes(searchQuery)
    )
);

// export const getNotesBySearchQuery = (storedNotes, searchQuery) => {
//   const allNotes = getNotes(storedNotes);
//   return allNotes.filter(
//     note =>
//       (note.title.toLowerCase().includes(searchQuery) ||
//         note.content.toLowerCase().includes(searchQuery)) &&
//       note.status !== "deleted"
//   );
// };

// export const getNotesByLabel = createSelector(
//   [getNotDeletedNotes, label],
//   (notDeletedNotes, label) =>
//     notDeletedNotes.filter(note => note.labels.includes(label))
// );
