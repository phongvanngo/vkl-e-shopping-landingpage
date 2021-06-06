import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";
import { openErrorNofificationDialog } from "./dialogSlice";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
  listProduct: [],
};

export const fetchListProduct = createAsyncThunk(
  "product/fetchListProduct",
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await productApi.getListProduct();
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
export const fetchListProductByCategory = createAsyncThunk(
  "product/fetchListProductByCategory",
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await productApi.getListProductByCategory();
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

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListProduct.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { listProduct } = action.payload;
        state.listProduct = listProduct;
      })
      .addCase(fetchListProductByCategory.fulfilled, (state, action) => {
        if (action.payload === null) return;
        const { listProduct } = action.payload;
        state.listProduct = listProduct;
      });
  },
});

export const {} = productSlice.actions;

export default productSlice.reducer;
