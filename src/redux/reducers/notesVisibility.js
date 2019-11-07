import {
  CHANGE_NOTES_VISIBILITY,
  notesVisibilityFilters
} from "../actions/actionTypes";

const notesVisibility = (state = notesVisibilityFilters.SHOW_ACTIVE, action) => {
  switch (action.type) {
    case CHANGE_NOTES_VISIBILITY:
      return action.filter;
    default:
      return state;
  }
};

export default notesVisibility;
