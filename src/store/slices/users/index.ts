import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "src/store";
import { getAllUsers, getUserById } from "./thunk";
import { IUser } from "src/interface/user";

export type UserState = {
  isLoadingUsers: boolean;
  users: IUser[];
  currUser: IUser | null;
  error: any | null;
};

const initialState: UserState = {
  isLoadingUsers: false,
  users: [],
  currUser: null,
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

    //-----------------------//

    builder.addCase(getUserById.fulfilled, (state, { payload }) => {
      state.isLoadingUsers = false;
      state.currUser = payload;
    });
    builder.addCase(getUserById.rejected, (state) => {
      state.currUser = null;
    });
  },
});

const selectRoot = (state: RootState) => state.users;

export const usersSelector = {
  users: createSelector(selectRoot, (state) => state.users),
  currUser: createSelector(selectRoot, (state) => state.currUser),
  isLoadingUsers: createSelector(selectRoot, (state) => state.isLoadingUsers),
};

export const usersActions = {
  ...actions,
};

export const usersReducer = reducer;
