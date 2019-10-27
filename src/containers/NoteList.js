import { connect } from "react-redux";
import NoteList from "../components/notes/NoteList/NoteList";
import { archiveNote, deleteNote } from "../store/actions/actions";
import { notesVisibilityFilters } from "../store/actions/actionTypes";

const getVisibleNotes = (notes, filter) => {
  switch (filter) {
    case notesVisibilityFilters.SHOW_ACTIVE:
      return notes.filter(note => note.status === "active");
    case notesVisibilityFilters.SHOW_ARCHIVED:
      return notes.filter(note => note.status === "archived");
    case notesVisibilityFilters.SHOW_DELETED:
      return notes.filter(note => note.status === "deleted");
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const getFoundNotes = (notes, searchQuery) =>
  notes.filter(
    note =>
      (note.title.toLowerCase().includes(searchQuery) ||
        note.body.toLowerCase().includes(searchQuery)) &&
      note.status !== "deleted"
  );
  
const getNotes = (notes, filter, searchQuery) =>
  searchQuery.length > 0
    ? getFoundNotes(notes, searchQuery)
    : getVisibleNotes(notes, filter);

const mapStateToProps = (state, { searchQuery }) => ({
  notes: getNotes(state.notes, state.notesVisibility, searchQuery)
});

const mapDispatchToProps = dispatch => ({
  archiveNote: id => dispatch(archiveNote(id)),
  deleteNote: id => dispatch(deleteNote(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
