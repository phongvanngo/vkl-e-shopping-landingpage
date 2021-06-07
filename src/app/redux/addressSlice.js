import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { openErrorNofificationDialog } from "./dialogSlice";
import { startLoading, stopLoading } from "./loadingSlice";
import { TinhThanhVietNam } from "./../api/TinhThanhVietNam";

const initialState = {
  cities: null,
  districts: null,
  wards: null,
  currentAddress: {
    city: null,
    district: null,
    ward: null,
    street: "",
  },
};

export const adrressSlice = createSlice({
  name: "address",
  initialState,
  reducers: {
    loadCitiesData: (state) => {
      state.cities = TinhThanhVietNam.data.map((element) => {
        console.log(element);
        const { level1_id, name, type } = element;
        return {
          id: level1_id,
          name,
        };
      });
    },
    loadDistrictsInCityData: (state, action) => {
      const { cityInfo } = action.payload;
      let city = TinhThanhVietNam.data.find(
        (element) => element.level1_id === cityInfo.id
      );
      state.districts = city.level2s.map((element) => {
        const { level2_id, name } = element;
        return {
          id: level2_id,
          name,
        };
      });
    },
    loadWardsInDistrictData: (state, action) => {
      const { cityInfo, districtInfo } = action.payload;
      console.log("load ward", cityInfo, districtInfo);
      let city = TinhThanhVietNam.data.find(
        (element) => element.level1_id === cityInfo.id
      );
      let district = city.level2s.find(
        (element) => element.level2_id === districtInfo.id
      );
      state.wards = district.level3s.map((element) => {
        const { level3_id, name } = element;
        return {
          id: level3_id,
          name,
        };
      });
    },
    updateAddress: (state, action) => {
      const { city, district, ward, street } = action.payload;
      let newAddress = {
        city: city ? city : state.currentAddress.city,
        district: district ? district : state.currentAddress.district,
        ward: ward ? ward : state.currentAddress.ward,
        street: street ? street : state.currentAddress.street,
      };
      state.currentAddress = newAddress;
    },
  },

  extraReducers: (builder) => {
    // builder.addCase(orderRequest.fulfilled, (state, action) => {
    //   if (action.payload === null) return;
    // });
  },
});

export const {
  loadCitiesData,
  loadDistrictsInCityData,
  loadWardsInDistrictData,
  updateAddress,
} = adrressSlice.actions;

export default adrressSlice.reducer;
