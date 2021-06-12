import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { useSelector } from "react-redux";
import queryString from "query-string";
import { numberWithSpaces } from "../app/myLibrary/utilities";
import ListProductInCart from "./component/cartPage/productTable";
import CartCollaterals from "./component/cartPage/cartCollaterals";

export default function ShoppingCart() {
  return (
    <>
      <Header />

      <div className="page-heading">
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <div className="page-title">
                <h2>Giỏ hàng của bạn</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- BEGIN Main Container --> */}

      <div className="main-container col1-layout wow bounceInUp animated">
        <div className="main">
          <div className="cart wow bounceInUp animated">
            <div className="table-responsive shopping-cart-tbl  container">
              <form action="" method="post">
                <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr" />
                <fieldset>
                  <ListProductInCart />
                </fieldset>
              </form>
            </div>

            {/* <!-- BEGIN CART COLLATERALS --> */}

            <CartCollaterals />
          </div>

          {/* <!--cart--> */}
        </div>

        {/* <!--main-container--> */}
      </div>

      {/* <!--col1-layout--> */}

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
