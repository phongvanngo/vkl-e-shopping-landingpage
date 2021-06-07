import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  CalculateCart,
  increaseItemToCart,
} from "../../../app/redux/cartSlice";

export default function AddToBoxComponent({ product }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(increaseItemToCart({ product: product, quantity: quantity }));
    dispatch(CalculateCart());
  };
  return (
    <>
      <div className="add-to-box">
        <div className="add-to-cart">
          <div className="pull-left">
            <div className="custom pull-left">
              <button
                onClick={() => {
                  if (quantity === 1) return;
                  setQuantity(quantity - 1);
                }}
                className="reduced items-count"
                type="button"
              >
                <i className="fa fa-minus">&nbsp;</i>
              </button>
              <input
                type="text"
                className="input-text qty"
                title="Qty"
                value={quantity}
                maxlength="12"
                id="qty"
                name="qty"
              />
              <button
                onClick={() => {
                  setQuantity(quantity + 1);
                }}
                className="increase items-count"
                type="button"
              >
                <i className="fa fa-plus">&nbsp;</i>
              </button>
            </div>
          </div>
          <button
            onClick={() => handleAddToCart()}
            className="button btn-cart"
            title="Add to Cart"
            type="button"
          >
            Thêm vào giỏ
          </button>
        </div>
      </div>
    </>
  );
}
