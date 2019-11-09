const getSliceIds = slice => (slice ? slice.allIds : []);
const getSliceById = (slice, id) => (slice ? { ...slice.byIds[id] } : {});

export const getSlice = slice =>
  getSliceIds(slice).map(id => getSliceById(slice, id));