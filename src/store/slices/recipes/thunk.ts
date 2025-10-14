import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import RecipesService from "src/services/Recipes";

export const getAllRecipe = createAsyncThunk<any>(
  "recipes/getAllRecipe",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await RecipesService.listRecipes();
      console.log("response.data: ", response.data);
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getAllTags = createAsyncThunk<any>(
  "recipes/getAllTags",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await RecipesService.listTag();
      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getRecipesByTag = createAsyncThunk<any>(
  "recipes/getRecipesByTag",
  async (tag: any, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await RecipesService.tagRecipes(tag);

      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getRecipeById = createAsyncThunk<any>(
  "recipes/getRecipeById",
  async (id: any, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await RecipesService.getRecipe(id);

      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
