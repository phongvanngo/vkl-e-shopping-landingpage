// import axiosClient from './AxiosClient';
import { fakeApi } from "./fakeApi";
import { allProducts } from "./fakeData";

const productApi = {
  getListProduct: async () => {
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          listCategory: allProducts,
        },
      },
      timeOut: 1000,
    });
    return response;
  },
  getListProductByCategory: async (cateogry_id) => {
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          listProduct: allProducts.filter(
            (product) => product.cateogry_id === cateogry_id
          ),
        },
      },
      timeOut: 1000,
    });

    return response;
  },
  getListProductBestSeller: async () => {
    // let dt = {
    //   listProduct: allProducts.filter(
    //     (product) => product.best_seller === true
    //   ),
    // };
    // console.log(allProducts, dt);
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          listProduct: allProducts.filter(
            (product) => product.best_seller === true
          ),
        },
      },
      timeOut: 1000,
    });
    return response;
  },
};

export default productApi;
