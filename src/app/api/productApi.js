// import axiosClient from './AxiosClient';
import { fakeApi } from './fakeApi'
import { allProducts } from './fakeData'
import axiosClient from '../axiosClient'

const productApi = {
  getListProduct: async () => {
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          listProduct: allProducts,
        },
      },
      timeOut: 1000,
    })
    return response
  },
  getProductById: async (productId) => {
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          productDetail: allProducts.find((product) => product.id == productId),
        },
      },
      timeOut: 1000,
    })
    return response
  },
  getListProductByCategory: async (category_id) => {
    let dt = {
      listProduct: allProducts.filter(
        (product) => product.category_id == category_id
      ),
    }
    console.log('get list product by cateogry api - payload', category_id, dt)
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          listProduct: allProducts.filter(
            (product) => product.category_id == category_id
          ),
        },
      },
      timeOut: 1000,
    })

    return response
  },
  getListProductBestSeller: async () => {
    // let dt = {
    //   listProduct: allProducts.filter(
    //     (product) => product.best_seller === true
    //   ),
    // };
    // console.log(allProducts, dt);
    var response = await axiosClient.get('/api/products').then((result) => {
      return result
    })
    return response
  },
}

export default productApi
