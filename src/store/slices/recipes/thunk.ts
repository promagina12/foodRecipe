import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import RecipesService from "src/services/Recipes";

export const getAllRecipe = createAsyncThunk<any>(
  "recipes/getAllRecipe",
  async (_, { rejectWithValue }) => {
    console.log("response1: ");
    try {
      const response: AxiosResponse = await RecipesService.listRecipes();
      console.log("response: ", response);

      return response.data;
    } catch (error) {
      rejectWithValue(error);
      console.log("ERROR: ", error);
    }
  }
);
