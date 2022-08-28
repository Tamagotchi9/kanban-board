import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { boardSlice } from "./modules/board";
import { modalSlice } from "./modules/modal";

const rootReducer = combineReducers({
  board: boardSlice.reducer,
  modal: modalSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});
