import {
  CHANGE_NOTES_VISIBILITY,
  VISIBILITY_FILTERS
} from "../actions/actionTypes";

const notesVisibility = (state = VISIBILITY_FILTERS.SHOW_ACTIVE, action) => {
  switch (action.type) {
    case CHANGE_NOTES_VISIBILITY:
      return action.filter;
    default:
      return state;
  }
};

export default notesVisibility;
