import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { numberWithSpaces } from "../../../app/myLibrary/utilities";

export default function MyCart() {
  const currentCart = useSelector((state) => state.cart);
  const { productsInCart, totalPrice, amountItem } = currentCart;
  return (
    <>
      <div className="block block-list block-cart">
        <div className="block-title"> Giỏ hàng </div>
        <div className="block-content">
          <div className="summary">
            <p className="amount">
              Có <Link to={" "}>{amountItem + " "} sản phẩm</Link> trong giỏ của
              bạn.
            </p>
            <p className="subtotal">
              {" "}
              <span className="label">Tạm tính:</span>{" "}
              <span className="price">{totalPrice}</span>{" "}
            </p>
          </div>
          <div className="ajax-checkout">
            <button
              type="button"
              title="Checkout"
              className="button button-checkout"
              onClick={() => {}}
            >
              <span>Đặt hàng</span>{" "}
            </button>
          </div>
          <p className="block-subtitle">Sản phẩm đã thêm vào giỏ</p>
          <ul id="cart-sidebar1" className="mini-products-list">
            {productsInCart.map((element, index) => {
              const { product, quantity } = element;
              let params = queryString.stringify({
                category_id: null,
                product_id: product.id,
              });
              return (
                <li className="item">
                  <div className="item-inner">
                    {" "}
                    <Link
                      to={`/product-details/${params}`}
                      className="product-image"
                    >
                      <img src={product.image} width="80" alt="product" />
                    </Link>
                    <div className="product-details">
                      <div className="access">
                        {" "}
                        <Link to={" "} className="btn-remove1">
                          Remove
                        </Link>
                        <Link
                          to=""
                          href=""
                          title="Edit item"
                          className="btn-edit"
                        >
                          <i className="icon-pencil"></i>
                          <span className="hidden">Edit item</span>
                        </Link>{" "}
                      </div>
                      {/* <!--access--> */}
                      <strong>{quantity}</strong> x{" "}
                      <span className="price">
                        {numberWithSpaces(product.price) + " VND"}
                      </span>
                      <p className="product-name">
                        <Link to={" "}>{product.name} </Link>
                      </p>
                    </div>
                    {/* <!--product-details-bottoms--> */}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
}
