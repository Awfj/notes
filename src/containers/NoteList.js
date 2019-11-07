import { connect } from "react-redux";
import NoteList from "../components/notes/NoteList/NoteList";
import {
  addNote,
  archiveNote,
  changeNoteColor,
  deleteNote
} from "../redux/actions/actionCreators";
import { getNotesByVisibilityFilter, getNotesBySearchQuery } from "../redux/selectors";

const getNotes = (state, filter, searchQuery) =>
  searchQuery.length > 0
    ? getNotesBySearchQuery(state, searchQuery)
    : getNotesByVisibilityFilter(state, filter);

const mapStateToProps = (state, { searchQuery }) => ({
  notes: getNotes(state, state.notesVisibility, searchQuery)
  // notes: getNotesByVisibilityFilter(state, state.notesVisibility)
});

const mapDispatchToProps = {
  addNote,
  archiveNote,
  deleteNote,
  changeNoteColor
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteList);
