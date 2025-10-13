import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getAllRecipe } from "./thunk";
import { RootState } from "src/store";

const initialState: any = {
  isLoadingRecipes: false,
  recipes: [],
  page: 1,
  per_page: 30,
  error: null,
};

const { actions, reducer } = createSlice({
  name: "recipes",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllRecipe.pending, (state) => {
      state.isLoadingRecipes = true;
    });
    builder.addCase(getAllRecipe.fulfilled, (state, { payload }) => {
      state.isLoadingRecipes = false;
      state.recipes = payload;
    });
    builder.addCase(getAllRecipe.rejected, (state, action) => {
      state.isLoadingRecipes = false;
      state.error = action.error;
    });
  },
});

const selectRoot = (state: RootState) => state.recipes;
export const recipesSelectors = {
  recipes: createSelector(selectRoot, (state) => state.recipes),
  isLoadingRecipes: createSelector(
    selectRoot,
    (state) => state.isLoadingRecipes
  ),
};

export const recipesActions = {
  ...actions,
};

export const recipesReducer = reducer;
