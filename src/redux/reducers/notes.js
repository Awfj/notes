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
  byIds: {
    1: {
      id: 1,
      title: "Project",
      content: "gds active",
      color: "orange",
      labels: ["qqq", "gqe"],
      pinned: false,
      status: "active"
    },
    2: {
      id: 2,
      title: "",
      content: "hrer archived",
      color: "yellow",
      labels: [],
      pinned: false,
      status: "archived"
    },
    3: {
      id: 3,
      title: "",
      content: "erw deleted",
      color: "green",
      labels: [],
      pinned: false,
      status: "deleted"
    },
    4: {
      id: 4,
      title: "",
      content: "Qrsghh& active",
      color: "pink",
      labels: [],
      pinned: false,
      status: "active"
    }
  },
  allIds: [1, 2, 3, 4]
};

const notes = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [action.id]: {
            id: action.id,
            title: action.title,
            content: action.content,
            color: action.color,
            labels: action.labels,
            pinned: false,
            status: "active"
          }
        },
        allIds: [...state.allIds, action.id]
      };
    case ARCHIVE_NOTE:
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [action.id]: {
            ...state.byIds[action.id],
            status: "archived"
          }
        }
      };
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
