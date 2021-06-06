// import axiosClient from './AxiosClient';
import { fakeApi } from "./fakeApi";

const cartApi = {
  sendOrderRequest: async (info) => {
    console.log("cart api - order request: ", info);
    let response = await fakeApi({
      // request: loginInfo,
      response: {
        status: 200,
        data: {},
      },
      timeOut: 1000,
    });
    return response;
  },
};

export default cartApi;
