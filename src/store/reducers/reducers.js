import { combineReducers } from "redux";
import header from "./header";
import notes from "./notes";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  header,
  notes,
  visibilityFilter
});
