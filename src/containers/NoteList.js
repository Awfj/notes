import { connect } from "react-redux";
import NoteList from "../components/notes/NoteList/NoteList";
import { archiveNote, deleteNote } from "../store/actions/actions";
import { notesVisibilityFilters } from "../store/actions/actionTypes";

const getVisibleNotes = (notes, filter) => {
  switch (filter) {
    case notesVisibilityFilters.SHOW_ACTIVE:
      return notes.filter(note => note.status === 'active');
    case notesVisibilityFilters.SHOW_ARCHIVED:
      return notes.filter(note => note.status === 'archived');
    case notesVisibilityFilters.SHOW_DELETED:
      return notes.filter(note => note.status === 'deleted');
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  notes: getVisibleNotes(state.notes, state.notesVisibility)
});

const mapDispatchToProps = dispatch => ({
  archiveNote: id => dispatch(archiveNote(id)),
  deleteNote: id => dispatch(deleteNote(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
