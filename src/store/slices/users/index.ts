import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/store";
import { getAllUsers } from "./thunk";
import { IUser } from "src/interface/user";

export type UserState = {
  isLoadingUsers: boolean;
  users: IUser[];
  error: any | null;
};

const initialState: UserState = {
  isLoadingUsers: false,
  users: [],
  error: null,
};

const { actions, reducer } = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getAllUsers.pending, (state) => {
      state.isLoadingUsers = true;
    });
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
      state.isLoadingUsers = false;
      state.users = payload.users;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.isLoadingUsers = false;
      state.error = action.error;
    });
  },
});

const selectRoot = (state: RootState) => state.users;

export const usersSelector = {
  users: createSelector(selectRoot, (state) => state.users),
  isLoadingUsers: createSelector(selectRoot, (state) => state.isLoadingUsers),
};

export const usersActions = {
  ...actions,
};

export const usersReducer = reducer;
