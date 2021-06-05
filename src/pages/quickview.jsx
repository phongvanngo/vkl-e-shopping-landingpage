import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Header from "../layout/header";
import Footer from "../layout/footer";

class QuickView extends Component {
  componentDidMount() {
    window.sliderr();
    window.commonjs();
    window.zoomimg();
  }

  render() {
    return (
      <>
        <Header />

        <div className="content">
          <div id="thm-mart-slideshow" className="thm-mart-slideshow">
            <div className="container">
              <div
                id="thm_slider_wrapper"
                className="thm_slider_wrapper fullwidthbanner-container"
              >
                <div
                  id="thm-rev-slider"
                  className="rev_slider fullwidthabanner"
                >
                  <ul>
                    <li
                      data-transition="random"
                      data-slotamount="7"
                      data-masterspeed="1000"
                      data-thumb="/assets/img/slide-img1.jpg"
                    >
                      <img
                        src="/assets/img/slide-img2.jpg"
                        data-bgposition="left top"
                        data-bgfit="cover"
                        data-bgrepeat="no-repeat"
                        alt="slider-image1"
                      />
                      <div className="info">
                        <div
                          className="tp-caption ExtraLargeTitle sft  tp-resizeme "
                          data-x="0"
                          data-y="220"
                          data-endspeed="500"
                          data-speed="500"
                          data-start="1100"
                          data-easing="Linear.easeNone"
                          data-splitin="none"
                          data-splitout="none"
                          data-elementdelay="0.1"
                          data-endelementdelay="0.1"
                          style={{
                            zIndex: "2",
                            maxWidth: "auto",
                            maxHeight: "auto",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <span>Fresh Food</span>
                        </div>
                        <div
                          className="tp-caption LargeTitle sfl  tp-resizeme "
                          data-x="0"
                          data-y="300"
                          data-endspeed="500"
                          data-speed="500"
                          data-start="1300"
                          data-easing="Linear.easeNone"
                          data-splitin="none"
                          data-splitout="none"
                          data-elementdelay="0.1"
                          data-endelementdelay="0.1"
                          style={{
                            zIndex: "3",
                            maxWidth: "auto",
                            maxHeight: "auto",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Simply <span>delicious</span>
                        </div>
                        <div
                          className="tp-caption sfb  tp-resizeme "
                          data-x="0"
                          data-y="520"
                          data-endspeed="500"
                          data-speed="500"
                          data-start="1500"
                          data-easing="Linear.easeNone"
                          data-splitin="none"
                          data-splitout="none"
                          data-elementdelay="0.1"
                          data-endelementdelay="0.1"
                          style={{
                            zIndex: "4",
                            maxWidth: "auto",
                            maxHeight: "auto",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <a href="#" className="buy-btn">
                            Shop Now
                          </a>
                        </div>
                        <div
                          className="tp-caption Title sft  tp-resizeme "
                          data-x="0"
                          data-y="420"
                          data-endspeed="500"
                          data-speed="500"
                          data-start="1500"
                          data-easing="Power2.easeInOut"
                          data-splitin="none"
                          data-splitout="none"
                          data-elementdelay="0.1"
                          data-endelementdelay="0.1"
                          style={{
                            zIndex: "4",
                            maxWidth: "auto",
                            maxHeight: "auto",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Little things make a big difference
                        </div>
                      </div>
                    </li>
                    <li
                      data-transition="random"
                      data-slotamount="7"
                      data-masterspeed="1000"
                      data-thumb="/assets/img/slide-img3.jpg"
                    >
                      <img
                        src="/assets/img/slide-img3.jpg"
                        data-bgposition="left top"
                        data-bgfit="cover"
                        data-bgrepeat="no-repeat"
                        alt="slider-image2"
                      />
                      <div className="info">
                        <div
                          className="tp-caption ExtraLargeTitle sft  tp-resizeme "
                          data-x="0"
                          data-y="220"
                          data-endspeed="500"
                          data-speed="500"
                          data-start="1100"
                          data-easing="Linear.easeNone"
                          data-splitin="none"
                          data-splitout="none"
                          data-elementdelay="0.1"
                          data-endelementdelay="0.1"
                          style={{
                            zIndex: "2",
                            maxWidth: "auto",
                            maxHeight: "auto",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <span>Fresh Look</span>
                        </div>
                        <div
                          className="tp-caption LargeTitle sfl  tp-resizeme "
                          data-x="0"
                          data-y="300"
                          data-endspeed="500"
                          data-speed="500"
                          data-start="1300"
                          data-easing="Linear.easeNone"
                          data-splitin="none"
                          data-splitout="none"
                          data-elementdelay="0.1"
                          data-endelementdelay="0.1"
                          style={{
                            zIndex: "3",
                            maxWidth: "auto",
                            maxHeight: "auto",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <span>100%</span> Organic
                        </div>
                        <div
                          className="tp-caption sfb  tp-resizeme "
                          data-x="0"
                          data-y="520"
                          data-endspeed="500"
                          data-speed="500"
                          data-start="1500"
                          data-easing="Linear.easeNone"
                          data-splitin="none"
                          data-splitout="none"
                          data-elementdelay="0.1"
                          data-endelementdelay="0.1"
                          style={{
                            zIndex: "4",
                            maxWidth: "auto",
                            maxHeight: "auto",
                            whiteSpace: "nowrap",
                          }}
                        >
                          <a href="#" className="buy-btn">
                            Shop Now
                          </a>
                        </div>
                        <div
                          className="tp-caption Title sft  tp-resizeme "
                          data-x="0"
                          data-y="420"
                          data-endspeed="500"
                          data-speed="500"
                          data-start="1500"
                          data-easing="Power2.easeInOut"
                          data-splitin="none"
                          data-splitout="none"
                          data-elementdelay="0.1"
                          data-endelementdelay="0.1"
                          style={{
                            zIndex: "4",
                            maxWidth: "auto",
                            maxHeight: "auto",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Farm Fresh Produce Right to Your Door
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Category slider Start--> */}
          <div className="top-cate">
            <div className="featured-pro container">
              <div className="row">
                <div className="slider-items-products">
                  <div
                    id="top-categories"
                    className="product-flexslider hidden-buttons"
                  >
                    <div className="slider-items slider-width-col4 products-grid">
                      <div className="item">
                        {" "}
                        <a href="#">
                          <div className="pro-img">
                            <img
                              src="/assets/img/p1.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                            <div className="pro-info">Fruits</div>
                          </div>
                        </a>{" "}
                      </div>

                      {/* <!-- Item --> */}
                      <div className="item">
                        {" "}
                        <a href="#">
                          <div className="pro-img">
                            <img
                              src="/assets/img/p2.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                            <div className="pro-info">Salads</div>
                          </div>
                        </a>{" "}
                      </div>

                      {/* <!-- End Item -->  */}

                      {/* <!-- Item --> */}
                      <div className="item">
                        {" "}
                        <a href="#">
                          <div className="pro-img">
                            <img
                              src="/assets/img/p3.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                            <div className="pro-info">Vegetables</div>
                          </div>
                        </a>{" "}
                      </div>

                      {/* <!-- End Item --> */}
                      <div className="item">
                        {" "}
                        <a href="#">
                          <div className="pro-img">
                            <img
                              src="/assets/img/p5.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                            <div className="pro-info">Juices</div>
                          </div>
                        </a>{" "}
                      </div>

                      {/* <!-- Item --> */}
                      <div className="item">
                        {" "}
                        <a href="#">
                          <div className="pro-img">
                            <img
                              src="/assets/img/p12.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                            <div className="pro-info">Meats</div>
                          </div>
                        </a>{" "}
                      </div>

                      {/* <!-- End Item -->  */}

                      {/* <!-- Item --> */}
                      <div className="item">
                        {" "}
                        <a href="#">
                          <div className="pro-img">
                            <img
                              src="/assets/img/p27.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                            <div className="pro-info">Lettuce</div>
                          </div>
                        </a>{" "}
                      </div>

                      {/* <!-- End Item -->  */}

                      {/* <!-- Item --> */}
                      <div className="item">
                        {" "}
                        <a href="#">
                          <div className="pro-img">
                            <img
                              src="/assets/img/p8.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                            <div className="pro-info">Citrus‎</div>
                          </div>
                        </a>{" "}
                      </div>

                      {/* <!-- End Item -->  */}

                      {/* <!-- Item --> */}
                      <div className="item">
                        {" "}
                        <a href="#">
                          <div className="pro-img">
                            <img
                              src="/assets/img/p11.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                            <div className="pro-info">Berries</div>
                          </div>
                        </a>{" "}
                      </div>

                      {/* <!-- End Item -->  */}

                      {/* <!-- Item --> */}
                      <div className="item">
                        {" "}
                        <a href="#">
                          <div className="pro-img">
                            <img
                              src="/assets/img/p9.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                            <div className="pro-info">Beans</div>
                          </div>
                        </a>{" "}
                      </div>

                      {/* <!-- End Item -->  */}

                      {/* <!-- Item --> */}
                      <div className="item">
                        {" "}
                        <a href="#">
                          <div className="pro-img">
                            <img
                              src="/assets/img/p6.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                            <div className="pro-info">Pomegranates</div>
                          </div>
                        </a>{" "}
                      </div>

                      {/* <!-- End Item -->  */}

                      {/* <!-- Item --> */}
                      <div className="item">
                        {" "}
                        <a href="#">
                          <div className="pro-img">
                            <img
                              src="/assets/img/p7.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                            <div className="pro-info">Leafy Veg</div>
                          </div>
                        </a>{" "}
                      </div>

                      {/* <!-- End Item -->  */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!--Category silder End--> */}

          <div id="top">
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  {" "}
                  <a href="#" data-scroll-goto="1">
                    {" "}
                    <img
                      src="/assets/img/banner-img1.jpg"
                      alt="promotion-banner1"
                    />{" "}
                  </a>{" "}
                </div>
                <div className="col-lg-6">
                  {" "}
                  <a href="#" data-scroll-goto="2">
                    {" "}
                    <img
                      src="/assets/img/banner-img2.jpg"
                      alt="promotion-banner2"
                    />{" "}
                  </a>{" "}
                </div>
              </div>
            </div>
          </div>

          {/* <!-- best Pro Slider --> */}
          <section className=" wow bounceInUp animated">
            <div className="best-pro slider-items-products container">
              <div className="new_title">
                <h2>Best Seller</h2>
                <h4>So you get to know me better</h4>
              </div>
              <div
                id="best-seller"
                className="product-flexslider hidden-buttons"
              >
                <div className="slider-items slider-width-col4 products-grid">
                  <div className="item">
                    <div className="item-inner">
                      <div className="item-img">
                        <div className="item-img-info">
                          <a
                            href="product-detail.html"
                            title="Fresh Organic Mustard Leaves "
                            className="product-image"
                          >
                            <img
                              src="/assets/img/p27.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                          </a>
                          <div className="new-label new-top-left">Hot</div>
                          <div className="sale-label sale-top-left">-15%</div>
                          <div className="item-box-hover">
                            <div className="box-inner">
                              <div className="product-detail-bnt">
                                <a className="button detail-bnt">
                                  <span>Quick View</span>
                                </a>
                              </div>
                              <div className="actions">
                                <span className="add-to-links">
                                  <a
                                    href="#"
                                    className="link-wishlist"
                                    title="Add to Wishlist"
                                  >
                                    <span>Add to Wishlist</span>
                                  </a>{" "}
                                  <a
                                    href="#"
                                    className="link-compare add_to_compare"
                                    title="Add to Compare"
                                  >
                                    <span>Add to Compare</span>
                                  </a>
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="add_cart">
                          <button className="button btn-cart" type="button">
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="info-inner">
                          <div className="item-title">
                            <a
                              href="product-detail.html"
                              title="Fresh Organic Mustard Leaves "
                            >
                              Fresh Organic Mustard Leaves{" "}
                            </a>{" "}
                          </div>
                          <div className="item-content">
                            <div className="rating">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div
                                    className="rating"
                                    style={{ width: "80%" }}
                                  ></div>
                                </div>
                                <p className="rating-links">
                                  <a href="#">1 Review(s)</a>{" "}
                                  <span className="separator">|</span>{" "}
                                  <a href="#">Add Review</a>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="item-price">
                              <div className="price-box">
                                <span className="regular-price">
                                  <span className="price">$125.00</span>{" "}
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Item --> */}
                  <div className="item">
                    <div className="item-inner">
                      <div className="item-img">
                        <div className="item-img-info">
                          <a
                            href="product-detail.html"
                            title="Fresh Organic Mustard Leaves "
                            className="product-image"
                          >
                            <img
                              src="/assets/img/p17.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                          </a>
                          <div className="item-box-hover">
                            <div className="box-inner">
                              <div className="product-detail-bnt">
                                <a className="button detail-bnt">
                                  <span>Quick View</span>
                                </a>
                              </div>
                              <div className="actions">
                                <span className="add-to-links">
                                  <a
                                    href="#"
                                    className="link-wishlist"
                                    title="Add to Wishlist"
                                  >
                                    <span>Add to Wishlist</span>
                                  </a>{" "}
                                  <a
                                    href="#"
                                    className="link-compare add_to_compare"
                                    title="Add to Compare"
                                  >
                                    <span>Add to Compare</span>
                                  </a>
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="add_cart">
                          <button className="button btn-cart" type="button">
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="info-inner">
                          <div className="item-title">
                            <a
                              href="product-detail.html"
                              title="Fresh Organic Mustard Leaves "
                            >
                              Fresh Organic Mustard Leaves{" "}
                            </a>{" "}
                          </div>
                          <div className="item-content">
                            <div className="rating">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div
                                    className="rating"
                                    style={{ width: "80%" }}
                                  ></div>
                                </div>
                                <p className="rating-links">
                                  <a href="#">1 Review(s)</a>{" "}
                                  <span className="separator">|</span>{" "}
                                  <a href="#">Add Review</a>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="item-price">
                              <div className="price-box">
                                <span className="regular-price">
                                  <span className="price">$125.00</span>{" "}
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- End Item -->  */}

                  {/* <!-- Item --> */}
                  <div className="item">
                    <div className="item-inner">
                      <div className="item-img">
                        <div className="item-img-info">
                          <a
                            href="product-detail.html"
                            title="Fresh Organic Mustard Leaves "
                            className="product-image"
                          >
                            <img
                              src="/assets/img/p7.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                          </a>
                          <div className="item-box-hover">
                            <div className="box-inner">
                              <div className="product-detail-bnt">
                                <a className="button detail-bnt">
                                  <span>Quick View</span>
                                </a>
                              </div>
                              <div className="actions">
                                <span className="add-to-links">
                                  <a
                                    href="#"
                                    className="link-wishlist"
                                    title="Add to Wishlist"
                                  >
                                    <span>Add to Wishlist</span>
                                  </a>{" "}
                                  <a
                                    href="#"
                                    className="link-compare add_to_compare"
                                    title="Add to Compare"
                                  >
                                    <span>Add to Compare</span>
                                  </a>
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="add_cart">
                          <button className="button btn-cart" type="button">
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="info-inner">
                          <div className="item-title">
                            <a
                              href="product-detail.html"
                              title="Fresh Organic Mustard Leaves "
                            >
                              Fresh Organic Mustard Leaves{" "}
                            </a>{" "}
                          </div>
                          <div className="item-content">
                            <div className="rating">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div
                                    className="rating"
                                    style={{ width: "80%" }}
                                  ></div>
                                </div>
                                <p className="rating-links">
                                  <a href="#">1 Review(s)</a>{" "}
                                  <span className="separator">|</span>{" "}
                                  <a href="#">Add Review</a>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="item-price">
                              <div className="price-box">
                                <span className="regular-price">
                                  <span className="price">$125.00</span>{" "}
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- End Item --> */}

                  <div className="item">
                    <div className="item-inner">
                      <div className="item-img">
                        <div className="item-img-info">
                          <a
                            href="product-detail.html"
                            title="Fresh Organic Mustard Leaves "
                            className="product-image"
                          >
                            <img
                              src="/assets/img/p26.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                          </a>
                          <div className="sale-label sale-top-left">Sale</div>
                          <div className="item-box-hover">
                            <div className="box-inner">
                              <div className="product-detail-bnt">
                                <a className="button detail-bnt">
                                  <span>Quick View</span>
                                </a>
                              </div>
                              <div className="actions">
                                <span className="add-to-links">
                                  <a
                                    href="#"
                                    className="link-wishlist"
                                    title="Add to Wishlist"
                                  >
                                    <span>Add to Wishlist</span>
                                  </a>{" "}
                                  <a
                                    href="#"
                                    className="link-compare add_to_compare"
                                    title="Add to Compare"
                                  >
                                    <span>Add to Compare</span>
                                  </a>
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="add_cart">
                          <button className="button btn-cart" type="button">
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="info-inner">
                          <div className="item-title">
                            <a
                              href="product-detail.html"
                              title="Fresh Organic Mustard Leaves "
                            >
                              Fresh Organic Mustard Leaves{" "}
                            </a>{" "}
                          </div>
                          <div className="item-content">
                            <div className="rating">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div
                                    className="rating"
                                    style={{ width: "80%" }}
                                  ></div>
                                </div>
                                <p className="rating-links">
                                  <a href="#">1 Review(s)</a>{" "}
                                  <span className="separator">|</span>{" "}
                                  <a href="#">Add Review</a>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="item-price">
                              <div className="price-box">
                                <span className="regular-price">
                                  <span className="price">$125.00</span>{" "}
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Item --> */}
                  <div className="item">
                    <div className="item-inner">
                      <div className="item-img">
                        <div className="item-img-info">
                          <a
                            href="product-detail.html"
                            title="Fresh Organic Mustard Leaves "
                            className="product-image"
                          >
                            <img
                              src="/assets/img/p5.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                          </a>
                          <div className="new-label new-top-left">New</div>
                          <div className="item-box-hover">
                            <div className="box-inner">
                              <div className="product-detail-bnt">
                                <a className="button detail-bnt">
                                  <span>Quick View</span>
                                </a>
                              </div>
                              <div className="actions">
                                <span className="add-to-links">
                                  <a
                                    href="#"
                                    className="link-wishlist"
                                    title="Add to Wishlist"
                                  >
                                    <span>Add to Wishlist</span>
                                  </a>{" "}
                                  <a
                                    href="#"
                                    className="link-compare add_to_compare"
                                    title="Add to Compare"
                                  >
                                    <span>Add to Compare</span>
                                  </a>
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="add_cart">
                          <button className="button btn-cart" type="button">
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="info-inner">
                          <div className="item-title">
                            <a
                              href="product-detail.html"
                              title="Fresh Organic Mustard Leaves "
                            >
                              Fresh Organic Mustard Leaves{" "}
                            </a>{" "}
                          </div>
                          <div className="item-content">
                            <div className="rating">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div
                                    className="rating"
                                    style={{ width: "80%" }}
                                  ></div>
                                </div>
                                <p className="rating-links">
                                  <a href="#">1 Review(s)</a>{" "}
                                  <span className="separator">|</span>{" "}
                                  <a href="#">Add Review</a>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="item-price">
                              <div className="price-box">
                                <span className="regular-price">
                                  <span className="price">$125.00</span>{" "}
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- End Item -->  */}

                  {/* <!-- Item --> */}
                  <div className="item">
                    <div className="item-inner">
                      <div className="item-img">
                        <div className="item-img-info">
                          <a
                            href="product-detail.html"
                            title="Fresh Organic Mustard Leaves "
                            className="product-image"
                          >
                            <img
                              src="/assets/img/p6.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                          </a>
                          <div className="new-label new-top-left">New</div>
                          <div className="item-box-hover">
                            <div className="box-inner">
                              <div className="product-detail-bnt">
                                <a className="button detail-bnt">
                                  <span>Quick View</span>
                                </a>
                              </div>
                              <div className="actions">
                                <span className="add-to-links">
                                  <a
                                    href="#"
                                    className="link-wishlist"
                                    title="Add to Wishlist"
                                  >
                                    <span>Add to Wishlist</span>
                                  </a>{" "}
                                  <a
                                    href="#"
                                    className="link-compare add_to_compare"
                                    title="Add to Compare"
                                  >
                                    <span>Add to Compare</span>
                                  </a>
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="add_cart">
                          <button className="button btn-cart" type="button">
                            <span>Add to Cart</span>
                          </button>
                        </div>
                      </div>
                      <div className="item-info">
                        <div className="info-inner">
                          <div className="item-title">
                            <a
                              href="product-detail.html"
                              title="Fresh Organic Mustard Leaves "
                            >
                              Fresh Organic Mustard Leaves{" "}
                            </a>{" "}
                          </div>
                          <div className="item-content">
                            <div className="rating">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div
                                    className="rating"
                                    style={{ width: "80%" }}
                                  ></div>
                                </div>
                                <p className="rating-links">
                                  <a href="#">1 Review(s)</a>{" "}
                                  <span className="separator">|</span>{" "}
                                  <a href="#">Add Review</a>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="item-price">
                              <div className="price-box">
                                <span className="regular-price">
                                  <span className="price">$125.00</span>{" "}
                                </span>{" "}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <!-- End Item -->  */}
                </div>
              </div>
            </div>
          </section>
          <div className="hot-section">
            <div className="container">
              <div className="row">
                <div className="ad-info">
                  <h2>Hurry Up!</h2>
                  <h3>Deal of the week</h3>
                  <h4>From our family farm right to your doorstep.</h4>
                </div>
              </div>
              <div className="row">
                <div className="hot-deal">
                  <div className="box-timer">
                    <div className="countbox_1 timer-grid"></div>
                  </div>
                  <ul className="products-grid">
                    <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                      <div className="item-inner">
                        <div className="item-img">
                          <div className="item-img-info">
                            <a
                              href="product-detail.html"
                              title="Fresh Organic Mustard Leaves "
                              className="product-image"
                            >
                              <img
                                src="/assets/img/p16.jpg"
                                alt="Fresh Organic Mustard Leaves "
                              />
                            </a>
                            <div className="new-label new-top-left">Hot</div>
                            <div className="item-box-hover">
                              <div className="box-inner">
                                <div className="product-detail-bnt">
                                  <a
                                    className="button detail-bnt"
                                    type="button"
                                  >
                                    <span>Quick View</span>
                                  </a>
                                </div>
                                <div className="actions">
                                  <span className="add-to-links">
                                    <a
                                      href="#"
                                      className="link-wishlist"
                                      title="Add to Wishlist"
                                    >
                                      <span>Add to Wishlist</span>
                                    </a>{" "}
                                    <a
                                      href="#"
                                      className="link-compare add_to_compare"
                                      title="Add to Compare"
                                    >
                                      <span>Add to Compare</span>
                                    </a>
                                  </span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="add_cart">
                            <button className="button btn-cart" type="button">
                              <span>Add to Cart</span>
                            </button>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title">
                              <a
                                href="product-detail.html"
                                title="Fresh Organic Mustard Leaves "
                              >
                                Fresh Organic Mustard Leaves{" "}
                              </a>{" "}
                            </div>
                            <div className="item-content">
                              <div className="rating">
                                <div className="ratings">
                                  <div className="rating-box">
                                    <div
                                      className="rating"
                                      style={{ width: "80%" }}
                                    ></div>
                                  </div>
                                  <p className="rating-links">
                                    <a href="#">1 Review(s)</a>{" "}
                                    <span className="separator">|</span>{" "}
                                    <a href="#">Add Review</a>{" "}
                                  </p>
                                </div>
                              </div>
                              <div className="item-price">
                                <div className="price-box">
                                  <span
                                    className="regular-price"
                                    id="product-price-1"
                                  >
                                    <span className="price">$125.00</span>{" "}
                                  </span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                      <div className="item-inner">
                        <div className="item-img">
                          <div className="item-img-info">
                            <a
                              href="product-detail.html"
                              title="Fresh Organic Mustard Leaves "
                              className="product-image"
                            >
                              <img
                                src="/assets/img/p12.jpg"
                                alt="Fresh Organic Mustard Leaves "
                              />
                            </a>
                            <div className="item-box-hover">
                              <div className="box-inner">
                                <div className="product-detail-bnt">
                                  <a
                                    className="button detail-bnt"
                                    type="button"
                                  >
                                    <span>Quick View</span>
                                  </a>
                                </div>
                                <div className="actions">
                                  <span className="add-to-links">
                                    <a
                                      href="#"
                                      className="link-wishlist"
                                      title="Add to Wishlist"
                                    >
                                      <span>Add to Wishlist</span>
                                    </a>{" "}
                                    <a
                                      href="#"
                                      className="link-compare add_to_compare"
                                      title="Add to Compare"
                                    >
                                      <span>Add to Compare</span>
                                    </a>
                                  </span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="add_cart">
                            <button className="button btn-cart" type="button">
                              <span>Add to Cart</span>
                            </button>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title">
                              <a
                                href="product-detail.html"
                                title="Fresh Organic Mustard Leaves "
                              >
                                Fresh Organic Mustard Leaves{" "}
                              </a>{" "}
                            </div>
                            <div className="item-content">
                              <div className="rating">
                                <div className="ratings">
                                  <div className="rating-box">
                                    <div
                                      className="rating"
                                      style={{ width: "80%" }}
                                    ></div>
                                  </div>
                                  <p className="rating-links">
                                    <a href="#">1 Review(s)</a>{" "}
                                    <span className="separator">|</span>{" "}
                                    <a href="#">Add Review</a>{" "}
                                  </p>
                                </div>
                              </div>
                              <div className="item-price">
                                <div className="price-box">
                                  <span
                                    className="regular-price"
                                    id="product-price-1"
                                  >
                                    <span className="price">$125.00</span>{" "}
                                  </span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                      <div className="item-inner">
                        <div className="item-img">
                          <div className="item-img-info">
                            <a
                              href="product-detail.html"
                              title="Fresh Organic Mustard Leaves "
                              className="product-image"
                            >
                              <img
                                src="/assets/img/p21.jpg"
                                alt="Fresh Organic Mustard Leaves "
                              />
                            </a>
                            <div className="item-box-hover">
                              <div className="box-inner">
                                <div className="product-detail-bnt">
                                  <a
                                    className="button detail-bnt"
                                    type="button"
                                  >
                                    <span>Quick View</span>
                                  </a>
                                </div>
                                <div className="actions">
                                  <span className="add-to-links">
                                    <a
                                      href="#"
                                      className="link-wishlist"
                                      title="Add to Wishlist"
                                    >
                                      <span>Add to Wishlist</span>
                                    </a>{" "}
                                    <a
                                      href="#"
                                      className="link-compare add_to_compare"
                                      title="Add to Compare"
                                    >
                                      <span>Add to Compare</span>
                                    </a>
                                  </span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="add_cart">
                            <button className="button btn-cart" type="button">
                              <span>Add to Cart</span>
                            </button>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title">
                              <a
                                href="product-detail.html"
                                title="Fresh Organic Mustard Leaves "
                              >
                                Fresh Organic Mustard Leaves{" "}
                              </a>{" "}
                            </div>
                            <div className="item-content">
                              <div className="rating">
                                <div className="ratings">
                                  <div className="rating-box">
                                    <div
                                      className="rating"
                                      style={{ width: "80%" }}
                                    ></div>
                                  </div>
                                  <p className="rating-links">
                                    <a href="#">1 Review(s)</a>{" "}
                                    <span className="separator">|</span>{" "}
                                    <a href="#">Add Review</a>{" "}
                                  </p>
                                </div>
                              </div>
                              <div className="item-price">
                                <div className="price-box">
                                  <span
                                    className="regular-price"
                                    id="product-price-1"
                                  >
                                    <span className="price">$125.00</span>{" "}
                                  </span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="item col-lg-3 col-md-3 col-sm-3 col-xs-6">
                      <div className="item-inner">
                        <div className="item-img">
                          <div className="item-img-info">
                            <a
                              href="product-detail.html"
                              title="Fresh Organic Mustard Leaves "
                              className="product-image"
                            >
                              <img
                                src="/assets/img/p3.jpg"
                                alt="Fresh Organic Mustard Leaves "
                              />
                            </a>
                            <div className="sale-label sale-top-right">
                              -40%
                            </div>
                            <div className="item-box-hover">
                              <div className="box-inner">
                                <div className="product-detail-bnt">
                                  <a
                                    className="button detail-bnt"
                                    type="button"
                                  >
                                    <span>Quick View</span>
                                  </a>
                                </div>
                                <div className="actions">
                                  <span className="add-to-links">
                                    <a
                                      href="#"
                                      className="link-wishlist"
                                      title="Add to Wishlist"
                                    >
                                      <span>Add to Wishlist</span>
                                    </a>{" "}
                                    <a
                                      href="#"
                                      className="link-compare add_to_compare"
                                      title="Add to Compare"
                                    >
                                      <span>Add to Compare</span>
                                    </a>
                                  </span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="add_cart">
                            <button className="button btn-cart" type="button">
                              <span>Add to Cart</span>
                            </button>
                          </div>
                        </div>
                        <div className="item-info">
                          <div className="info-inner">
                            <div className="item-title">
                              <a
                                href="product-detail.html"
                                title="Fresh Organic Mustard Leaves "
                              >
                                Fresh Organic Mustard Leaves{" "}
                              </a>{" "}
                            </div>
                            <div className="item-content">
                              <div className="rating">
                                <div className="ratings">
                                  <div className="rating-box">
                                    <div
                                      className="rating"
                                      style={{ width: "80%" }}
                                    ></div>
                                  </div>
                                  <p className="rating-links">
                                    <a href="#">1 Review(s)</a>{" "}
                                    <span className="separator">|</span>{" "}
                                    <a href="#">Add Review</a>{" "}
                                  </p>
                                </div>
                              </div>
                              <div className="item-price">
                                <div className="price-box">
                                  <span
                                    className="regular-price"
                                    id="product-price-1"
                                  >
                                    <span className="price">$125.00</span>{" "}
                                  </span>{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="testimonials-section slider-items-products">
                  <div
                    id="testimonials"
                    className="offer-slider parallax parallax-2"
                  >
                    <div className="slider-items slider-width-col6">
                      <div className="item">
                        <div className="avatar">
                          <img src="/assets/img/member1.png" alt="Image" />
                        </div>
                        <div className="testimonials">
                          Perfect Themes and the best of all that you have many
                          options to choose! Very fast responding! I highly
                          recommend this theme and these people!
                        </div>
                        <div className="clients_author">
                          {" "}
                          Smith John <span>Happy Customer</span>{" "}
                        </div>
                      </div>
                      <div className="item">
                        <div className="avatar">
                          <img src="/assets/img/member2.png" alt="Image" />
                        </div>
                        <div className="testimonials">
                          Code, template and others are very good. The support
                          has served me immediately and solved my problems when
                          I need help. Are to be congratulated.
                        </div>
                        <div className="clients_author">
                          {" "}
                          Karla Anderson <span>Happy Customer</span>{" "}
                        </div>
                      </div>
                      <div className="item">
                        <div className="avatar">
                          <img src="/assets/img/member3.png" alt="Image" />
                        </div>
                        <div className="testimonials">
                          Our support and response has been amazing, helping me
                          with several issues I came across and got them solved
                          almost the same day. A pleasure to work with them!
                        </div>
                        <div className="clients_author">
                          {" "}
                          Stephen Smith <span>Happy Customer</span>{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="logo-brand">
                  <div className="slider-items-products">
                    <div
                      id="brand-slider"
                      className="product-flexslider hidden-buttons"
                    >
                      <div className="slider-items slider-width-col6">
                        {/* <!-- Item --> */}
                        <div className="item">
                          <div className="logo-item">
                            <a href="#">
                              <img src="/assets/img/brand1.png" alt="Image" />
                            </a>
                          </div>
                        </div>
                        <div className="item">
                          <div className="logo-item">
                            <a href="#">
                              <img src="/assets/img/brand2.png" alt="Image" />
                            </a>
                          </div>
                        </div>

                        {/* <!-- End Item -->  */}

                        {/* <!-- Item --> */}
                        <div className="item">
                          <div className="logo-item">
                            <a href="#">
                              <img src="/assets/img/brand3.png" alt="Image" />
                            </a>
                          </div>
                        </div>
                        <div className="item">
                          <div className="logo-item">
                            <a href="#">
                              <img src="/assets/img/brand4.png" alt="Image" />
                            </a>
                          </div>
                        </div>

                        {/* <!-- End Item -->  */}

                        {/* <!-- Item --> */}
                        <div className="item">
                          <div className="logo-item">
                            <a href="#">
                              <img src="/assets/img/brand5.png" alt="Image" />
                            </a>
                          </div>
                        </div>
                        <div className="item">
                          <div className="logo-item">
                            <a href="#">
                              <img src="/assets/img/brand6.png" alt="Image" />
                            </a>
                          </div>
                        </div>

                        {/* <!-- End Item -->  */}

                        {/* <!-- Item --> */}
                        <div className="item">
                          <div className="logo-item">
                            <a href="#">
                              <img src="/assets/img/brand1.png" alt="Image" />
                            </a>
                          </div>
                        </div>
                        <div className="item">
                          <div className="logo-item">
                            <a href="#">
                              <img src="/assets/img/brand2.png" alt="Image" />
                            </a>
                          </div>
                        </div>

                        {/* <!-- End Item -->  */}

                        {/* <!-- Item --> */}
                        <div className="item">
                          <div className="logo-item">
                            <a href="#">
                              <img src="/assets/img/brand3.png" alt="Image" />
                            </a>
                          </div>
                        </div>
                        <div className="item">
                          <div className="logo-item">
                            <a href="#">
                              <img src="/assets/img/brand4.png" alt="Image" />
                            </a>
                          </div>
                        </div>

                        {/* <!-- End Item -->  */}

                        {/* <!-- Item --> */}
                        <div className="item">
                          <div className="logo-item">
                            <a href="#">
                              <img src="/assets/img/brand5.png" alt="Image" />
                            </a>
                          </div>
                        </div>
                        <div className="item">
                          <div className="logo-item">
                            <a href="#">
                              <img src="/assets/img/brand6.png" alt="Image" />
                            </a>
                          </div>
                        </div>

                        {/* <!-- End Item -->  */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Home Lastest Blog Block --> */}
          <div className="latest-blog wow bounceInUp animated animated container">
            {/* <!--exclude For version 6 -->  */}

            {/* <!--For version 1,2,3,4,5,6,8 --> */}
            <div>
              <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6 blog-post">
                <div className="blog_inner">
                  <div className="blog-img">
                    {" "}
                    <a href="blog-detail.html">
                      {" "}
                      <img
                        src="/assets/img/blog-img1.jpg"
                        alt="blog image"
                      />{" "}
                    </a>
                    <div className="mask">
                      {" "}
                      <a className="info" href="blog-detail.html">
                        Read More
                      </a>{" "}
                    </div>
                  </div>

                  {/* <!--blog-img--> */}
                  <div className="blog-info">
                    <div className="post-date">
                      <time
                        className="entry-date"
                        dateTime="2015-05-11T11:07:27+00:00"
                      >
                        26 <span>June</span>
                      </time>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <i className="fa fa-user"></i>Posted by{" "}
                        <a href="#">admin</a>{" "}
                      </li>
                      <li>
                        <i className="fa fa-comments"></i>
                        <a href="#">4 comments</a>{" "}
                      </li>
                    </ul>
                    <h3>
                      <a href="blog-detail.html">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </a>
                    </h3>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada ...
                    </p>
                  </div>
                </div>

                {/* <!--blog_inner-->  */}
              </div>

              {/* <!--col-lg-4 col-md-4 col-xs-12 col-sm-4--> */}
              <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6 blog-post">
                <div className="blog_inner">
                  <div className="blog-img">
                    {" "}
                    <a href="blog-detail.html">
                      {" "}
                      <img
                        src="/assets/img/blog-img2.jpg"
                        alt="blog image"
                      />{" "}
                    </a>
                    <div className="mask">
                      {" "}
                      <a className="info" href="blog-detail.html">
                        Read More
                      </a>{" "}
                    </div>
                  </div>

                  {/* <!--blog-img--> */}
                  <div className="blog-info">
                    <div className="post-date">
                      <time
                        className="entry-date"
                        dateTime="2015-05-11T11:07:27+00:00"
                      >
                        30 <span>June</span>
                      </time>
                    </div>
                    <ul className="post-meta">
                      <li>
                        <i className="fa fa-user"></i>Posted by{" "}
                        <a href="#">admin</a>{" "}
                      </li>
                      <li>
                        <i className="fa fa-comments"></i>
                        <a href="#">6 comments</a>{" "}
                      </li>
                    </ul>
                    <h3>
                      <a href="blog-detail.html">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                      </a>
                    </h3>
                    <p>
                      Pellentesque habitant morbi tristique senectus et netus et
                      malesuada ...
                    </p>
                  </div>
                </div>

                {/* <!--blog_inner-->  */}
              </div>
            </div>

            {/* <!--END For version 1,2,3,4,5,6,8 -->  */}

            {/* <!--exclude For version 6 -->  */}

            {/* <!--container-->  */}
          </div>

          {/* <!-- Logo Brand Block -->  */}
        </div>
        <div className="mid-section">
          <div className="container">
            <div className="row">
              <h3>Fresh organic foods delivery made easy</h3>
              <h2>Special Product</h2>
            </div>
            <div className="row">
              <div className="col-lg-4">
                <div className="block1">
                  {" "}
                  <strong>fresh from our farm</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy habitant morbi.
                  </p>
                </div>
                <div className="block2">
                  {" "}
                  <strong>100% organic Foods</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy habitant morbi.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="spl-pro">
                  <a
                    href="product-detail.html"
                    title="Fresh Organic Mustard Leaves "
                  >
                    <img
                      src="/assets/img/p12.jpg"
                      alt="Fresh Organic Mustard Leaves "
                    />
                  </a>
                  <div className="item-info">
                    <div className="info-inner">
                      <div className="item-title">
                        <a
                          href="product-detail.html"
                          title="Fresh Organic Mustard Leaves "
                        >
                          Fresh Organic Mustard Leaves{" "}
                        </a>{" "}
                      </div>
                      <div className="item-content">
                        <div className="rating">
                          <div className="ratings">
                            <div className="rating-box">
                              <div
                                className="rating"
                                style={{ width: "80%" }}
                              ></div>
                            </div>
                            <p className="rating-links">
                              <a href="#">1 Review(s)</a>{" "}
                              <span className="separator">|</span>{" "}
                              <a href="#">Add Review</a>{" "}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="block3">
                  {" "}
                  <strong>Good for health</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy habitant morbi.
                  </p>
                </div>
                <div className="block4">
                  {" "}
                  <strong>Safe From Pesticides</strong>
                  <p>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy habitant morbi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
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
                  <a href="#">
                    <i className="fa fa-apple"></i> download
                  </a>{" "}
                  <a href="#">
                    <i className="fa fa-android"></i> download
                  </a>{" "}
                </div>
              </li>
            </ul>
          </div>
        </div>

        <Footer />

        <div className="popup1" style={{ display: "block" }}>
          <div className="quick-view-box">
            <img src="/assets/img/close-icon.png" alt="close" className="x" />

            <div className="product-view product-essential container">
              <div className="row">
                <form action="" method="post" id="product_addtocart_form">
                  <div className="product-img-box col-lg-5 col-sm-5 col-xs-12">
                    <div className="new-label new-top-left">Hot</div>
                    <div className="sale-label sale-top-left">-15%</div>
                    <div className="product-image">
                      <div className="product-full">
                        {" "}
                        <img
                          id="product-zoom"
                          src="/assets/img/p14.jpg"
                          data-zoom-image="/assets/img/p14.jpg"
                          alt="product-image"
                        />{" "}
                      </div>
                      <div className="more-views">
                        <div className="slider-items-products">
                          <div
                            id="gallery_01"
                            className="product-flexslider hidden-buttons product-img-thumb"
                          >
                            <div className="slider-items slider-width-col4 block-content">
                              <div className="more-views-items">
                                {" "}
                                <a
                                  href="#"
                                  data-image="/assets/img/p2.jpg"
                                  data-zoom-image="/assets/img/p2.jpg"
                                >
                                  {" "}
                                  <img
                                    id="product-zoom"
                                    src="/assets/img/p2.jpg"
                                    alt="product-image"
                                  />{" "}
                                </a>
                              </div>
                              <div className="more-views-items">
                                {" "}
                                <a
                                  href="#"
                                  data-image="/assets/img/p3.jpg"
                                  data-zoom-image="/assets/img/p3.jpg"
                                >
                                  {" "}
                                  <img
                                    id="product-zoom"
                                    src="/assets/img/p3.jpg"
                                    alt="product-image"
                                  />{" "}
                                </a>
                              </div>
                              <div className="more-views-items">
                                {" "}
                                <a
                                  href="#"
                                  data-image="/assets/img/p4.jpg"
                                  data-zoom-image="/assets/img/p4.jpg"
                                >
                                  {" "}
                                  <img
                                    id="product-zoom"
                                    src="/assets/img/p4.jpg"
                                    alt="product-image"
                                  />{" "}
                                </a>
                              </div>
                              <div className="more-views-items">
                                {" "}
                                <a
                                  href="#"
                                  data-image="/assets/img/p14.jpg"
                                  data-zoom-image="/assets/img/p14.jpg"
                                >
                                  {" "}
                                  <img
                                    id="product-zoom"
                                    src="/assets/img/p14.jpg"
                                    alt="product-image"
                                  />{" "}
                                </a>{" "}
                              </div>
                              <div className="more-views-items">
                                {" "}
                                <a
                                  href="#"
                                  data-image="/assets/img/p6.jpg"
                                  data-zoom-image="/assets/img/p6.jpg"
                                >
                                  {" "}
                                  <img
                                    id="product-zoom"
                                    src="/assets/img/p6.jpg"
                                    alt="product-image"
                                  />{" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="product-shop col-lg- col-sm-7 col-xs-12">
                    <div className="brand">XPERIA</div>
                    <div className="product-name">
                      <h1>Fresh Organic Mustard Leaves </h1>
                    </div>
                    <div className="ratings">
                      <div className="rating-box">
                        <div style={{ width: "60%" }} className="rating"></div>
                      </div>
                      <p className="rating-links">
                        {" "}
                        <a href="#">1 Review</a>{" "}
                        <span className="separator">|</span>{" "}
                        <a href="#">Add Your Review</a>{" "}
                      </p>
                    </div>
                    <div className="price-block">
                      <div className="price-box">
                        <p className="availability in-stock">
                          <span>In Stock</span>
                        </p>
                        <p className="special-price">
                          {" "}
                          <span className="price-label">
                            Special Price
                          </span>{" "}
                          <span id="product-price-48" className="price">
                            {" "}
                            $309.99{" "}
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="add-to-box">
                      <div className="add-to-cart">
                        <div className="pull-left">
                          <div className="custom pull-left">
                            <button
                              onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty ) &amp;&amp; qty > 0 ) result.value--;return false;"
                              className="reduced items-count"
                              type="button"
                            >
                              <i className="fa fa-minus">&nbsp;</i>
                            </button>
                            <input
                              type="text"
                              className="input-text qty"
                              title="Qty"
                              value="1"
                              maxlength="12"
                              id="qty"
                              name="qty"
                            />
                            <button
                              onclick="var result = document.getElementById('qty'); var qty = result.value; if( !isNaN( qty )) result.value++;return false;"
                              className="increase items-count"
                              type="button"
                            >
                              <i className="fa fa-plus">&nbsp;</i>
                            </button>
                          </div>
                        </div>
                        <button
                          onclick="productAddToCartForm.submit(this)"
                          className="button btn-cart"
                          title="Add to Cart"
                          type="button"
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                    <div className="short-description">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam fringilla augue nec est tristique auctor. Donec non
                        est at libero vulputate rutrum. Morbi ornare lectus quis
                        justo gravida semper. Nulla tellus mi, vulputate
                        adipiscing cursus eu, suscipit id nulla. Donec a neque
                        libero.{" "}
                      </p>
                    </div>
                    <div className="email-addto-box">
                      <ul className="add-to-links">
                        <li>
                          {" "}
                          <a className="link-wishlist" href="wishlist.html">
                            <span>Add to Wishlist</span>
                          </a>
                        </li>
                        <li>
                          <span className="separator">|</span>{" "}
                          <a className="link-compare" href="compare.html">
                            <span>Add to Compare</span>
                          </a>
                        </li>
                      </ul>
                      <p className="email-friend">
                        <a href="#" className="">
                          <span>Email to a Friend</span>
                        </a>
                      </p>
                    </div>

                    <ul className="shipping-pro">
                      <li>Free Wordwide Shipping</li>
                      <li>30 Days Return</li>
                      <li>Member Discount</li>
                    </ul>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div id="fade" style={{ display: "block" }}></div>
      </>
    );
  }
}
export default QuickView;
