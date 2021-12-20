import { configureStore } from '@reduxjs/toolkit'
import loadingReducer from './loadingSlice'
import dialogReducer from './dialogSlice'
import categoryReducer from './categorySlice'
import productReducer from './productSlice'
import cartReducer from './cartSlice'
import addressReducder from './addressSlice'

export const store = configureStore({
  reducer: {
    loading: loadingReducer,
    category: categoryReducer,
    dialog: dialogReducer,
    product: productReducer,
    cart: cartReducer,
    address: addressReducder,
  },
})
