import { TOGGLE_SIDEBAR, SEARCH_NOTES } from "../actions/actionTypes";

const initialState = {
  sidebarIsOpen: true
  // notes
};

const header = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarIsOpen: false
      }
    case SEARCH_NOTES:
      return console.log('!!!');
    default:
      return state;
  }
};

export default header;