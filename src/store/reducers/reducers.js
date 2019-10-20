import { combineReducers } from "redux";
import sidebar from "./sidebar";
import notes from "./notes";
import notesVisibility from "./notesVisibility";

export default combineReducers({
  sidebar,
  notes,
  notesVisibility
});
