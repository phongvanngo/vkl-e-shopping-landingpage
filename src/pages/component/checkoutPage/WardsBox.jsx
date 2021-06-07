import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAddress } from "../../../app/redux/addressSlice";

export default function WardsBox() {
  const dispatch = useDispatch();
  const wards = useSelector((state) => state.address.wards || []);
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
            let ward = JSON.parse(e.target.value);
            dispatch(updateAddress({ ward }));
          }}
        >
          {wards.map((ward, index) => {
            return <option value={JSON.stringify(ward)}>{ward.name}</option>;
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
