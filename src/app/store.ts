import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import searchReducer from "../features/search/searchSlice";
import thunkMiddleware from "redux-thunk";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
  middleware: [thunkMiddleware],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
