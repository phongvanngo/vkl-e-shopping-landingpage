import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartApi from "../api/cartApi";
import { openErrorNofificationDialog } from "./dialogSlice";
import { startLoading, stopLoading } from "./loadingSlice";

const initialState = {
  productsInCart: [],
  totalPrice: 0,
  amountItem: 0,
};

export const orderRequest = createAsyncThunk(
  "cart/orderRequest",
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi;
    dispatch(startLoading());
    try {
      const response = await cartApi.sendOrderRequest();
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

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    restoreCart: (state, action) => {
      state.productsInCart = JSON.parse(localStorage.getItem("cart"));
    },
    increaseItemToCart: (state, action) => {
      let newCart = state.productsInCart;
      const { product, quantity } = action.payload;
      let index = newCart.findIndex(
        (element) => element.product?.id === product.id
      );
      if (index === -1) {
        newCart = [...newCart, { product: product, quantity: quantity }];
      } else {
        newCart[index].quantity += quantity;
      }
      state.productsInCart = [...newCart];
      localStorage.setItem("cart", JSON.stringify(state.productsInCart));
    },
    setItemToCart: (state, action) => {
      let newCart = state.productsInCart;
      const { product, quantity } = action.payload;
      let index = newCart.findIndex(
        (element) => element.product?.id === product.id
      );
      if (index === -1) {
        newCart = [...newCart, { product: product, quantity: quantity }];
      } else {
        newCart[index] = { product: product, quantity: quantity };
      }
      state.productsInCart = [...newCart];
      localStorage.setItem("cart", JSON.stringify(state.productsInCart));
    },

    decreaseItemFromCart: (state, action) => {
      let newCart = state.productsInCart;
      const { product, quantity } = action.payload;
      let index = newCart.findIndex(
        (element) => element.product?.id === product.id
      );
      if (index > -1) {
        if (newCart[index].quantity > 1) newCart[index].quantity -= quantity;
      } else {
      }

      newCart = newCart.filter((element) => element.quantity > 0);
      state.productsInCart = [...newCart];
      localStorage.setItem("cart", JSON.stringify(state.productsInCart));
    },
    removeItemFromCart: (state, action) => {
      let newCart = state.productsInCart;
      const productId = action.payload;
      newCart = newCart.filter((element) => element.product.id !== productId);
      state.productsInCart = [...newCart];
      localStorage.setItem("cart", JSON.stringify(state.productsInCart));
    },
    CalculateCart: (state) => {
      let totalPrice = 0;
      let amountItem = 0;
      if (!state.productsInCart) {
        state.productsInCart = [];
        return;
      }
      state.productsInCart.forEach((e) => {
        totalPrice += e.product.price * e.quantity;
        amountItem += e.quantity;
      });
      state.amountItem = amountItem;
      state.totalPrice = totalPrice;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(orderRequest.fulfilled, (state, action) => {
      if (action.payload === null) return;
    });
  },
});

export const {
  CalculateCart,
  restoreCart,
  increaseItemToCart,
  removeItemFromCart,
  decreaseItemFromCart,
  setItemToCart,
} = cartSlice.actions;

export default cartSlice.reducer;
