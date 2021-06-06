// import axiosClient from './AxiosClient';
import { fakeApi } from "./fakeApi";
import { allProducts, listProducts } from "./fakeData";

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
          listCategory: allProducts.filter(
            (product) => product.cateogry_id == cateogry_id
          ),
        },
      },
      timeOut: 1000,
    });
    return response;
  },
};

export default productApi;
