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
          listProduct: allProducts,
        },
      },
      timeOut: 1000,
    });
    return response;
  },
  getListProductByCategory: async (category_id) => {
    let dt = {
      listProduct: allProducts.filter(
        (product) => product.category_id === category_id
      ),
    };
    console.log("get list product by cateogry api - payload", category_id, dt);
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {
          listProduct: allProducts.filter(
            (product) => product.category_id === category_id
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
