import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IInitialState } from "../../types/global";
import searchService from "./searchService";

const initialState: IInitialState = {
  user: null,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const search: any = createAsyncThunk(
  "search/user",
  async (url, thunkAPI) => {
    try {
      return await searchService.search(url);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const searchSlice = createSlice({
  name: "search",
  initialState,

  reducers: {},

  //Async

  extraReducers: (builder) => {
    builder
      .addCase(search.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(search.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(search.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export default searchSlice.reducer;
