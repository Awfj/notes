import { createSelector } from "reselect";
import { getSlice } from "./generics";

const getStoredLabels = state => state.labels;

export const getLabels = createSelector([getStoredLabels], storedLabels =>
  getSlice(storedLabels)
);
