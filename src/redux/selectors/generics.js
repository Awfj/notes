import { createSelector } from "reselect";

export const getSliceIds = storedSlice =>
  storedSlice ? storedSlice.allIds : [];
export const getSliceById = (storedSlice, id) =>
  storedSlice ? { ...storedSlice.byId[id] } : {};

export const getSlice = createSelector(
  [storedSlice => storedSlice],
  storedSlice =>
    getSliceIds(storedSlice).map(id => getSliceById(storedSlice, id))
);

// export const getSlice = slice =>
//   getSliceIds(slice).map(id => getSliceById(slice, id));
