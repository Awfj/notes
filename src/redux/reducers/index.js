import { combineReducers } from "redux";
import notes from "./notes";
import labels from "./labels";
import visibilityFilter from "./visibilityFilter";

export default combineReducers({
  notes,
  labels,
  visibilityFilter
});
