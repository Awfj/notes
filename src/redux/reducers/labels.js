import { ADD_LABEL, DELETE_LABEL } from "../actions/actionTypes";

const initialState = [
  { id: 0, label: "zzz", notes: [] },
  { id: 1, label: "abc", notes: [] }
];

const labels = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LABEL:
      return [
        ...state,
        {
          id: action.id,
          label: action.label,
          notes: []
        }
      ];
    case DELETE_LABEL:
      return state;
    default:
      return state;
  }
};

export default labels;
