import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadDistrictsInCityData,
  updateAddress,
} from "../../../app/redux/addressSlice";

export default function CitiesBox() {
  const cities = useSelector((state) => state.address.cities) || [];
  console.log("cities box ", cities);
  const [city, setCity] = useState();
  const dispatch = useDispatch();
  return (
    <>
      <div className="input-box">
        <select
          onChange={(e) => {
            let cityInfo = JSON.parse(e.target.value);
            dispatch(loadDistrictsInCityData({ cityInfo }));
            dispatch(updateAddress({ city: cityInfo }));
          }}
          name="country_id"
          id="country"
          className="validate-select"
          title="Country"
        >
          {cities.map((city, index) => {
            return (
              <option key={index} value={JSON.stringify(city)}>
                {city.name}
              </option>
            );
          })}
        </select>{" "}
      </div>
    </>
  );
}
