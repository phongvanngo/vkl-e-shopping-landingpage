import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "./loadingSlice";
import dialogReducer from "./dialogSlice";
import categoryReducer from "./categorySlice";

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    category: categoryReducer,
    dialog: dialogReducer,
  },
});
