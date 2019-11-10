const getSliceIds = slice => (slice ? slice.allIds : []);
const getSliceById = (slice, id) => (slice ? { ...slice.byId[id] } : {});

export const getSlice = slice =>
  getSliceIds(slice).map(id => getSliceById(slice, id));