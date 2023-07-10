import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "@shared/types/global";

export interface IMatchedUser {
  users?: IUser[];
}

const initialState: IMatchedUser = {
  users: undefined,
};

const matchedUserSlice = createSlice({
  initialState,
  name: "matchedUser",
  reducers: {
    setUserReducer: (state, action: PayloadAction<IUser[]>) => {
      state.users = action.payload;
    },
  },
});

export const { setUserReducer } = matchedUserSlice.actions;

export const matchedUserReducer = matchedUserSlice.reducer;
