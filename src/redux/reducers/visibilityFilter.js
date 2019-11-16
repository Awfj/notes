import { CHANGE_VISIBILITY_FILTER } from "../actions/actionTypes";
import { VISIBILITY_FILTERS } from "../../constants";

const visibilityFilter = (state = VISIBILITY_FILTERS.active, action) => {
  switch (action.type) {
    case CHANGE_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
