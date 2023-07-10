import { combineReducers } from "@reduxjs/toolkit";

import { matchedUserReducer } from "@widgets/user-search/model";
import { IUser } from "@shared/types/global";
import { loaderReducer } from "@features/loader/model";

export interface IRootState {
  matchedUser: IUser;
  loader: {
    isLoading: boolean;
  };
}

export const rootReducer = combineReducers({
  matchedUser: matchedUserReducer,
  loader: loaderReducer,
});
