import { createAsyncThunk } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import UsersService from "src/services/Users";

export const getAllUsers = createAsyncThunk<any>(
  "users/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response: AxiosResponse = await UsersService.listUsers();

      return response.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

export const getUserById = createAsyncThunk<any>(
  "users/getUserById",
  async (id: any) => {
    const response: AxiosResponse = await UsersService.user(id);

    return response.data;
  }
);
