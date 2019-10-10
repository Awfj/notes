import {
  ADD_NOTE,
  DELETE_NOTE,
  SET_VIEW_OPTION,
  viewOptions,
  SET_VISIBILITY_FILTER,
  visibilityFilters
} from "../actions/actions";

export function notes(state = [], action) {
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
}

const { LIST } = viewOptions;
export function viewOption(state = LIST, action) {
  switch (action.type) {
    case SET_VIEW_OPTION:
      return action.type;
    default:
      return state;
  }
}

const { SHOW_ACTIVE } = visibilityFilters;
export function visibilityFilter(state = SHOW_ACTIVE, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.type;
    default:
      return state;
  }
}
