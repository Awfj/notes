import { createSelector } from "reselect";

const getSliceIds = slice => (slice ? slice.allIds : []);
const getSliceById = (slice, id) => (slice ? { ...slice.byId[id] } : {});

export const getSlice = createSelector(
  [slice => slice],
  slice => getSliceIds(slice).map(id => getSliceById(slice, id))
);

// export const getSlice = slice =>
//   getSliceIds(slice).map(id => getSliceById(slice, id));
