import {
  ADD_NOTE,
  DELETE_NOTE
  // SET_VIEW_OPTION,
  // viewOptions,
} from "../actions/actionTypes";

const initialState = [
  {
    id: 0,
    title: "Qwe!",
    body: "gds active",
    color: "",
    status: "active"
  },
  {
    id: 1,
    title: "",
    body: "hrer archived",
    color: "yellow",
    status: "archived"
  },
  {
    id: 2,
    title: "",
    body: "erw deleted",
    color: "yellow",
    status: "deleted"
  },
  {
    id: 3,
    title: "",
    body: "Qrsghh& active",
    color: "blue",
    status: "active"
  }
];

const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            id: action.id,
            title: action.title,
            body: action.body,
            color: action.color
          }
        ]
      };
    case DELETE_NOTE:
      const notes = [...state.notes];
      notes.splice(action.id, 1);
      return {
        ...state,
        notes
      };
    default:
      return state;
  }
};

export default notes;

// const { LIST } = viewOptions;
// export function viewOption(state = LIST, action) {
//   switch (action.type) {
//     case SET_VIEW_OPTION:
//       return action.type;
//     default:
//       return state;
//   }
// }
