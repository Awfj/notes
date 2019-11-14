import { combineReducers } from "redux";
import { ADD_LABEL, DELETE_LABEL } from "../actions/actionTypes";

const initialState = {
  1: {
    id: 1,
    label: "zzz",
    notes: [1, 3]
  },
  2: {
    id: 2,
    label: "abc",
    notes: [1, 2]
  },
  3: {
    id: 3,
    label: "bbbb",
    notes: []
  }
};

const allLabels = (state = [1, 2, 3], action) => {
  switch (action.type) {
    case ADD_LABEL:
      return [...state, action.id];
    case DELETE_LABEL:
      return [...state.filter(id => action.id !== id)];
    default:
      return state;
  }
};

const labelsById = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LABEL: {
      const { id, label } = action;
      return {
        ...state,
        [id]: {
          id,
          label,
          notes: []
        }
      };
    }
    case DELETE_LABEL: {
      const { id } = action;
      const newState = { ...state };
      delete newState[id];
      return newState;
    }
    default:
      return state;
  }
};

export default combineReducers({
  allIds: allLabels,
  byId: labelsById
});
