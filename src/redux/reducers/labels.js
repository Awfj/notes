import { ADD_LABEL, DELETE_LABEL } from "../actions/actionTypes";

const initialState = {
  byIds: {
    1: {
      id: 1,
      label: "zzz",
      notes: [1, 3]
    },
    2: {
      id: 2,
      label: "abc",
      notes: [1, 2]
    }
  },
  allIds: [1, 2]
};

const labels = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LABEL: {
      const { id, label } = action;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            id,
            label,
            notes: []
          }
        },
        allIds: [...state.allIds, id]
      };
    }
    case DELETE_LABEL: {
      const { id } = action;
      return {
        ...state,
        byIds: {
          ...state.byIds
        },
        allIds: [...state.allIds.filter(Iid => Iid !== id)]
      };
    }
    default:
      return state;
  }
};

export default labels;
