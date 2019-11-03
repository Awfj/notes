import { combineReducers } from "redux";
import notes from "./notes";
import labels from "./labels";
import notesVisibility from "./notesVisibility";

export default combineReducers({
  notes,
  labels,
  notesVisibility
});
