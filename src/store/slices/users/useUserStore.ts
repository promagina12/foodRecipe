import { IUser } from "src/interface/user";
import { create } from "zustand";

interface UserState {
  currUser: IUser | null;
  setCurrUser: (currUser: IUser) => void;
}

export const useUserStore = create<UserState>((set) => ({
  currUser: null,
  setCurrUser: (currUser: IUser) => set({ currUser }),
}));
