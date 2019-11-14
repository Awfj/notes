import { combineReducers } from "redux";
import {
  ADD_NOTE,
  LABEL_NOTE,
  ARCHIVE_NOTE,
  CHANGE_NOTE_COLOR,
  DELETE_NOTE
} from "../actions/actionTypes";

const initialState = {
  1: {
    id: 1,
    title: "Project",
    content: "gds active",
    color: "orange",
    labels: ['a', 'b'],
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
      const { id, title, content, color, labels } = action;
      return {
        ...state,
        [id]: {
          id,
          title,
          content,
          color,
          labels,
          pinned: false,
          status: "active"
        }
      };
    }
    case ARCHIVE_NOTE: {
      const { id } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          status: "archived"
        }
      };
    }
    case DELETE_NOTE: {
      const { id } = action;
      return {
        ...state,
        [id]: {
          ...state[id],
          status: "deleted"
        }
      };
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
    default:
      return state;
  }
};

export default combineReducers({ allIds: allNotes, byId: notesById });
