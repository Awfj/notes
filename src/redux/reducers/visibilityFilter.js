import {
  CHANGE_VISIBILITY_FILTER,
  VISIBILITY_FILTERS
} from "../actions/actionTypes";

const visibilityFilter = (state = VISIBILITY_FILTERS.active, action) => {
  switch (action.type) {
    case CHANGE_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
