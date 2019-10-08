const notes = (state = [], action) => {
  switch (action.type) {
    case "REMOVE_NOTE":
      const notes = [...this.state.notes];
      notes.splice(action.id, 1);
      return [
        ...state,
        {
          notes
        }
      ];
    default:
      return state;
  }
};

export default notes;
