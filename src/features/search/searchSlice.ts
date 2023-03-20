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

// export const search: any = createAsyncThunk(
//   "search/user",
//   async (url, { rejectWithValue }) => {
//     const response = await searchService.search(url);

//     if (!response) {
//       return rejectWithValue("Can't add task. Server error.");
//     }

//     return response;
//   }
// );

export const search: any = createAsyncThunk(
  "search/user",
  async (url: any, thunkAPI: any) => {
    try {
      return await searchService.search(url);
    } catch (error: any) {
      const message =
        (error.response && error.response.data && error.data.message) ||
        error.message ||
        error.String();
      console.log(message);
      return thunkAPI.rejectWithValue(message);
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
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export default searchSlice.reducer;
