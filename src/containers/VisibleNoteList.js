import { connect } from "react-redux";
import NoteList from "../components/NoteList/NoteList";
import { archiveNote, deleteNote } from "../store/actions/actions";
import { visibilityFilters } from "../store/actions/actionTypes";

const getVisibleNotes = (notes, filter) => {
  switch (filter) {
    case visibilityFilters.SHOW_ACTIVE:
      return notes.filter(note => note.status === 'active');
    case visibilityFilters.SHOW_ARCHIVED:
      return notes.filter(note => note.status === 'archived');
    case visibilityFilters.SHOW_DELETED:
      return notes.filter(note => note.status === 'deleted');
    default:
      throw new Error("Unknown filter: " + filter);
  }
};

const mapStateToProps = state => ({
  notes: getVisibleNotes(state.notes, state.visibilityFilter)
});

const mapDispatchToProps = dispatch => ({
  archiveNote: id => dispatch(archiveNote(id)),
  deleteNote: id => dispatch(deleteNote(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
