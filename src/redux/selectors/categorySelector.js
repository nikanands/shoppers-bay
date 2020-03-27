import { createSelector } from "reselect";

const selectCategories = state => state.category;

export const selectCategorySection = createSelector(
  [selectCategories],
  category => category.sections
);
