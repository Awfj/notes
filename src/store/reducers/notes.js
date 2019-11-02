import {
  ADD_NOTE,
  ARCHIVE_NOTE,
  CHANGE_NOTE_COLOR,
  DELETE_NOTE
} from "../actions/actionTypes";

const initialState = [
  {
    id: 0,
    title: "Qwe!",
    content: "gds active",
    color: "orange",
    pinned: false,
    status: "active"
  },
  {
    id: 1,
    title: "",
    content: "hrer archived",
    color: "yellow",
    pinned: false,
    status: "archived"
  },
  {
    id: 2,
    title: "",
    content: "erw deleted",
    color: "green",
    pinned: false,
    status: "deleted"
  },
  {
    id: 3,
    title: "",
    content: "Qrsghh& active",
    color: "pink",
    pinned: false,
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
          content: action.content,
          color: action.color,
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
    default:
      return state;
  }
};

export default notes;
