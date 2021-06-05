import React, { Component } from "react";
import { Link } from "react-router-dom";
// import $ from 'jquery';

// import {} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <>
        <header>
          <div className="container">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="header-banner">
                    <div className="assetBlock">
                      <div id="slideshow">
                        <p>
                          Special Offers! - Get <span>50%</span> off on
                          vegetables{" "}
                        </p>
                        <p>
                          sale <span>40%</span> of on bulk shopping!{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="header">
            <div className="container">
              <div className="header-container row">
                <div className="logo">
                  {" "}
                  <Link to={"/"} title="index">
                    <div>
                      <img src="/assets/img/logo.png" alt="logo" />
                    </div>
                  </Link>{" "}
                </div>
                <div className="fl-nav-menu">
                  <nav>
                    <div className="mm-toggle-wrap">
                      <div className="mm-toggle">
                        <i className="icon-align-justify"></i>
                        <span className="mm-label">Menu</span>{" "}
                      </div>
                    </div>
                    <div className="nav-inner">
                      {/* <!-- BEGIN NAV --> */}
                      <ul id="nav" className="hidden-xs">
                        <li>
                          {" "}
                          <Link className="level-top" to={"/"}>
                            <span>TRANG CHỦ</span>
                          </Link>
                        </li>
                        <li className="level0 parent drop-menu">
                          <Link to={" "}>
                            <span>SẢN PHẨM</span>{" "}
                          </Link>
                          {/* <!--sub sub category--> */}
                          <ul className="level1">
                            <li className="level1 first">
                              <Link to={"/grid"}>
                                <span>Product Grid</span>
                              </Link>
                            </li>
                            <li className="level1 nav-10-2">
                              {" "}
                              <Link to={"/list"}>
                                {" "}
                                <span>Product List</span>{" "}
                              </Link>{" "}
                            </li>
                            <li className="level1 nav-10-3">
                              {" "}
                              <Link to={"/product-details"}>
                                <span>Product Detail</span>{" "}
                              </Link>
                            </li>
                            <li className="level1 nav-10-4">
                              {" "}
                              <Link to={"/shopping-cart"}>
                                {" "}
                                <span>Cart Page</span>{" "}
                              </Link>{" "}
                            </li>
                            <li className="level1 first parent">
                              <Link to={"/checkout"}>
                                <span>Checkout</span>
                              </Link>
                            </li>
                            <li className="level1 nav-10-4">
                              {" "}
                              <Link to={"/wishlist"}>
                                <span>Wishlist</span>{" "}
                              </Link>{" "}
                            </li>
                            <li className="level1">
                              {" "}
                              <Link to={"/dashboard"}>
                                {" "}
                                <span>Dashboard</span>
                              </Link>{" "}
                            </li>
                            <li className="level1">
                              {" "}
                              <Link to={"/multiple-addresses"}>
                                {" "}
                                <span>Multiple Addresses</span>{" "}
                              </Link>
                            </li>
                            <li className="level1">
                              {" "}
                              <Link to={"/about-us"}>
                                {" "}
                                <span>About us</span>{" "}
                              </Link>
                            </li>
                            <li className="level1 first parent">
                              <Link to={"/blog"}>
                                <span>Blog</span>
                              </Link>
                              {/* <!--sub sub category--> */}
                              <ul className="level2 right-sub">
                                <li className="level2 nav-2-1-1 first">
                                  <Link to={"/blog-detail"}>
                                    <span>Blog Detail</span>
                                  </Link>
                                </li>
                              </ul>
                              {/* <!--sub sub category--> */}
                            </li>
                            <li className="level1">
                              <Link to={"/contact-us"}>
                                <span>Contact us</span>
                              </Link>
                            </li>
                            <li className="level1">
                              <Link to={"/404error"}>
                                <span>404 Error Page</span>
                              </Link>{" "}
                            </li>
                            <li className="level1">
                              <Link to={"/login"}>
                                <span>Login Page</span>
                              </Link>
                            </li>
                            <li className="level1">
                              <Link to={"/quickview"}>
                                <span>Quick View</span>
                              </Link>
                            </li>
                            <li className="level1">
                              <Link to={"/newsletter"}>
                                <span>Newsletter</span>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="level0 parent drop-menu">
                          <Link to={" "}>
                            <span>CỬA HÀNG</span>{" "}
                          </Link>
                          {/* <!--sub sub category--> */}
                          <ul className="level1">
                            <li className="level1 first">
                              <Link to={"/grid"}>
                                <span>Product Grid</span>
                              </Link>
                            </li>
                            <li className="level1 nav-10-2">
                              {" "}
                              <Link to={"/list"}>
                                {" "}
                                <span>Product List</span>{" "}
                              </Link>{" "}
                            </li>
                            <li className="level1 nav-10-3">
                              {" "}
                              <Link to={"/product-details"}>
                                <span>Product Detail</span>{" "}
                              </Link>
                            </li>
                            <li className="level1 nav-10-4">
                              {" "}
                              <Link to={"/shopping-cart"}>
                                {" "}
                                <span>Cart Page</span>{" "}
                              </Link>{" "}
                            </li>
                            <li className="level1 first parent">
                              <Link to={"/checkout"}>
                                <span>Checkout</span>
                              </Link>
                            </li>
                            <li className="level1 nav-10-4">
                              {" "}
                              <Link to={"/wishlist"}>
                                <span>Wishlist</span>{" "}
                              </Link>{" "}
                            </li>
                            <li className="level1">
                              {" "}
                              <Link to={"/dashboard"}>
                                {" "}
                                <span>Dashboard</span>
                              </Link>{" "}
                            </li>
                            <li className="level1">
                              {" "}
                              <Link to={"/multiple-addresses"}>
                                {" "}
                                <span>Multiple Addresses</span>{" "}
                              </Link>
                            </li>
                            <li className="level1">
                              {" "}
                              <Link to={"/about-us"}>
                                {" "}
                                <span>About us</span>{" "}
                              </Link>
                            </li>
                            <li className="level1 first parent">
                              <Link to={"/blog"}>
                                <span>Blog</span>
                              </Link>
                              {/* <!--sub sub category--> */}
                              <ul className="level2 right-sub">
                                <li className="level2 nav-2-1-1 first">
                                  <Link to={"/blog-detail"}>
                                    <span>Blog Detail</span>
                                  </Link>
                                </li>
                              </ul>
                              {/* <!--sub sub category--> */}
                            </li>
                            <li className="level1">
                              <Link to={"/contact-us"}>
                                <span>Contact us</span>
                              </Link>
                            </li>
                            <li className="level1">
                              <Link to={"/404error"}>
                                <span>404 Error Page</span>
                              </Link>{" "}
                            </li>
                            <li className="level1">
                              <Link to={"/login"}>
                                <span>Login Page</span>
                              </Link>
                            </li>
                            <li className="level1">
                              <Link to={"/quickview"}>
                                <span>Quick View</span>
                              </Link>
                            </li>
                            <li className="level1">
                              <Link to={"/newsletter"}>
                                <span>Newsletter</span>
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li>
                          {" "}
                          <Link className="level-top" to={"/"}>
                            <span>VỀ CHÚNG TÔI</span>
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link className="level-top" to={"/"}>
                            <span>LIÊN HỆ</span>
                          </Link>
                        </li>
                      </ul>
                      {/* <!--nav--> */}
                    </div>
                  </nav>
                </div>

                {/* <!--row--> */}

                <div className="fl-header-right">
                  <div className="fl-links">
                    <div className="no-js">
                      {" "}
                      {/* <Link to="" title="Company" className="clicker"></Link> */}
                      <div className="fl-nav-links">
                        <div className="language-currency">
                          <div className="fl-language">
                            <ul className="lang">
                              <li>
                                <Link to={" "}>
                                  {" "}
                                  <img
                                    src="/assets/img/english.png"
                                    alt="English"
                                  />
                                  <span>English</span>{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to={" "}>
                                  {" "}
                                  <img
                                    src="/assets/img/francais.png"
                                    alt="French"
                                  />
                                  <span>French</span>{" "}
                                </Link>
                              </li>
                              <li>
                                <Link to={" "}>
                                  {" "}
                                  <img
                                    src="/assets/img/german.png"
                                    alt="German"
                                  />
                                  <span>German</span>{" "}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* <!--fl-language--> */}
                          {/* <!-- END For version 1,2,3,4,6 --> */}
                          {/* <!-- For version 1,2,3,4,6 --> */}
                          <div className="fl-currency">
                            <ul className="currencies_list">
                              <li>
                                <Link to={" "} title="EGP">
                                  {" "}
                                  £
                                </Link>
                              </li>
                              <li>
                                <Link to={" "} title="EUR">
                                  {" "}
                                  €
                                </Link>
                              </li>
                              <li>
                                <Link to={" "} title="USD">
                                  {" "}
                                  $
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* <!--fl-currency--> */}
                          {/* <!-- END For version 1,2,3,4,6 --> */}
                        </div>
                        <ul className="links">
                          <li>
                            <Link to={"/dashboard"} title="My Account">
                              My Account
                            </Link>
                          </li>
                          <li>
                            <Link to={"/wishlist"} title="Wishlist">
                              Wishlist
                            </Link>
                          </li>
                          <li>
                            <Link to={"/checkout"} title="Checkout">
                              Checkout
                            </Link>
                          </li>
                          <li>
                            <Link to={"/blog"} title="Blog">
                              <span>Blog</span>
                            </Link>
                          </li>
                          <li className="last">
                            <Link to={"/login"} title="Login">
                              <span>Login</span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="fl-cart-contain">
                    <div className="mini-cart">
                      <div className="basket">
                        {" "}
                        <Link to={"/shopping-cart"}>
                          <span> 2 </span>
                        </Link>{" "}
                      </div>
                      <div className="fl-mini-cart-content">
                        <div className="block-subtitle">
                          <div className="top-subtotal">
                            2 items, <span className="price">$259.99</span>{" "}
                          </div>
                          {/* <!--top-subtotal--> */}
                          {/* <!--pull-right--> */}
                        </div>
                        {/* <!--block-subtitle--> */}
                        <ul className="mini-products-list" id="cart-sidebar">
                          <li className="item first">
                            <div className="item-inner">
                              <Link
                                className="product-image"
                                title="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White"
                                to="#l"
                              >
                                <img
                                  alt="timi &amp; leslie Sophia Diaper Bag, Lemon Yellow/Shadow White"
                                  src="/assets/img/p4.jpg"
                                />
                              </Link>
                              <div className="product-details">
                                <div className="access">
                                  <Link
                                    className="btn-remove1"
                                    title="Remove This Item"
                                    to={" "}
                                  >
                                    Remove
                                  </Link>{" "}
                                  <Link
                                    className="btn-edit"
                                    title="Edit item"
                                    to={" "}
                                  >
                                    <i className="icon-pencil"></i>
                                    <span className="hidden">Edit item</span>
                                  </Link>{" "}
                                </div>
                                {/* <!--access--> */}
                                <strong>1</strong> x{" "}
                                <span className="price">$179.99</span>
                                <p className="product-name">
                                  <Link to={"/product-details"}>
                                    Fresh Organic Mustard Leaves
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </li>
                          <li className="item last">
                            <div className="item-inner">
                              <Link
                                className="product-image"
                                title="JP Lizzy Satchel Designer Diaper Bag - Slate Citron"
                                to={" "}
                              >
                                <img
                                  alt="JP Lizzy Satchel Designer Diaper Bag - Slate Citron"
                                  src="/assets/img/p3.jpg"
                                />
                              </Link>
                              <div className="product-details">
                                <div className="access">
                                  <Link
                                    className="btn-remove1"
                                    title="Remove This Item"
                                    to={" "}
                                  >
                                    Remove
                                  </Link>{" "}
                                  <Link
                                    className="btn-edit"
                                    title="Edit item"
                                    to={" "}
                                  >
                                    <i className="icon-pencil"></i>
                                    <span className="hidden">Edit item</span>
                                  </Link>{" "}
                                </div>
                                {/* <!--access--> */}
                                <strong>1</strong> x{" "}
                                <span className="price">$80.00</span>
                                <p className="product-name">
                                  <Link to={"/product-details"}>
                                    Fresh Organic Mustard Leaves
                                  </Link>
                                </p>
                              </div>
                            </div>
                          </li>
                        </ul>
                        <div className="actions">
                          <Link
                            to={"/checkout"}
                            className="btn-checkout"
                            title="Checkout"
                            type="button"
                          >
                            <span>Checkout</span>
                          </Link>
                        </div>
                        {/* <!--actions--> */}
                      </div>
                      {/* <!--fl-mini-cart-content--> */}
                    </div>
                  </div>
                  {/* <!--mini-cart--> */}
                  <div className="collapse navbar-collapse">
                    <form className="navbar-form" role="search">
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Search"
                        />
                        <span className="input-group-btn">
                          <button type="submit" className="search-btn">
                            {" "}
                            <span className="glyphicon glyphicon-search">
                              {" "}
                              <span className="sr-only">Search</span>{" "}
                            </span>{" "}
                          </button>
                        </span>{" "}
                      </div>
                    </form>
                  </div>
                  {/* <!--links--> */}
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    );
  }
}
export default Header;
