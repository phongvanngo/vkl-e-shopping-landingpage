import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loadWardsInDistrictData,
  updateAddress,
} from "../../../app/redux/addressSlice";

export default function DistrictsBox() {
  const dispatch = useDispatch();
  const districts = useSelector((state) => state.address.districts || []);
  const { city } = useSelector((state) => state.address.currentAddress);
  return (
    <>
      <div className="input-box">
        <select
          id="region_id"
          name="region_id"
          title="State/Province"
          defaultvalue=""
          className="required-entry validate-select"
          onChange={(e) => {
            let districtInfo = JSON.parse(e.target.value);
            let cityInfo = city;
            dispatch(loadWardsInDistrictData({ districtInfo, cityInfo }));
            dispatch(updateAddress({ district: districtInfo }));
          }}
        >
          {districts.map((district, index) => {
            return (
              <option key={index} value={JSON.stringify(district)}>
                {district.name}
              </option>
            );
          })}
        </select>

        <input
          type="text"
          id="region"
          name="region"
          value=""
          title="State/Province"
          className="input-text required-entry"
          style={{ display: "none" }}
        />
      </div>
    </>
  );
}
