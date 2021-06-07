import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { numberWithSpaces } from "../../../app/myLibrary/utilities";
import CitiesBox from "./cartCollaterals.citiesBox";
import DistrictsBox from "./cartCollaterals.districtsBox";
import WardsBox from "./cartCollaterals.wardsBox";

export default function CartCollaterals() {
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const cities = useSelector((state) => state.address.cities);

  return (
    <>
      <div className="cart-collaterals container">
        {/* <!-- BEGIN COL2 SEL COL 1 --> */}
        <div className="row">
          {/* <!-- BEGIN TOTALS COL 2 --> */}
          <div className="col-sm-4">
            <div className="shipping">
              <h3>Estimate Shipping and Tax</h3>
              <div className="shipping-form">
                <form action="" method="post" id="shipping-zip-form">
                  <p>Enter your destination to get a shipping estimate.</p>
                  <ul className="form-list">
                    <li>
                      <label for="country" className="required">
                        <em>*</em>Tỉnh/ Thành phố
                      </label>
                      <CitiesBox />
                    </li>
                    <li>
                      <label for="region_id">Quận/ Huyện</label>
                      <DistrictsBox />
                    </li>
                    <li>
                      <label for="region_id">Phường/ Xã</label>
                      <WardsBox />
                    </li>
                    <li>
                      <label for="postcode">Tên đường, địa chỉ nhà: </label>
                      <div className="input-box">
                        <input
                          className="input-text validate-postcode"
                          type="text"
                          id="postcode"
                          name="estimate_postcode"
                        />
                      </div>
                    </li>
                  </ul>
                  <div className="buttons-set11">
                    <button
                      type="button"
                      title="Get a Quote"
                      onClick="coShippingMethodForm.submit()"
                      className="button get-quote"
                    >
                      <span>Get a Quote</span>
                    </button>
                  </div>

                  {/* <!--buttons-set11--> */}
                </form>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="discount">
              <h3>Discount Codes</h3>
              <form id="discount-coupon-form" action="" method="post">
                <label for="coupon_code">
                  Enter your coupon code if you have one.
                </label>
                <input
                  type="hidden"
                  name="remove"
                  id="remove-coupone"
                  value="0"
                />
                <input
                  className="input-text fullwidth"
                  type="text"
                  id="coupon_code"
                  name="coupon_code"
                  value=""
                />
                <button
                  type="button"
                  title="Apply Coupon"
                  className="button coupon "
                  onClick="discountForm.submit(false)"
                  value="Apply Coupon"
                >
                  <span>Apply Coupon</span>
                </button>
              </form>
            </div>

            {/* <!--discount--> */}
          </div>

          {/* <!--col-sm-4--> */}

          <div className="col-sm-4">
            <div className="totals">
              <h3>Shopping Cart Total</h3>
              <div className="inner">
                <table
                  id="shopping-cart-totals-table"
                  className="table shopping-cart-table-total"
                >
                  <colgroup>
                    <col />
                    <col width="1" />
                  </colgroup>
                  <tfoot>
                    <tr>
                      <td className="a-left" colspan="1">
                        <strong>Grand Total</strong>
                      </td>
                      <td className="a-right">
                        <strong>
                          <span className="price">
                            {numberWithSpaces(totalPrice) + " VND"}
                          </span>{" "}
                        </strong>
                      </td>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td className="a-left" colspan="1">
                        Subtotal{" "}
                      </td>
                      <td className="a-right">
                        <span className="price">
                          {numberWithSpaces(totalPrice) + " VND"}
                        </span>{" "}
                      </td>
                    </tr>
                  </tbody>
                </table>

                <ul className="checkout">
                  <li>
                    <button
                      type="button"
                      title="Proceed to Checkout"
                      className="button btn-proceed-checkout"
                      onClick=""
                    >
                      <span>Proceed to Checkout</span>
                    </button>
                  </li>
                  <br />
                  <li>
                    <Link
                      to={"/multiple-addresses"}
                      title="Checkout with Multiple Addresses"
                    >
                      Checkout with Multiple Addresses
                    </Link>
                  </li>
                  <br />
                </ul>
              </div>

              {/* <!--inner--> */}
            </div>

            {/* <!--totals--> */}
          </div>

          {/* <!--col-sm-4--> */}
        </div>

        {/* <!--cart-collaterals--> */}
      </div>
    </>
  );
}
