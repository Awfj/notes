import {
  SET_VISIBILITY_FILTER,
  visibilityFilters
} from "../actions/actionTypes";

const visibilityFilter = (state = visibilityFilters.SHOW_ACTIVE, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
