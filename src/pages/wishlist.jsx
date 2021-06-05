import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";

class Wishlist extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="page-title">
                  <h2>My Wishlist</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- BEGIN Main Container col2-right --> */}
        <section className="main-container col2-right-layout">
          <div className="main container">
            <div className="row">
              <section className="col-main col-sm-9 col-xs-12 wow bounceInUp animated animated">
                <div className="my-account">
                  <div className="my-wishlist">
                    <form id="wishlist-view-form" action="" method="post">
                      <fieldset>
                        <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr" />
                        <div className="table-responsive">
                          <table
                            className="clean-table linearize-table data-table table-striped"
                            id="wishlist-table"
                          >
                            <thead>
                              <tr className="first last">
                                <th className="customer-wishlist-item-image"></th>
                                <th className="customer-wishlist-item-info"></th>
                                <th className="customer-wishlist-item-quantity">Quantity</th>
                                <th className="customer-wishlist-item-price">Price</th>
                                <th className="customer-wishlist-item-cart"></th>
                                <th className="customer-wishlist-item-remove"></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr id="item_32" className="first odd">
                                <td className="wishlist-cell0 customer-wishlist-item-image">
                                  <Link
                                    className="product-image"
                                    to={"/product-details"}
                                    title="Slim Fit Casual Shirt"
                                  >
                                    {" "}
                                    <img
                                      src="/assets/img/p9.jpg"
                                      width="80"
                                      height="80"
                                      alt="Slim Fit Casual Shirt"
                                    />{" "}
                                  </Link>
                                </td>
                                <td className="wishlist-cell1 customer-wishlist-item-info">
                                  <h3 className="product-name">
                                    <Link to={"/product-details"} title="Slim Fit Casual Shirt">
                                      Fresh Organic Mustard Leaves
                                    </Link>
                                  </h3>
                                  <div className="description std">
                                    <div className="inner">
                                      Full sleeve with buttoned cuffs, brand embroidery at the left
                                      side of the chest. Blue colour self design casual shirt, made
                                      with 100% cotton, slim fit, mandarin collar with a full
                                      buttoned chest placket, single chest patch pocket, full sleeve
                                      with buttoned cuffs, brand embroidery at the left side of the
                                      chest.
                                    </div>
                                  </div>
                                  <textarea
                                    style={{ height: "120px", width: "96%" }}
                                    name="description[32]"
                                    rows="3"
                                    cols="5"
                                    onFocus="focusComment(this)"
                                    onBlur="focusComment(this)"
                                    title="Comment"
                                  ></textarea>
                                </td>
                                <td
                                  className="wishlist-cell2 customer-wishlist-item-quantity"
                                  data-rwd-label="Quantity"
                                >
                                  <div className="cart-cell">
                                    <div className="add-to-cart-alt">
                                      <input
                                        type="text"
                                        pattern="\d*"
                                        className="input-text qty validate-not-negative-number"
                                        name="qty[32]"
                                        value="1"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="wishlist-cell3 customer-wishlist-item-price"
                                  data-rwd-label="Price"
                                >
                                  <div className="cart-cell">
                                    <div className="price-box">
                                      {" "}
                                      <span className="regular-price" id="product-price-2">
                                        {" "}
                                        <span className="price">$55.00</span>{" "}
                                      </span>{" "}
                                    </div>
                                  </div>
                                </td>
                                <td className="wishlist-cell4 customer-wishlist-item-cart">
                                  <div className="cart-cell">
                                    <button
                                      type="button"
                                      title="Add to Cart"
                                      onClick="addWItemToCart(32);"
                                      className="button btn-cart"
                                    >
                                      <span>
                                        <span>Add to Cart</span>
                                      </span>
                                    </button>
                                  </div>
                                  <div className="edit-wishlist">
                                    {" "}
                                    <Link href="#" title="Edit item" className="btn-edit">
                                      <i className="icon-pencil"></i>
                                      <span className="hidden">Edit</span>
                                    </Link>{" "}
                                  </div>
                                </td>
                                <td className="wishlist-cell5 customer-wishlist-item-remove last">
                                  <Link
                                    href="#"
                                    onClick="return confirmRemoveWishlistItem();"
                                    title="Clear Cart"
                                    className="remove-item"
                                  >
                                    <span>
                                      <span></span>
                                    </span>
                                  </Link>
                                </td>
                              </tr>
                              <tr id="item_34" className="even">
                                <td className="wishlist-cell0 customer-wishlist-item-image">
                                  <Link
                                    className="product-image"
                                    to={"/product-details"}
                                    title="Vivante Gorgeous Cotton"
                                  >
                                    {" "}
                                    <img
                                      src="/assets/img/p4.jpg"
                                      width="80"
                                      height="80"
                                      alt="Vivante Gorgeous Cotton"
                                    />{" "}
                                  </Link>
                                </td>
                                <td className="wishlist-cell1 customer-wishlist-item-info">
                                  <h3 className="product-name">
                                    <Link to={"/product-details"} title="Vivante Gorgeous Cotton">
                                      Fresh Organic Mustard Leaves
                                    </Link>
                                  </h3>
                                  <div className="description std">
                                    <div className="inner">
                                      Here are six crochet patterns for boutique beauty on a budget.
                                      These lovely looks are created by uber-hip designer Afya
                                      Ibomu, famed for her roster of hip-hop star customers and
                                      fans.
                                    </div>
                                  </div>
                                  <textarea
                                    style={{ height: "120px", width: "96%" }}
                                    name="description[34]"
                                    rows="3"
                                    cols="5"
                                    onFocus="focusComment(this)"
                                    onBlur="focusComment(this)"
                                    title="Comment"
                                  ></textarea>
                                </td>
                                <td
                                  className="wishlist-cell2 customer-wishlist-item-quantity"
                                  data-rwd-label="Quantity"
                                >
                                  <div className="cart-cell">
                                    <div className="add-to-cart-alt">
                                      <input
                                        type="text"
                                        pattern="\d*"
                                        className="input-text qty validate-not-negative-number"
                                        name="qty[34]"
                                        value="1"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="wishlist-cell3 customer-wishlist-item-price"
                                  data-rwd-label="Price"
                                >
                                  <div className="cart-cell">
                                    <div className="price-box">
                                      {" "}
                                      <span className="regular-price" id="product-price-24">
                                        {" "}
                                        <span className="price">$99.00</span>{" "}
                                      </span>{" "}
                                    </div>
                                  </div>
                                </td>
                                <td className="wishlist-cell4 customer-wishlist-item-cart">
                                  <div className="cart-cell">
                                    <button
                                      type="button"
                                      title="Add to Cart"
                                      onClick="addWItemToCart(34);"
                                      className="button btn-cart"
                                    >
                                      <span>
                                        <span>Add to Cart</span>
                                      </span>
                                    </button>
                                  </div>
                                  <div className="edit-wishlist">
                                    {" "}
                                    <Link href="#" title="Edit item" className="btn-edit">
                                      <i className="icon-pencil"></i>
                                      <span className="hidden">Edit</span>
                                    </Link>{" "}
                                  </div>
                                </td>
                                <td className="wishlist-cell5 customer-wishlist-item-remove last">
                                  <Link
                                    href="#"
                                    onClick="return confirmRemoveWishlistItem();"
                                    title="Clear Cart"
                                    className="remove-item"
                                  >
                                    <span>
                                      <span></span>
                                    </span>
                                  </Link>
                                </td>
                              </tr>
                              <tr id="item_65" className="odd">
                                <td className="wishlist-cell0 customer-wishlist-item-image">
                                  <Link
                                    className="product-image"
                                    to={"/product-details"}
                                    title="Kalia Bumblebee Black"
                                  >
                                    {" "}
                                    <img
                                      src="/assets/img/p3.jpg"
                                      width="80"
                                      height="80"
                                      alt="Kalia Bumblebee Black"
                                    />{" "}
                                  </Link>
                                </td>
                                <td className="wishlist-cell1 customer-wishlist-item-info">
                                  <h3 className="product-name">
                                    <Link to={"/product-details"} title="Kalia Bumblebee Black">
                                      Fresh Organic Mustard Leaves
                                    </Link>
                                  </h3>
                                  <div className="description std">
                                    <div className="inner">
                                      Transformers inspired and Camaro Infused. This Tshirt just
                                      rocks for those huge Autobots and Decepticons Fans.
                                    </div>
                                  </div>
                                  <textarea
                                    style={{ height: "120px", width: "96%" }}
                                    name="description[65]"
                                    rows="3"
                                    cols="5"
                                    onFocus="focusComment(this)"
                                    onBlur="focusComment(this)"
                                    title="Comment"
                                  ></textarea>
                                </td>
                                <td
                                  className="wishlist-cell2 customer-wishlist-item-quantity"
                                  data-rwd-label="Quantity"
                                >
                                  <div className="cart-cell">
                                    <div className="add-to-cart-alt">
                                      <input
                                        type="text"
                                        pattern="\d*"
                                        className="input-text qty validate-not-negative-number"
                                        name="qty[65]"
                                        value="2"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="wishlist-cell3 customer-wishlist-item-price"
                                  data-rwd-label="Price"
                                >
                                  <div className="cart-cell">
                                    <div className="price-box">
                                      {" "}
                                      <span className="regular-price" id="product-price-30">
                                        {" "}
                                        <span className="price">$99.00</span>{" "}
                                      </span>{" "}
                                    </div>
                                  </div>
                                </td>
                                <td className="wishlist-cell4 customer-wishlist-item-cart">
                                  <div className="cart-cell">
                                    <button
                                      type="button"
                                      title="Add to Cart"
                                      onClick="addWItemToCart(65);"
                                      className="button btn-cart"
                                    >
                                      <span>
                                        <span>Add to Cart</span>
                                      </span>
                                    </button>
                                  </div>
                                  <div className="edit-wishlist">
                                    {" "}
                                    <Link href="#" title="Edit item" className="btn-edit">
                                      <i className="icon-pencil"></i>
                                      <span className="hidden">Edit</span>
                                    </Link>{" "}
                                  </div>
                                </td>
                                <td className="wishlist-cell5 customer-wishlist-item-remove last">
                                  <Link
                                    href="#"
                                    onClick="return confirmRemoveWishlistItem();"
                                    title="Clear Cart"
                                    className="remove-item"
                                  >
                                    <span>
                                      <span></span>
                                    </span>
                                  </Link>
                                </td>
                              </tr>
                              <tr id="item_66" className="even">
                                <td className="wishlist-cell0 customer-wishlist-item-image">
                                  <Link
                                    className="product-image"
                                    to={"/product-details"}
                                    title="Micromax X101i"
                                  >
                                    {" "}
                                    <img
                                      src="/assets/img/p8.jpg"
                                      width="80"
                                      height="80"
                                      alt="Micromax X101i"
                                    />{" "}
                                  </Link>
                                </td>
                                <td className="wishlist-cell1 customer-wishlist-item-info">
                                  <h3 className="product-name">
                                    <Link to={"/product-details"} title="Micromax X101i">
                                      Fresh Organic Mustard Leaves
                                    </Link>
                                  </h3>
                                  <div className="description std">
                                    <div className="inner">
                                      Memory expandable up to 4GB and active dual SIM (GSM + GSM),
                                      1000mAH battery providing talk-time of 4 hours and standby
                                      time of 200 hours on 2G network, 1 year manufacturer warranty
                                      for device and 6 months manufacturer warranty for in-box
                                      accessories including batteries from the date of purchase.
                                    </div>
                                  </div>
                                  <textarea
                                    style={{ height: "120px", width: "96%" }}
                                    name="description[66]"
                                    rows="3"
                                    cols="5"
                                    onFocus="focusComment(this)"
                                    onBlur="focusComment(this)"
                                    title="Comment"
                                  ></textarea>
                                </td>
                                <td
                                  className="wishlist-cell2 customer-wishlist-item-quantity"
                                  data-rwd-label="Quantity"
                                >
                                  <div className="cart-cell">
                                    <div className="add-to-cart-alt">
                                      <input
                                        type="text"
                                        pattern="\d*"
                                        className="input-text qty validate-not-negative-number"
                                        name="qty[66]"
                                        value="1"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="wishlist-cell3 customer-wishlist-item-price"
                                  data-rwd-label="Price"
                                >
                                  <div className="cart-cell">
                                    <div className="price-box">
                                      {" "}
                                      <span className="regular-price" id="product-price-15">
                                        {" "}
                                        <span className="price">$79.00</span>{" "}
                                      </span>{" "}
                                    </div>
                                  </div>
                                </td>
                                <td className="wishlist-cell4 customer-wishlist-item-cart">
                                  <div className="cart-cell">
                                    <button
                                      type="button"
                                      title="Add to Cart"
                                      onClick="addWItemToCart(66);"
                                      className="button btn-cart"
                                    >
                                      <span>
                                        <span>Add to Cart</span>
                                      </span>
                                    </button>
                                  </div>
                                  <div className="edit-wishlist">
                                    {" "}
                                    <Link href="#" title="Edit item" className="btn-edit">
                                      <i className="icon-pencil"></i>
                                      <span className="hidden">Edit</span>
                                    </Link>{" "}
                                  </div>
                                </td>
                                <td className="wishlist-cell5 customer-wishlist-item-remove last">
                                  <Link
                                    href="#"
                                    onClick="return confirmRemoveWishlistItem();"
                                    title="Clear Cart"
                                    className="remove-item"
                                  >
                                    <span>
                                      <span></span>
                                    </span>
                                  </Link>
                                </td>
                              </tr>
                              <tr id="item_69" className="odd">
                                <td className="wishlist-cell0 customer-wishlist-item-image">
                                  <Link
                                    className="product-image"
                                    to={"/product-details"}
                                    title="Softwear Women&#39;s Designer"
                                  >
                                    {" "}
                                    <img
                                      src="/assets/img/p5.jpg"
                                      width="80"
                                      height="80"
                                      alt="Softwear Women&#39;s Designer"
                                    />{" "}
                                  </Link>
                                </td>
                                <td className="wishlist-cell1 customer-wishlist-item-info">
                                  <h3 className="product-name">
                                    <Link
                                      to={"/product-details"}
                                      title="Softwear Women&#39;s Designer"
                                    >
                                      Fresh Organic Mustard Leaves
                                    </Link>
                                  </h3>
                                  <div className="description std">
                                    <div className="inner">
                                      Casual wear, Normal Machine Wash. A Black Multi-Coloured
                                      Printed Leggings for Women from Softwear. Made from Cotton and
                                      Lycra, this Leggings features Full Length, Designer printed ,
                                      Casual wear, Normal Machine Wash.
                                    </div>
                                  </div>
                                  <textarea
                                    style={{ height: "120px", width: "96%" }}
                                    name="description[69]"
                                    rows="3"
                                    cols="5"
                                    onFocus="focusComment(this)"
                                    onBlur="focusComment(this)"
                                    title="Comment"
                                  ></textarea>
                                </td>
                                <td
                                  className="wishlist-cell2 customer-wishlist-item-quantity"
                                  data-rwd-label="Quantity"
                                >
                                  <div className="cart-cell">
                                    <div className="add-to-cart-alt">
                                      <input
                                        type="text"
                                        pattern="\d*"
                                        className="input-text qty validate-not-negative-number"
                                        name="qty[69]"
                                        value="1"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="wishlist-cell3 customer-wishlist-item-price"
                                  data-rwd-label="Price"
                                >
                                  <div className="cart-cell">
                                    <div className="price-box">
                                      {" "}
                                      <span className="regular-price" id="product-price-39">
                                        {" "}
                                        <span className="price">$99.00</span>{" "}
                                      </span>{" "}
                                    </div>
                                  </div>
                                </td>
                                <td className="wishlist-cell4 customer-wishlist-item-cart">
                                  <div className="cart-cell">
                                    <button
                                      type="button"
                                      title="Add to Cart"
                                      onClick="addWItemToCart(69);"
                                      className="button btn-cart"
                                    >
                                      <span>
                                        <span>Add to Cart</span>
                                      </span>
                                    </button>
                                  </div>
                                  <div className="edit-wishlist">
                                    {" "}
                                    <Link href="#" title="Edit item" className="btn-edit">
                                      <i className="icon-pencil"></i>
                                      <span className="hidden">Edit</span>
                                    </Link>{" "}
                                  </div>
                                </td>
                                <td className="wishlist-cell5 customer-wishlist-item-remove last">
                                  <Link href="#" className="remove-item">
                                    <span>
                                      <span></span>
                                    </span>
                                  </Link>
                                </td>
                              </tr>
                              <tr id="item_88" className="even">
                                <td className="wishlist-cell0 customer-wishlist-item-image">
                                  <Link
                                    className="product-image"
                                    to={"/product-details"}
                                    title="Softwear Women&#39;s Designer"
                                  >
                                    {" "}
                                    <img
                                      src="/assets/img/p3.jpg"
                                      width="80"
                                      height="80"
                                      alt="Softwear Women&#39;s Designer"
                                    />{" "}
                                  </Link>
                                </td>
                                <td className="wishlist-cell1 customer-wishlist-item-info">
                                  <h3 className="product-name">
                                    <Link
                                      to={"/product-details"}
                                      title="Softwear Women&#39;s Designer"
                                    >
                                      Fresh Organic Mustard Leaves
                                    </Link>
                                  </h3>
                                  <div className="description std">
                                    <div className="inner">
                                      Made from Cotton and Lycra, this Leggings features Full
                                      Length, Designer printed , Casual wear, Normal Machine Wash.
                                    </div>
                                  </div>
                                  <textarea
                                    style={{ height: "120px", width: "96%" }}
                                    name="description[88]"
                                    rows="3"
                                    cols="5"
                                    onFocus="focusComment(this)"
                                    onBlur="focusComment(this)"
                                    title="Comment"
                                  ></textarea>
                                </td>
                                <td
                                  className="wishlist-cell2 customer-wishlist-item-quantity"
                                  data-rwd-label="Quantity"
                                >
                                  <div className="cart-cell">
                                    <div className="add-to-cart-alt">
                                      <input
                                        type="text"
                                        pattern="\d*"
                                        className="input-text qty validate-not-negative-number"
                                        name="qty[88]"
                                        value="1"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="wishlist-cell3 customer-wishlist-item-price"
                                  data-rwd-label="Price"
                                >
                                  <div className="cart-cell">
                                    <div className="price-box">
                                      {" "}
                                      <span className="regular-price" id="product-price-109">
                                        {" "}
                                        <span className="price">$99.00</span>{" "}
                                      </span>{" "}
                                    </div>
                                  </div>
                                </td>
                                <td className="wishlist-cell4 customer-wishlist-item-cart">
                                  <div className="cart-cell">
                                    <button
                                      type="button"
                                      title="Add to Cart"
                                      onClick="addWItemToCart(88);"
                                      className="button btn-cart"
                                    >
                                      <span>
                                        <span>Add to Cart</span>
                                      </span>
                                    </button>
                                  </div>
                                  <div className="edit-wishlist">
                                    {" "}
                                    <Link href="#" title="Edit item" className="btn-edit">
                                      <i className="icon-pencil"></i>
                                      <span className="hidden">Edit</span>
                                    </Link>{" "}
                                  </div>
                                </td>
                                <td className="wishlist-cell5 customer-wishlist-item-remove last">
                                  <Link
                                    href="#"
                                    onClick="return confirmRemoveWishlistItem();"
                                    title="Clear Cart"
                                    className="remove-item"
                                  >
                                    <span>
                                      <span></span>
                                    </span>
                                  </Link>
                                </td>
                              </tr>
                              <tr id="item_89" className="last odd">
                                <td className="wishlist-cell0 customer-wishlist-item-image">
                                  <Link
                                    className="product-image"
                                    to={"/product-details"}
                                    title="Slim Fit Casual Shirt"
                                  >
                                    {" "}
                                    <img
                                      src="/assets/img/p2.jpg"
                                      width="80"
                                      height="80"
                                      alt="Slim Fit Casual Shirt"
                                    />{" "}
                                  </Link>
                                </td>
                                <td className="wishlist-cell1 customer-wishlist-item-info">
                                  <h3 className="product-name">
                                    <Link to={"/product-details"} title="Slim Fit Casual Shirt">
                                      Fresh Organic Mustard Leaves
                                    </Link>
                                  </h3>
                                  <div className="description std">
                                    <div className="inner">
                                      Blue colour self design casual shirt, made with 100% cotton,
                                      slim fit, mandarin collar with a full buttoned chest placket,
                                      single chest patch pocket, full sleeve with buttoned cuffs,
                                      brand embroidery at the left side of the chest.
                                    </div>
                                  </div>
                                  <textarea
                                    style={{ height: "120px", width: "96%" }}
                                    name="description[89]"
                                    rows="3"
                                    cols="5"
                                    onFocus="focusComment(this)"
                                    onBlur="focusComment(this)"
                                    title="Comment"
                                  ></textarea>
                                </td>
                                <td
                                  className="wishlist-cell2 customer-wishlist-item-quantity"
                                  data-rwd-label="Quantity"
                                >
                                  <div className="cart-cell">
                                    <div className="add-to-cart-alt">
                                      <input
                                        type="text"
                                        pattern="\d*"
                                        className="input-text qty validate-not-negative-number"
                                        name="qty[89]"
                                        value="1"
                                      />
                                    </div>
                                  </div>
                                </td>
                                <td
                                  className="wishlist-cell3 customer-wishlist-item-price"
                                  data-rwd-label="Price"
                                >
                                  <div className="cart-cell">
                                    <div className="price-box">
                                      {" "}
                                      <span className="regular-price" id="product-price-108">
                                        {" "}
                                        <span className="price">$55.00</span>{" "}
                                      </span>{" "}
                                    </div>
                                  </div>
                                </td>
                                <td className="wishlist-cell4 customer-wishlist-item-cart">
                                  <div className="cart-cell">
                                    <button
                                      type="button"
                                      title="Add to Cart"
                                      onClick="addWItemToCart(89);"
                                      className="button btn-cart"
                                    >
                                      <span>
                                        <span>Add to Cart</span>
                                      </span>
                                    </button>
                                  </div>
                                  <div className="edit-wishlist">
                                    {" "}
                                    <Link href="#" title="Edit item" className="btn-edit">
                                      <i className="icon-pencil"></i>
                                      <span className="hidden">Edit</span>
                                    </Link>{" "}
                                  </div>
                                </td>
                                <td className="wishlist-cell5 customer-wishlist-item-remove last">
                                  <Link
                                    href="#"
                                    onClick="return confirmRemoveWishlistItem();"
                                    title="Clear Cart"
                                    className="remove-item"
                                  >
                                    <span>
                                      <span></span>
                                    </span>
                                  </Link>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>

                        <div className="buttons-set buttons-set2">
                          <button
                            type="submit"
                            name="save_and_share"
                            title="Share Wishlist"
                            className="button btn-share"
                          >
                            <span>Share Wishlist</span>
                          </button>
                          <button
                            type="button"
                            title="Add All to Cart"
                            onClick="addAllWItemsToCart()"
                            className="button btn-add"
                          >
                            <span>Add All to Cart</span>
                          </button>
                          <button
                            type="submit"
                            name="do"
                            title="Update Wishlist"
                            className="button btn-update"
                          >
                            <span>Update Wishlist</span>
                          </button>
                        </div>
                      </fieldset>
                    </form>
                    <form id="wishlist-allcart-form" action="" method="post">
                      <input name="form_key" type="hidden" value="EPYwQxF6xoWcjLUr" />
                      <div className="no-display">
                        <input type="hidden" name="wishlist_id" id="wishlist_id" value="1" />
                        <input type="hidden" name="qty" id="qty" value="" />
                      </div>
                    </form>
                  </div>
                </div>
              </section>

              {/* <!--col-main col-sm-9 wow bounceInUp animated--> */}
              <aside
                className="col-right sidebar col-sm-3 col-xs-12 wow bounceInUp animated animated"
                style={{ visibility: "visible" }}
              >
                <div className="block block-account">
                  <div className="block-title"> My Account </div>
                  <div className="block-content">
                    <ul>
                      <li>
                        <Link href="#">
                          <span> Account Dashboard</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span> Account Information</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span> Address Book</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span> My Orders</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span> Billing Agreements</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span> Recurring Profiles</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span> My Product Reviews</span>
                        </Link>
                      </li>
                      <li className="current">
                        <Link>My Wishlist</Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span> My Applications</span>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span> Newsletter Subscriptions</span>
                        </Link>
                      </li>
                      <li className="last">
                        <Link href="#">
                          <span> My Downloadable Products</span>
                        </Link>
                      </li>
                    </ul>
                  </div>

                  {/* <!--block-content--> */}
                </div>

                {/* <!--block block-account--> */}

                <div className="custom-slider">
                  <div>
                    <div
                      id="carousel-example-generic"
                      className="carousel slide"
                      data-ride="carousel"
                    >
                      <ol className="carousel-indicators">
                        <li
                          className="active"
                          data-target="#carousel-example-generic"
                          data-slide-to="0"
                        ></li>
                        <li
                          data-target="#carousel-example-generic"
                          data-slide-to="1"
                          className=""
                        ></li>
                        <li
                          data-target="#carousel-example-generic"
                          data-slide-to="2"
                          className=""
                        ></li>
                      </ol>
                      <div className="carousel-inner">
                        <div className="item active">
                          <img src="/assets/img/slide2.jpg" alt="slide3" />
                          <div className="carousel-caption">
                            <h4>Fruit Shop</h4>
                            <h3>
                              <Link title=" Sample Product" to={"/product-details"}>
                                Up to 70% Off
                              </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link className="link" href="#">
                              Buy Now
                            </Link>
                          </div>
                        </div>
                        <div className="item">
                          <img src="/assets/img/slide3.jpg" alt="slide1" />
                          <div className="carousel-caption">
                            <h4>Black Grapes</h4>
                            <h3>
                              <Link title=" Sample Product" to={"/product-details"}>
                                Mega Sale
                              </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link className="link" href="#">
                              Buy Now
                            </Link>
                          </div>
                        </div>
                        <div className="item">
                          <img src="/assets/img/slide1.jpg" alt="slide2" />
                          <div className="carousel-caption">
                            <h4>Food Farm</h4>
                            <h3>
                              <Link title=" Sample Product" to={"/product-details"}>
                                Up to 50% Off
                              </Link>
                            </h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link className="link" href="#">
                              Buy Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <Link
                        className="left carousel-control"
                        href="#carousel-example-generic"
                        data-slide="prev"
                      >
                        <span className="sr-only">Previous</span>{" "}
                      </Link>{" "}
                      <Link
                        className="right carousel-control"
                        href="#carousel-example-generic"
                        data-slide="next"
                      >
                        {" "}
                        <span className="sr-only">Next</span>{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </aside>

              {/* <!--col-right sidebar col-sm-3 wow bounceInUp animated--> */}
            </div>

            {/* <!--row--> */}
          </div>

          {/* <!--main container--> */}
        </section>

        {/* <!--main-container col2-left-layout--> */}

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
export default Wishlist;
