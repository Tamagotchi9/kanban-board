import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { boardSlice } from "./modules/board";

const rootReducer = combineReducers({
  board: boardSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
