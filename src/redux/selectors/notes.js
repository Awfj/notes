import { createSelector } from "reselect";
import {
  getSlice
  // getSliceIds, getSliceById
} from "./generics";
import { NOTE_STATUS } from "../../constants";

// const getStoredLabels = state => state.labels;
const getStoredNotes = state => state.notes;

// const getNoteById = (storedNotes, storedLabels, id) => {
//   const note = storedNotes.byId[id];
//   return {
//     ...note,
//     labels: note.labels.map(
//       labelId => getSliceById(storedLabels, labelId).label
//     )
//   };
// };

// const getNotes = createSelector(
//   [getStoredNotes, getStoredLabels],
//   (storedNotes, storedLabels) => {
//     return getSliceIds(storedNotes).map(id =>
//       getNoteById(storedNotes, storedLabels, id)
//     );
//   }
// );

export const getNotes = createSelector([getStoredNotes], storedNotes =>
  getSlice(storedNotes)
);

const getSearchQuery = (_, props) => props.searchQuery;
// const getNoteStatus = (_, props) => props.status;
const getArg = (_, arg) => arg;

export const getNotesByStatus = createSelector(
  [getArg, getNotes],
  (noteStatus, notes) => {
    const { ACTIVE, ARCHIVED, DELETED } = NOTE_STATUS;

    switch (noteStatus) {
      case ACTIVE:
        return notes.filter(note => note.status === ACTIVE);
      case ARCHIVED:
        return notes.filter(note => note.status === ARCHIVED);
      case DELETED:
        return notes.filter(note => note.status === DELETED);
      // case search:
      //   return notes.filter(
      //     note =>
      //       note.title.toLowerCase().includes(searchQuery) ||
      //       (note.content.toLowerCase().includes(searchQuery) &&
      //         note.status !== deleted)
      //   );
      // case labels:
      //   console.log(visibilityFilter);
      //   return notes;
      // case reminders:
      //   return notes;
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
