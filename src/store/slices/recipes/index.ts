import { createSelector, createSlice } from "@reduxjs/toolkit";
import { getAllRecipe, getAllTags, getRecipesByTag } from "./thunk";
import { RootState } from "src/store";
import { IRecipe } from "src/interface/recipe";
import { tags } from "react-native-svg/lib/typescript/xmlTags";

export type RecipeState = {
  isLoadingRecipes: boolean;
  isLoadingTags: boolean;
  isLoadingTagRecipes: boolean;
  recipes: IRecipe[];
  tagRecipes: IRecipe[];
  tags: string[];
  page: number;
  per_page: number;
  error: any | null;
};

const initialState: RecipeState = {
  isLoadingRecipes: false,
  isLoadingTags: false,
  isLoadingTagRecipes: false,
  recipes: [],
  tags: [],
  tagRecipes: [],
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
      state.recipes = payload.recipes;
    });
    builder.addCase(getAllRecipe.rejected, (state, action) => {
      state.isLoadingRecipes = false;
      state.error = action.error;
    });

    //---------------------------------//
    //---------------------------------//

    builder.addCase(getAllTags.pending, (state) => {
      state.isLoadingTags = true;
    });
    builder.addCase(getAllTags.fulfilled, (state, { payload }) => {
      state.isLoadingTags = false;
      state.tags = payload;
    });
    builder.addCase(getAllTags.rejected, (state, action) => {
      state.isLoadingTags = false;
      state.error = action.error;
    });

    //---------------------------------//
    //---------------------------------//

    builder.addCase(getRecipesByTag.pending, (state) => {
      state.isLoadingTagRecipes = true;
    });
    builder.addCase(getRecipesByTag.fulfilled, (state, { payload }) => {
      state.isLoadingTagRecipes = false;
      state.tagRecipes = payload.recipes;
    });
    builder.addCase(getRecipesByTag.rejected, (state, action) => {
      state.isLoadingTagRecipes = false;
      state.error = action.error;
    });
  },
});

const selectRoot = (state: RootState) => state.recipes;
export const recipesSelectors = {
  recipes: createSelector(selectRoot, (state) => state.recipes),
  tags: createSelector(selectRoot, (state) => state.tags),
  tagRecipes: createSelector(selectRoot, (state) => state.tagRecipes),
  isLoadingRecipes: createSelector(
    selectRoot,
    (state) => state.isLoadingRecipes
  ),
  isLoadingTags: createSelector(selectRoot, (state) => state.isLoadingTags),
  isLoadingTagRecipes: createSelector(selectRoot, (state) => state.isLoadingTagRecipes),
};

export const recipesActions = {
  ...actions,
};

export const recipesReducer = reducer;
