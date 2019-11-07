import {
  ADD_NOTE,
  ADD_NOTE_LABEL,
  ARCHIVE_NOTE,
  CHANGE_NOTE_COLOR,
  DELETE_NOTE
} from "../actions/actionTypes";

// const initialState = [
//   {
//     id: 0,
//     title: "Project",
//     content: "gds active",
//     color: "orange",
//     labels: ["qqq", "gqe"],
//     pinned: false,
//     status: "active"
//   },
//   {
//     id: 1,
//     title: "",
//     content: "hrer archived",
//     color: "yellow",
//     labels: [],
//     pinned: false,
//     status: "archived"
//   },
//   {
//     id: 2,
//     title: "",
//     content: "erw deleted",
//     color: "green",
//     labels: [],
//     pinned: false,
//     status: "deleted"
//   },
//   {
//     id: 3,
//     title: "",
//     content: "Qrsghh& active",
//     color: "pink",
//     labels: [],
//     pinned: false,
//     status: "active"
//   }
// ];

const initialState = {
  byId: {
    1: {
      id: 1,
      title: "Project",
      content: "gds active",
      color: "orange",
      labels: ["qqq", "gqe"],
      pinned: false,
      status: "active"
    }
  },
  allIds: [1]
};

const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          content: action.content,
          color: action.color,
          labels: action.labels,
          pinned: false,
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
    case CHANGE_NOTE_COLOR:
      return state.map(note =>
        note.id === action.id ? { ...note, color: action.color } : note
      );
    case ADD_NOTE_LABEL:
      return state.map(note =>
        note.id === action.id
          ? { ...note, labels: [...state.labels, action.label] }
          : note
      );
    default:
      return state;
  }
};

export default notes;
