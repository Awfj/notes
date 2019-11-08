import { connect } from "react-redux";
import NoteList from "../components/notes/NoteList/NoteList";
import {
  addNote,
  archiveNote,
  changeNoteColor,
  deleteNote
} from "../redux/actions/actionCreators";
import {
  getNotesByVisibilityFilter,
  getNotesBySearchQuery
} from "../redux/selectors";

const mapStateToProps = (state, { searchQuery }) => ({
  notes: searchQuery
    ? getNotesBySearchQuery(state.notes, searchQuery)
    : getNotesByVisibilityFilter(state.notes, state.notesVisibility)
});

export default connect(
  mapStateToProps,
  {
    addNote,
    archiveNote,
    deleteNote,
    changeNoteColor
  }
)(NoteList);
