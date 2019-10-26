import { combineReducers } from "redux";
import notes from "./notes";
import notesVisibility from "./notesVisibility";

export default combineReducers({
  notes,
  notesVisibility
});
