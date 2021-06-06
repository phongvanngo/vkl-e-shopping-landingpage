import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoryApi from "../api/categoryApi";
import { openErrorNofificationDialog } from "./dialogSlice";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
  listCategory: null,
};

export const fetchListCategory = createAsyncThunk(
  "category/fetchListCategory",
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await categoryApi.getListCategory();
      console.log(response);
      switch (response.status) {
        case 200:
          dispatch(stopLoading());
          return response.data;
        case 401:
          throw new Error("Unauthorize");
        case 400:
          console.log("hi");
          throw new Error("");
        default:
          throw new Error("Error");
      }
    } catch (error) {
      dispatch(stopLoading());
      return null;
    }
  }
);

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchListCategory.fulfilled, (state, action) => {
      if (action.payload === null) return;
      const { listCategory } = action.payload;
      state.listCategory = listCategory;
    });
  },
});

export const {} = categorySlice.actions;

export default categorySlice.reducer;
