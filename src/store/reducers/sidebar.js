import { TOGGLE_SIDEBAR } from "../actions/actionTypes";

const initialState = {
  isOpen: true
};

const sidebar = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        sidebarIsOpen: false
      };
    default:
      return state;
  }
};

export default sidebar;
