import {
  ADD_NOTE,
  ARCHIVE_NOTE,
  DELETE_NOTE
  // SET_VIEW_OPTION,
  // viewOptions,
} from "../actions/actionTypes";

const initialState = [
  {
    id: 0,
    title: "Qwe!",
    body: "gds active",
    color: "orange",
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
    color: "green",
    status: "deleted"
  },
  {
    id: 3,
    title: "",
    body: "Qrsghh& active",
    color: "pink",
    status: "active"
  }
];

const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          body: action.body,
          color: "white",
          status: "active"
        }
      ];
    case ARCHIVE_NOTE:
      return state.map(note =>
        note.id === action.id ? { ...note, status: "archived" } : note
      );
    case DELETE_NOTE:
      return state.map(note =>
        note.id === action.id ? { ...note, status: "deleted" } : note
      );
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
