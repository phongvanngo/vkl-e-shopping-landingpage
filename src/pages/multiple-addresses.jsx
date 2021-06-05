import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";

class MultipleAddresses extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="state_bar">
                  <ul className="checkout-progress" id="checkout-progress-state">
                    <li title="Select Addresses" className="active first">
                      Select Addresses
                    </li>
                    <li title="Shipping Information">Shipping Information</li>
                    <li title="Billing Information">Billing Information</li>
                    <li title="Place Order">Place Order</li>
                    <li title="Order Success" className="last">
                      Order Success
                    </li>
                  </ul>
                </div>
              </div>

              {/* <!--col-xs-12-->  */}
            </div>

            {/* <!--row-->  */}
          </div>

          {/* <!--container-->  */}
        </div>

        {/* <!-- BEGIN Main Container --> */}

        <div className="main-container col1-layout wow bounceInUp animated animated">
          <div className="main">
            {/* <!--state_bar-->  */}

            <div className="multiple_addresses multiple-checkout container">
              <div className="table-responsive">
                <form id="checkout_multishipping_form" action="" method="post">
                  <div className="page-title_multi">
                    <h2>Ship to Multiple Addresses</h2>
                  </div>

                  {/* <!--page-title_multi--> */}
                  <div className="title-buttons">
                    <button
                      type="button"
                      title="Enter a New Address"
                      className="button new-address"
                      onClick="$(&#39;add_new_address_flag&#39;).value=1; $(&#39;checkout_multishipping_form&#39;).submit();"
                    >
                      <span>Enter a New Address</span>
                    </button>
                  </div>

                  {/* <!--title-buttons--> */}
                  <div className="addresses">
                    <fieldset className="">
                      <input type="hidden" name="continue" value="0" id="can_continue_flag" />
                      <input type="hidden" name="new_address" value="0" id="add_new_address_flag" />
                      <p>Please select shipping address for applicable items</p>
                      <table className="data-table table-striped" id="multiship-addresses-table">
                        <colgroup>
                          <col />
                          <col width="1" />
                          <col width="1" />
                          <col width="1" />
                        </colgroup>
                        <thead>
                          <tr className="first last">
                            <th>Product</th>
                            <th className="a-center">Qty</th>
                            <th>Send To</th>
                            <th>Remove</th>
                          </tr>
                        </thead>
                        <tfoot>
                          <tr className="first last">
                            <td colspan="100" className="a-right last">
                              <button
                                type="submit"
                                title="Update Qty &amp; Addresses"
                                className="button btn-update"
                                onClick="$(&#39;can_continue_flag&#39;).value=0"
                              >
                                <span>Update Qty &amp; Addresses</span>
                              </button>
                            </td>
                          </tr>
                        </tfoot>
                        <tbody>
                          <tr className="first odd">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[0][24761][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[0][24761][address]"
                                id="ship_0_24761_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="even">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[1][24761][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[1][24761][address]"
                                id="ship_1_24761_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="odd">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[2][24761][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[2][24761][address]"
                                id="ship_2_24761_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="even">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[3][24761][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[3][24761][address]"
                                id="ship_3_24761_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="odd">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[4][24761][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[4][24761][address]"
                                id="ship_4_24761_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="even">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[5][24761][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[5][24761][address]"
                                id="ship_5_24761_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="odd">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[6][24761][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[6][24761][address]"
                                id="ship_6_24761_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="even">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[7][24814][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[7][24814][address]"
                                id="ship_7_24814_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="odd">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[8][24845][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[8][24845][address]"
                                id="ship_8_24845_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="even">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[9][24846][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[9][24846][address]"
                                id="ship_9_24846_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="odd">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[10][24850][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[10][24850][address]"
                                id="ship_10_24850_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="even">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[11][24850][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[11][24850][address]"
                                id="ship_11_24850_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="odd">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[12][24850][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[12][24850][address]"
                                id="ship_12_24850_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="even">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[13][24851][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[13][24851][address]"
                                id="ship_13_24851_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="odd">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[14][24853][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[14][24853][address]"
                                id="ship_14_24853_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="even">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[15][24854][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[15][24854][address]"
                                id="ship_15_24854_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                          <tr className="last odd">
                            <td>
                              <h3 className="product-name">
                                <Link to={"product-details"}>Fresh Organic Mustard Leaves</Link>
                              </h3>
                            </td>
                            <td>
                              <input
                                type="text"
                                name="ship[16][25414][qty]"
                                value="1"
                                size="2"
                                className="input-text qty"
                              />
                            </td>
                            <td>
                              <select
                                name="ship[16][25414][address]"
                                id="ship_16_25414_address"
                                className=""
                                title=""
                              >
                                <option value="1" selected="selected">
                                  john doe, Street road, AL, Alabama 42136, United States
                                </option>
                              </select>
                            </td>
                            <td className="a-center last">
                              <Link
                                className="btn-remove btn-remove2"
                                href="#"
                                title="Remove Item"
                              ></Link>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </fieldset>

                    {/* <!--multiple-checkout-->  */}
                  </div>

                  {/* <!--addresses--> */}
                </form>
              </div>

              {/* <!--table-responsive-->  */}

              <div className="buttons-set">
                {" "}
                <Link className="back-link" to={"shopping-cart"}>
                  Back to Shopping Cart
                </Link>
                <button
                  type="submit"
                  title="Continue to Shipping Information"
                  className="button btn-continue"
                  onClick="$(&#39;can_continue_flag&#39;).value=1"
                >
                  <span>Continue to Shipping Information</span>
                </button>
              </div>
            </div>

            {/* <!--multiple_addresses-->  */}
          </div>

          {/* <!--main-container-->  */}
        </div>

        {/* <!--col1-layout-->  */}

        <div className="container">
          <div className="row our-features-box">
            <ul>
              <li>
                <div className="feature-box">
                  <div className="icon-truck"></div>
                  <div className="content">FREE SHIPPING on order over $99</div>
                </div>
              </li>
              <li>
                <div className="feature-box">
                  <div className="icon-support"></div>
                  <div className="content">
                    Have a question?
                    <br />
                    +1 800 789 0000
                  </div>
                </div>
              </li>
              <li>
                <div className="feature-box">
                  <div className="icon-money"></div>
                  <div className="content">100% Money Back Guarantee</div>
                </div>
              </li>
              <li>
                <div className="feature-box">
                  <div className="icon-return"></div>
                  <div className="content">30 days return Service</div>
                </div>
              </li>
              <li className="last">
                <div className="feature-box">
                  {" "}
                  <Link href="#">
                    <i className="fa fa-apple"></i> download
                  </Link>{" "}
                  <Link href="#">
                    <i className="fa fa-android"></i> download
                  </Link>{" "}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}
export default MultipleAddresses;
