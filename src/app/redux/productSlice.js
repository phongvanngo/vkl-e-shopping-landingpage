import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import productApi from '../api/productApi'
import { startLoading, stopLoading } from './loadingSlice'

const initialState = {
  listProduct: [],
  currentProduct: null,
}

export const fetchListProduct = createAsyncThunk(
  'product/fetchListProduct',
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi
    dispatch(startLoading())
    try {
      const response = await productApi.getListProduct()
      console.log("abc", response)
      switch (response.status) {
        case 200:
          dispatch(stopLoading())
          return response.data
        case 401:
          throw new Error('Unauthorize')
        case 400:
          console.log('hi')
          throw new Error('')
        default:
          throw new Error('Error')
      }
    } catch (error) {
      dispatch(stopLoading())
      return null
    }
  }
)
export const fetchProductById = createAsyncThunk(
  'product/fetchProductById',
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi
    dispatch(startLoading())
    try {
      const response = await productApi.getProductById(payload)
      console.log(response)
      switch (response.status) {
        case 200:
          dispatch(stopLoading())
          return response.data
        case 401:
          throw new Error('Unauthorize')
        case 400:
          console.log('hi')
          throw new Error('')
        default:
          throw new Error('Error')
      }
    } catch (error) {
      dispatch(stopLoading())
      return null
    }
  }
)
export const fetchListProductByCategory = createAsyncThunk(
  'product/fetchListProductByCategory',
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi
    dispatch(startLoading())
    try {
      const response = await productApi.getListProductByCategory(payload)
      console.log(response)
      switch (response.status) {
        case 200:
          dispatch(stopLoading())
          return response.data
        case 401:
          throw new Error('Unauthorize')
        case 400:
          console.log('hi')
          throw new Error('')
        default:
          throw new Error('Error')
      }
    } catch (error) {
      dispatch(stopLoading())
      return null
    }
  }
)
export const fetchListProductBestSeller = createAsyncThunk(
  'product/fetchListProductBestSeller',
  async (payload, thunkApi) => {
    if (payload !== null) {
    }
    const { dispatch } = thunkApi
    dispatch(startLoading())
    try {
      const response = await productApi.getListProductBestSeller()
      console.log('123', response)
      switch (response.status) {
        case 200:
          dispatch(stopLoading())

          return response.data
        case 401:
          throw new Error('Unauthorize')
        case 400:
          console.log('hi')
          throw new Error('')
        default:
          throw new Error('Error')
      }
    } catch (error) {
      dispatch(stopLoading())
      return null
    }
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchListProduct.fulfilled, (state, action) => {
        console.log('action', action.payload)
        if (action.payload === null) return
        const listProduct  = action.payload

        state.listProduct = listProduct
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        if (action.payload === null) return
        const { productDetail } = action.payload

        state.currentProduct = productDetail
      })
      .addCase(fetchListProductByCategory.fulfilled, (state, action) => {
        if (action.payload === null) return
        const { listProduct } = action.payload
        state.listProduct = listProduct
      })
      .addCase(fetchListProductBestSeller.fulfilled, (state, action) => {
        if (action.payload === null) return
        const { listProduct } = action.payload
        console.log(listProduct)
        state.listProduct = listProduct
      })
  },
})

export const {} = productSlice.actions

export default productSlice.reducer
