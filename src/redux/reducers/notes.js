import { combineReducers } from "redux";
import {
  ADD_NOTE,
  EDIT_NOTE,
  LABEL_NOTE,
  ARCHIVE_NOTE,
  CHANGE_NOTE_COLOR,
  PIN_NOTE,
  DELETE_NOTE
} from "../actions/actionTypes";
import { NOTE_STATUS } from "../../constants";

const { ACTIVE, ARCHIVED, DELETED } = NOTE_STATUS;

const initialState = {
  1: {
    id: 1,
    title: "Project",
    content: "gds active",
    color: "orange",
    labels: ["a", "b"],
    isPinned: true,
    status: ACTIVE
  },
  2: {
    id: 2,
    title: "",
    content: "hrer archived",
    color: "yellow",
    labels: [],
    isPinned: false,
    status: ARCHIVED
  },
  3: {
    id: 3,
    title: "",
    content: "erw deleted",
    color: "green",
    labels: [],
    isPinned: false,
    status: ARCHIVED
  },
  4: {
    id: 4,
    title: "",
    content: "Qrsghh& active",
    color: "pink",
    labels: [],
    isPinned: false,
    status: ACTIVE
  }
};

const allNotes = (state = [1, 2, 3, 4], action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state, action.id];
    default:
      return state;
  }
};

const notesById = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      const { id, title, content, color, labels, isPinned, status } = action;
      return {
        ...state,
        [id]: {
          id,
          title,
          content,
          color,
          labels,
          isPinned,
          status
        }
      };
    }
    case ARCHIVE_NOTE: {
      const { id } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          isPinned: false,
          status: ARCHIVED
        }
      };
    }
    case DELETE_NOTE: {
      const { id } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          isPinned: false,
          status: DELETED
        }
      };
    }
    case EDIT_NOTE: {
      const { id, title, content, color, labels, isPinned, status } = action;
      return {
        ...state,
        [id]: {
          id,
          title,
          content,
          color,
          labels,
          isPinned,
          status
        }
      }
    }
    case CHANGE_NOTE_COLOR: {
      const { id, color } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          color
        }
      };
    }
    case LABEL_NOTE: {
      const { noteId, labelId } = action;
      const note = state[noteId];
      return {
        ...state,
        [noteId]: {
          ...note,
          labels: note.labels.concat(labelId)
        }
      };
    }
    case PIN_NOTE: {
      const { id } = action;
      const note = state[id];
      return {
        ...state,
        [id]: {
          ...note,
          isPinned: !note.isPinned
        }
      };
    }
    default:
      return state;
  }
};

export default combineReducers({ allIds: allNotes, byId: notesById });
