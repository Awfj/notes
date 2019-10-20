import {
  TOGGLE_SIDEBAR,
  CHANGE_NOTES_LAYOUT,
  notesLayoutOptions
} from "../actions/actionTypes";

const initialState = {
  sidebarIsOpen: true,
  notesLayout: notesLayoutOptions.LIST
};

const layout = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SIDEBAR: {
      return { ...state, sidebarIsOpen: false };
    }
    case CHANGE_NOTES_LAYOUT: {
      return {
        ...state,
        notesLayout: action.notesLayout
        // notesLayout:
        //   state.notesLayout === notesLayoutOptions.LIST
        //     ? notesLayoutOptions.GRID
        //     : notesLayoutOptions.LIST
      };
    }
  }
};

export default layout;
