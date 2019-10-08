let nextNoteId = 0;
export const addNote = (title, body) => ({
  type: "ADD_NOTE",
  id: nextNoteId++,
  title,
  body
});

export const removeNote = id => ({ type: "REMOVE_NOTE", id });
