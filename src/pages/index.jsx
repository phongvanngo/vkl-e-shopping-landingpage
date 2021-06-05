import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";

import BestSeller from "../element/best-seller-carousel";
import BrandCarousel from "../element/brand-slider-carousel";
import TestimonialCarousel from "../element/testimonial-carousel";
import SlideShow from "./component/homepage.slideshow";
import TopCategorySlider from "./component/homepage.topCategorySlider";

export default function Index() {
  useEffect(() => {
    window.sliderr();
    window.commonjs();
  }, []);
  return (
    <>
      <Header />

      <div className="content">
        <SlideShow />
        {/* <!--Category slider Start--> */}
        <TopCategorySlider />
        {/* <!--Category silder End--> */}
        <div id="top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                {" "}
                <Link to={" "} data-scroll-goto="1">
                  {" "}
                  <img
                    src="/assets/img/banner-img1.jpg"
                    alt="promotion-banner1"
                  />{" "}
                </Link>{" "}
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                {" "}
                <Link to={" "} data-scroll-goto="2">
                  {" "}
                  <img
                    src="/assets/img/banner-img2.jpg"
                    alt="promotion-banner2"
                  />{" "}
                </Link>{" "}
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
            <BestSeller />
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
                          <Link
                            to={"product-details"}
                            title="Fresh Organic Mustard Leaves "
                            className="product-image"
                          >
                            <img
                              src="products-/assets/img/p16.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                          </Link>
                          <div className="new-label new-top-left">Hot</div>
                          <div className="item-box-hover">
                            <div className="box-inner">
                              <div className="product-detail-bnt">
                                <Link to={" "} className="button detail-bnt">
                                  <span>Quick View</span>
                                </Link>
                              </div>
                              <div className="actions">
                                <span className="add-to-links">
                                  <Link
                                    to={" "}
                                    className="link-wishlist"
                                    title="Add to Wishlist"
                                  >
                                    <span>Add to Wishlist</span>
                                  </Link>{" "}
                                  <Link
                                    to={" "}
                                    className="link-compare add_to_compare"
                                    title="Add to Compare"
                                  >
                                    <span>Add to Compare</span>
                                  </Link>
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
                            <Link
                              to={"product-details"}
                              title="Fresh Organic Mustard Leaves "
                            >
                              Fresh Organic Mustard Leaves{" "}
                            </Link>{" "}
                          </div>
                          <div className="item-content">
                            <div className="rating">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating"></div>
                                </div>
                                <p className="rating-links">
                                  <Link to={" "}>1 Review(s)</Link>{" "}
                                  <span className="separator">|</span>{" "}
                                  <Link to={" "}>Add Review</Link>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="item-price">
                              <div className="price-box">
                                <span className="regular-price">
                                  <span className="price">$125.00</span>
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
                          <Link
                            to={"product-details"}
                            title="Fresh Organic Mustard Leaves "
                            className="product-image"
                          >
                            <img
                              src="products-/assets/img/p12.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                          </Link>
                          <div className="item-box-hover">
                            <div className="box-inner">
                              <div className="product-detail-bnt">
                                <Link to={" "} className="button detail-bnt">
                                  <span>Quick View</span>
                                </Link>
                              </div>
                              <div className="actions">
                                <span className="add-to-links">
                                  <Link
                                    to={" "}
                                    className="link-wishlist"
                                    title="Add to Wishlist"
                                  >
                                    <span>Add to Wishlist</span>
                                  </Link>{" "}
                                  <Link
                                    to={" "}
                                    className="link-compare add_to_compare"
                                    title="Add to Compare"
                                  >
                                    <span>Add to Compare</span>
                                  </Link>
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
                            <Link
                              to={"product-details"}
                              title="Fresh Organic Mustard Leaves "
                            >
                              Fresh Organic Mustard Leaves{" "}
                            </Link>{" "}
                          </div>
                          <div className="item-content">
                            <div className="rating">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating"></div>
                                </div>
                                <p className="rating-links">
                                  <Link to={" "}>1 Review(s)</Link>{" "}
                                  <span className="separator">|</span>{" "}
                                  <Link to={" "}>Add Review</Link>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="item-price">
                              <div className="price-box">
                                <span className="regular-price">
                                  <span className="price">$125.00</span>
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
                          <Link
                            to={"product-details"}
                            title="Fresh Organic Mustard Leaves "
                            className="product-image"
                          >
                            <img
                              src="products-/assets/img/p21.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                          </Link>
                          <div className="item-box-hover">
                            <div className="box-inner">
                              <div className="product-detail-bnt">
                                <Link to={" "} className="button detail-bnt">
                                  <span>Quick View</span>
                                </Link>
                              </div>
                              <div className="actions">
                                <span className="add-to-links">
                                  <Link
                                    to={" "}
                                    className="link-wishlist"
                                    title="Add to Wishlist"
                                  >
                                    <span>Add to Wishlist</span>
                                  </Link>{" "}
                                  <Link
                                    to={" "}
                                    className="link-compare add_to_compare"
                                    title="Add to Compare"
                                  >
                                    <span>Add to Compare</span>
                                  </Link>
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
                            <Link
                              to={"product-details"}
                              title="Fresh Organic Mustard Leaves "
                            >
                              Fresh Organic Mustard Leaves{" "}
                            </Link>{" "}
                          </div>
                          <div className="item-content">
                            <div className="rating">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating"></div>
                                </div>
                                <p className="rating-links">
                                  <Link to={" "}>1 Review(s)</Link>{" "}
                                  <span className="separator">|</span>{" "}
                                  <Link to={" "}>Add Review</Link>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="item-price">
                              <div className="price-box">
                                <span className="regular-price">
                                  <span className="price">$125.00</span>
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
                          <Link
                            to={"product-details"}
                            title="Fresh Organic Mustard Leaves "
                            className="product-image"
                          >
                            <img
                              src="products-/assets/img/p3.jpg"
                              alt="Fresh Organic Mustard Leaves "
                            />
                          </Link>
                          <div className="sale-label sale-top-right">-40%</div>
                          <div className="item-box-hover">
                            <div className="box-inner">
                              <div className="product-detail-bnt">
                                <Link to={" "} className="button detail-bnt">
                                  <span>Quick View</span>
                                </Link>
                              </div>
                              <div className="actions">
                                <span className="add-to-links">
                                  <Link
                                    to={" "}
                                    className="link-wishlist"
                                    title="Add to Wishlist"
                                  >
                                    <span>Add to Wishlist</span>
                                  </Link>{" "}
                                  <Link
                                    to={" "}
                                    className="link-compare add_to_compare"
                                    title="Add to Compare"
                                  >
                                    <span>Add to Compare</span>
                                  </Link>
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
                            <Link
                              to={"product-details"}
                              title="Fresh Organic Mustard Leaves "
                            >
                              Fresh Organic Mustard Leaves{" "}
                            </Link>{" "}
                          </div>
                          <div className="item-content">
                            <div className="rating">
                              <div className="ratings">
                                <div className="rating-box">
                                  <div className="rating"></div>
                                </div>
                                <p className="rating-links">
                                  <Link to={" "}>1 Review(s)</Link>{" "}
                                  <span className="separator">|</span>{" "}
                                  <Link to={" "}>Add Review</Link>{" "}
                                </p>
                              </div>
                            </div>
                            <div className="item-price">
                              <div className="price-box">
                                <span className="regular-price">
                                  <span className="price">$125.00</span>
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
                <TestimonialCarousel />
              </div>
            </div>
            <div className="row">
              <div className="logo-brand">
                <div className="slider-items-products">
                  <BrandCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Home Lastest Blog Block --> */}
        <div className="latest-blog wow bounceInUp animated animated container">
          {/* <!--exclude For version 6 --> */}

          {/* <!--For version 1,2,3,4,5,6,8 --> */}
          <div>
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6 blog-post">
              <div className="blog_inner">
                <div className="blog-img">
                  {" "}
                  <Link to={"blog-detail"}>
                    {" "}
                    <img
                      src="/assets/img/blog-img1.jpg"
                      alt="blog image"
                    />{" "}
                  </Link>
                  <div className="mask">
                    {" "}
                    <Link className="info" to={"blog-detail"}>
                      Read More
                    </Link>{" "}
                  </div>
                </div>
                {/* <!--blog-img--> */}
                <div className="blog-info">
                  <div className="post-date">
                    <time
                      className="entry-date"
                      dateTime="2015-05-11T11:07:27+00:00"
                    >
                      26
                      <span>June</span>
                    </time>
                  </div>
                  <ul className="post-meta">
                    <li>
                      <i className="fa fa-user"></i>Posted by{" "}
                      <Link to={" "}>admin</Link>{" "}
                    </li>
                    <li>
                      <i className="fa fa-comments"></i>
                      <Link to={" "}>4 comments</Link>{" "}
                    </li>
                  </ul>
                  <h3>
                    <Link to={"blog-detail"}>
                      Powerful and flexible premium Ecommerce themes
                    </Link>
                  </h3>
                  <p>
                    Fusce ac pharetra urna. Duis non lacus sit amet lacus
                    interdum facilisis sed non est. Ut mi metus, semper eu
                    dictum nec...
                  </p>
                </div>
              </div>
              {/* <!--blog_inner--> */}
            </div>
            {/* <!--col-lg-4 col-md-4 col-xs-12 col-sm-4--> */}
            <div className="col-lg-6 col-md-6 col-xs-12 col-sm-6 blog-post">
              <div className="blog_inner">
                <div className="blog-img">
                  {" "}
                  <Link to={"blog-detail"}>
                    {" "}
                    <img
                      src="/assets/img/blog-img2.jpg"
                      alt="blog image"
                    />{" "}
                  </Link>
                  <div className="mask">
                    {" "}
                    <Link className="info" to={"blog-detail"}>
                      Read More
                    </Link>{" "}
                  </div>
                </div>
                {/* <!--blog-img--> */}
                <div className="blog-info">
                  <div className="post-date">
                    <time
                      className="entry-date"
                      dateTime="2015-05-11T11:07:27+00:00"
                    >
                      30
                      <span>June</span>
                    </time>
                  </div>
                  <ul className="post-meta">
                    <li>
                      <i className="fa fa-user"></i>Posted by{" "}
                      <Link to={" "}>admin</Link>{" "}
                    </li>
                    <li>
                      <i className="fa fa-comments"></i>
                      <Link to={" "}>6 comments</Link>{" "}
                    </li>
                  </ul>
                  <h3>
                    <Link to={"blog-detail"}>
                      Awesome template with lot's of features on the board!
                    </Link>
                  </h3>
                  <p>
                    Aliquam laoreet consequat malesuada. Integer vitae diam sed
                    dolor euismod laoreet eget ac felis erat sed elit bibendum
                    ...
                  </p>
                </div>
              </div>
              {/* <!--blog_inner--> */}
            </div>
          </div>
          {/* <!--END For version 1,2,3,4,5,6,8 --> */}
          {/* <!--exclude For version 6 --> */}
          {/* <!--container--> */}
        </div>

        {/* <!-- Logo Brand Block --> */}
      </div>
      <div className="mid-section">
        <div className="container">
          <div className="row">
            <h3>Fresh organic foods delivery made easy</h3>
            <h2>Special Product</h2>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="block1">
                {" "}
                <strong>fresh from our farm</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy habitant morbi.
                </p>
              </div>
              <div className="block2">
                {" "}
                <strong>100% organic Foods</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy habitant morbi.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="spl-pro">
                <Link
                  to={"product-details"}
                  title="Fresh Organic Mustard Leaves "
                >
                  <img
                    src="products-/assets/img/p12.jpg"
                    alt="Fresh Organic Mustard Leaves "
                  />
                </Link>
                <div className="item-info">
                  <div className="info-inner">
                    <div className="item-title">
                      <Link
                        to={"product-details"}
                        title="Fresh Organic Mustard Leaves "
                      >
                        Fresh Organic Mustard Leaves{" "}
                      </Link>{" "}
                    </div>
                    <div className="item-content">
                      <div className="rating">
                        <div className="ratings">
                          <div className="rating-box">
                            <div className="rating"></div>
                          </div>
                          <p className="rating-links">
                            <Link to={" "}>1 Review(s)</Link>{" "}
                            <span className="separator">|</span>{" "}
                            <Link to={" "}>Add Review</Link>{" "}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
              <div className="block3">
                {" "}
                <strong>Good for health</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy habitant morbi.
                </p>
              </div>
              <div className="block4">
                {" "}
                <strong>Safe From Pesticides</strong>
                <p>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam nonummy habitant morbi.
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
                  Have a question? <br />
                  +1 800 789 0000{" "}
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
                <Link to={" "}>
                  <i className="fa fa-apple"></i> download
                </Link>{" "}
                <Link to={" "}>
                  <i className="fa fa-android"></i> download
                </Link>{" "}
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- For version 1,2,3,4,6 --></div> */}

      <Footer />
    </>
  );
}
