import { createSelector } from "reselect";
import { getSlice } from "./generics";
import { VISIBILITY_FILTERS } from "../actions/actionTypes";

// export const getNotes = storedNotes => getSlice(storedNotes);

const getNotes = state => getSlice(state.notes);
const getVisibilityFilter = state => state.visibilityFilter;
const getSearchQuery = (_, props) => props.searchQuery;

export const getNotesByVisibilityFilter = createSelector(
  [getVisibilityFilter, getNotes, getSearchQuery],
  (visibilityFilter, notes, searchQuery) => {
    const {
      active,
      archived,
      deleted,
      search,
      labels,
      reminders
    } = VISIBILITY_FILTERS;

    switch (visibilityFilter) {
      case active:
        return notes.filter(note => note.status === active);
      case archived:
        return notes.filter(note => note.status === archived);
      case deleted:
        return notes.filter(note => note.status === deleted);
      case search:
        return notes.filter(
          note =>
            note.title.toLowerCase().includes(searchQuery) ||
            (note.content.toLowerCase().includes(searchQuery) &&
              note.status !== deleted)
        );
      case labels:
        console.log(visibilityFilter)
        return notes;
      case reminders:
        return notes;
      default:
        return notes;
    }
  }
);

const getNotDeletedNotes = createSelector([getNotes], notes =>
  notes.filter(note => note.status !== "deleted")
);

export const getNotesBySearchQuery = createSelector(
  [getNotDeletedNotes, getSearchQuery],
  (notes, searchQuery) =>
    notes.filter(
      note =>
        note.title.toLowerCase().includes(searchQuery) ||
        note.content.toLowerCase().includes(searchQuery)
    )
);

// export const getNotesByLabel = createSelector(
//   [getNotDeletedNotes, label],
//   (notDeletedNotes, label) =>
//     notDeletedNotes.filter(note => note.labels.includes(label))
// );
