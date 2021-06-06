import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";

class ProductDetails extends Component {
  componentDidMount() {
    window.commonjs();
    window.zoomimg();
  }

  render() {
    return (
      <>
        <Header />

        <div className="page-heading">
          <div className="breadcrumbs">
            <div className="container">
              <div className="row">
                <div className="col-xs-12">
                  <ul>
                    <li className="home">
                      {" "}
                      <Link to={"/"} title="Go to Home Page">
                        Home
                      </Link>{" "}
                      <span>&rsaquo;</span>{" "}
                    </li>
                    <li className="category1601">
                      {" "}
                      <strong>Vegetables</strong>{" "}
                    </li>
                  </ul>
                </div>
                {/* <!--col-xs-12--> */}
              </div>
              {/* <!--row--> */}
            </div>
            {/* <!--container--> */}
          </div>
          <div className="page-title">
            <h2>Vegetables</h2>
          </div>
        </div>
        {/* <!-- BEGIN Main Container --> */}
        <div className="main-container col1-layout wow bounceInUp animated">
          <div className="main">
            <div className="col-main">
              {/* <!-- Endif Next Previous Product --> */}
              <div
                className="product-view wow bounceInUp animated"
                itemscope=""
                itemtype="http://schema.org/Product"
                itemid="#product_base"
              >
                <div id="messages_product_view"></div>
                {/* <!--product-next-prev--> */}
                <div className="product-essential container">
                  <div className="row">
                    <form action="#" method="post" id="product_addtocart_form">
                      {/* <!--End For version 1, 2, 6 --> */}
                      {/* <!-- For version 3 --> */}
                      <div className="product-img-box col-lg-5 col-sm-5 col-xs-12">
                        <div className="new-label new-top-left">Hot</div>
                        <div className="sale-label sale-top-left">-15%</div>
                        <div className="product-image">
                          <div className="product-full">
                            {" "}
                            <img
                              id="product-zoom"
                              src="/assets/img/p14.jpg"
                              alt="product-image"
                            />
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
                                    <Link
                                      to={" "}
                                      data-image="/assets/img/p2.jpg"
                                    >
                                      {" "}
                                      <img
                                        id="product-zoom0"
                                        src="/assets/img/p2.jpg"
                                        alt="product-image"
                                      />{" "}
                                    </Link>
                                  </div>
                                  <div className="more-views-items">
                                    {" "}
                                    <Link
                                      to={" "}
                                      data-image="/assets/img/p3.jpg"
                                    >
                                      {" "}
                                      <img
                                        id="product-zoom1"
                                        src="/assets/img/p3.jpg"
                                        alt="product-image"
                                      />{" "}
                                    </Link>
                                  </div>
                                  <div className="more-views-items">
                                    {" "}
                                    <Link
                                      to={" "}
                                      data-image="/assets/img/p4.jpg"
                                    >
                                      {" "}
                                      <img
                                        id="product-zoom2"
                                        src="/assets/img/p4.jpg"
                                        alt="product-image"
                                      />{" "}
                                    </Link>
                                  </div>
                                  <div className="more-views-items">
                                    {" "}
                                    <Link
                                      to={" "}
                                      data-image="/assets/img/p14.jpg"
                                    >
                                      {" "}
                                      <img
                                        id="product-zoom3"
                                        src="/assets/img/p14.jpg"
                                        alt="product-image"
                                      />{" "}
                                    </Link>{" "}
                                  </div>
                                  <div className="more-views-items">
                                    {" "}
                                    <Link
                                      to={" "}
                                      data-image="/assets/img/p6.jpg"
                                    >
                                      {" "}
                                      <img
                                        id="product-zoom4"
                                        src="/assets/img/p6.jpg"
                                        alt="product-image"
                                      />{" "}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end: more-images --> */}
                      </div>
                      {/* <!--End For version 1,2,6--> */}
                      {/* <!-- For version 3 --> */}
                      <div className="product-shop col-lg- col-sm-7 col-xs-12">
                        <div className="product-next-prev">
                          {" "}
                          <Link className="product-next" to={" "}>
                            <span></span>
                          </Link>{" "}
                          <Link className="product-prev" to={" "}>
                            <span></span>
                          </Link>{" "}
                        </div>
                        <div className="brand">XPERIA</div>
                        <div className="product-name">
                          <h1>Fresh Organic Mustard Leaves </h1>
                        </div>
                        <div className="ratings">
                          <div className="rating-box">
                            <div
                              style={{ width: "60%" }}
                              className="rating"
                            ></div>
                          </div>
                          <p className="rating-links">
                            {" "}
                            <Link to={" "}>1 Review</Link>{" "}
                            <span className="separator">|</span>{" "}
                            <Link to={" "}>Add Your Review</Link>{" "}
                          </p>
                        </div>
                        <div className="price-block">
                          <div className="price-box">
                            <p className="availability in-stock">
                              <span>In Stock</span>
                            </p>
                            <p className="special-price">
                              {" "}
                              <span className="price-label">Special Price</span>
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nam fringilla augue nec est tristique auctor.
                            Donec non est at libero vulputate rutrum. Morbi
                            ornare lectus quis justo gravida semper. Nulla
                            tellus mi, vulputate adipiscing cursus eu, suscipit
                            id nulla. Donec a neque libero.
                          </p>
                        </div>
                        <div className="email-addto-box">
                          <ul className="add-to-links">
                            <li>
                              {" "}
                              <Link className="link-wishlist" to={"/wishlist"}>
                                <span>Add to Wishlist</span>
                              </Link>
                            </li>
                            <li>
                              <span className="separator">|</span>{" "}
                              <Link className="link-compare" to={"/compare"}>
                                <span>Add to Compare</span>
                              </Link>
                            </li>
                          </ul>
                          <p className="email-friend">
                            <Link to={" "} className="">
                              <span>Email to a Friend</span>
                            </Link>
                          </p>
                        </div>
                        <div className="social">
                          <ul className="link">
                            <li className="fb">
                              <Link to={" "}></Link>
                            </li>
                            <li className="tw">
                              <Link to={" "}></Link>
                            </li>
                            <li className="googleplus">
                              <Link to={" "}></Link>
                            </li>
                            <li className="rss">
                              <Link to={" "}></Link>
                            </li>
                            <li className="pintrest">
                              <Link to={" "}></Link>
                            </li>
                            <li className="linkedin">
                              <Link to={" "}></Link>
                            </li>
                            <li className="youtube">
                              <Link to={" "}></Link>
                            </li>
                          </ul>
                        </div>

                        <ul className="shipping-pro">
                          <li>Free Wordwide Shipping</li>
                          <li>30 Days Return</li>
                          <li>Member Discount</li>
                        </ul>
                      </div>
                      {/* <!--product-shop--> */}
                      {/* <!--Detail page static block for version 3--> */}
                    </form>
                  </div>
                </div>
                {/* <!--product-essential--> */}
                <div className="product-collateral container">
                  <ul
                    id="product-detail-tab"
                    className="nav nav-tabs product-tabs"
                  >
                    <li className="active">
                      {" "}
                      <Link href="#product_tabs_description" data-toggle="tab">
                        {" "}
                        Product Description{" "}
                      </Link>{" "}
                    </li>
                    <li>
                      <Link href="#product_tabs_tags" data-toggle="tab">
                        Tags
                      </Link>
                    </li>
                    <li>
                      {" "}
                      <Link href="#reviews_tabs" data-toggle="tab">
                        Reviews
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#product_tabs_custom" data-toggle="tab">
                        Custom Tab
                      </Link>{" "}
                    </li>
                    <li>
                      {" "}
                      <Link href="#product_tabs_custom1" data-toggle="tab">
                        Custom Tab1
                      </Link>{" "}
                    </li>
                  </ul>
                  <div id="productTabContent" className="tab-content">
                    <div
                      className="tab-pane fade in active"
                      id="product_tabs_description"
                    >
                      <div className="std">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam fringilla augue nec est tristique auctor.
                          Donec non est at libero vulputate rutrum. Morbi ornare
                          lectus quis justo gravida semper. Nulla tellus mi,
                          vulputate adipiscing cursus eu, suscipit id nulla.
                          Donec a neque libero. Pellentesque aliquet, sem eget
                          laoreet ultrices, ipsum metus feugiat sem, quis
                          fermentum turpis eros eget velit. Donec ac tempus
                          ante. Fusce ultricies massa massa. Mauris vel tellus
                          non nunc mattis lobortis. vulputate adipiscing cursus
                          eu, suscipit id nulla. Donec a neque libero.
                          Pellentesque aliquet, sem eget laoreet ultrices, ipsum
                          metus feugiat sem, quis fermentum turpis eros eget
                          velit. Donec ac tempus ante.{" "}
                        </p>
                        <img
                          alt=""
                          src="/assets/img/custom-img2.jpg"
                          style={{ float: "right" }}
                        />
                        <p>
                          {" "}
                          Nunc facilisis sagittis ullamcorper. Proin lectus
                          ipsum, gravida et mattis vulputate, tristique ut
                          lectus. Sed et lorem nunc. Vestibulum ante ipsum
                          primis in faucibus orci luctus et ultrices posuere
                          cubilia Curae; Aenean eleifend laoreet congue. Vivamus
                          adipiscing nisl ut dolor dignissim semper. Nulla
                          luctus malesuada tincidunt. Class aptent taciti
                          sociosqu ad litora torquent per conubia nostra, per
                          inceptos himenaeos. Integer enim purus, posuere at
                          ultricies eu, placerat a felis. Suspendisse aliquet
                          urna pretium eros convallis interdum. Quisque in arcu
                          id dui vulputate mollis eget non arcu. Aenean et nulla
                          purus. Mauris vel tellus non nunc mattis lobortis.
                          vulputate adipiscing cursus eu, suscipit id nulla.
                          Donec a neque libero. Pellentesque aliquet, sem eget
                          laoreet ultrices, ipsum metus feugiat sem, quis
                          fermentum turpis eros eget velit. Donec ac tempus
                          ante. Fusce ultricies massa massa. Fusce aliquam,
                          purus eget sagittis vulputate, sapien libero hendrerit
                          est, vulputate adipiscing cursus eu, suscipit id
                          nulla. Donec a neque libero. Pellentesque aliquet, sem
                          eget laoreet ultrices, ipsum metus feugiat sem, quis
                          fermentum turpis eros eget velit. Donec ac tempus
                          ante. Fusce ultricies massa massa. Fusce aliquam,
                          purus eget sagittis vulputate, sapien libero
                          hendrerit.
                        </p>
                        <ul>
                          <li>
                            <strong>
                              Mauris vel tellus non nunc mattis lobortis
                            </strong>
                          </li>
                          <li>
                            <strong>
                              Suspendisse aliquet urna pretium eros convallis
                            </strong>
                          </li>
                          <li>
                            Vestibulum ante ipsum{" "}
                            <strong>primis in faucibus</strong>
                          </li>
                          <li>
                            <strong>Fusce ultricies massa massa</strong>
                          </li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Nam fringilla augue nec est tristique auctor.
                          Donec non est at libero vulputate rutrum. Morbi ornare
                          lectus quis justo gravida semper. Nulla tellus mi,
                          vulputate adipiscing cursus eu, suscipit id nulla.
                          Donec a neque libero. Pellentesque aliquet, sem eget
                          laoreet ultrices, ipsum metus feugiat sem, quis
                          fermentum turpis eros eget velit. Donec ac tempus
                          ante. Fusce ultricies massa massa. Mauris vel tellus
                          non nunc mattis lobortis. vulputate adipiscing cursus
                          eu, suscipit id nulla. Donec a neque libero.
                          Pellentesque aliquet, sem eget laoreet ultrices, ipsum
                          metus feugiat sem, quis fermentum turpis eros eget
                          velit. Donec ac tempus ante.{" "}
                        </p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="product_tabs_tags">
                      <div className="box-collateral box-tags">
                        <div className="tags">
                          <form id="addTagForm" action="#" method="get">
                            <div className="form-add-tags">
                              <div className="input-box">
                                <input
                                  className="input-text"
                                  name="productTagName"
                                  id="productTagName"
                                  type="text"
                                  value="enter your tags"
                                />
                                <button
                                  type="button"
                                  title="Add Tags"
                                  className=" button btn-add"
                                  onClick="submitTagForm()"
                                >
                                  {" "}
                                  <span>Add Tags</span>{" "}
                                </button>
                              </div>
                              {/* <!--input-box--> */}
                            </div>
                          </form>
                        </div>
                        {/* <!--tags--> */}
                        <p className="note">
                          Use spaces to separate tags. Use single quotes (') for
                          phrases.
                        </p>
                      </div>
                    </div>
                    <div className="tab-pane fade in" id="reviews_tabs">
                      <div className="woocommerce-Reviews">
                        <div>
                          <h2 className="woocommerce-Reviews-title">
                            2 reviews for{" "}
                            <span>Bacca Bucci Men's Running Shoes</span>
                          </h2>
                          <ol className="commentlist">
                            <li className="comment">
                              <div>
                                <img
                                  alt=""
                                  src="/assets/img/member1.png"
                                  className="avatar avatar-60 photo"
                                />
                                <div className="comment-text">
                                  <div className="ratings">
                                    <div className="rating-box">
                                      <div
                                        style={{ width: "100%" }}
                                        className="rating"
                                      ></div>
                                    </div>
                                  </div>
                                  <p className="meta">
                                    <strong>John Doe</strong>
                                    <span>–</span> April 19, 2018
                                  </p>
                                  <div className="description">
                                    <p>
                                      Vivamus magna justo, lacinia eget
                                      consectetur sed, convallis at tellus.
                                      Nulla quis lorem ut libero malesuada
                                      feugiat. Proin eget tortor risus. Donec
                                      rutrum congue leo eget malesuada. Lorem
                                      ipsum dolor sit amet, consectetur
                                      adipiscing elit.
                                    </p>
                                    <p>
                                      Donec sollicitudin molestie malesuada.
                                      Vivamus suscipit tortor eget felis
                                      porttitor volutpat. Lorem ipsum dolor sit
                                      amet, consectetur adipiscing elit. Nulla
                                      quis lorem ut libero malesuada feugiat.
                                      Vivamus magna justo, lacinia eget
                                      consectetur sed, convallis at tellus.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            {/* <!-- #comment-## --> */}
                            <li className="comment">
                              <div>
                                <img
                                  alt=""
                                  src="/assets/img/member2.png"
                                  className="avatar avatar-60 photo"
                                />
                                <div className="comment-text">
                                  <div className="ratings">
                                    <div className="rating-box">
                                      <div
                                        style={{ width: "100%" }}
                                        className="rating"
                                      ></div>
                                    </div>
                                  </div>
                                  <p className="meta">
                                    <strong>Stephen Smith</strong>{" "}
                                    <span>–</span> June 02, 2018
                                  </p>
                                  <div className="description">
                                    <p>
                                      Donec rutrum congue leo eget malesuada.
                                      Lorem ipsum dolor sit amet, consectetur
                                      adipiscing elit.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            {/* <!-- #comment-## --> */}
                          </ol>
                        </div>
                        <div>
                          <div>
                            <div className="comment-respond">
                              <span className="comment-reply-title">
                                Add a review{" "}
                              </span>
                              <form
                                action="#"
                                method="post"
                                className="comment-form"
                                novalidate
                              >
                                <p className="comment-notes">
                                  <span id="email-notes">
                                    Your email address will not be published.
                                  </span>{" "}
                                  Required fields are marked{" "}
                                  <span className="required">*</span>
                                </p>
                                <div className="comment-form-rating">
                                  <label id="rating">Your rating</label>
                                  <p className="stars">
                                    <span>
                                      <Link className="star-1" to={" "}>
                                        1
                                      </Link>
                                      <Link className="star-2" to={" "}>
                                        2
                                      </Link>
                                      <Link className="star-3" to={" "}>
                                        3
                                      </Link>
                                      <Link className="star-4" to={" "}>
                                        4
                                      </Link>
                                      <Link className="star-5" to={" "}>
                                        5
                                      </Link>
                                    </span>
                                  </p>
                                </div>
                                <p className="comment-form-comment">
                                  <label>
                                    Your review{" "}
                                    <span className="required">*</span>
                                  </label>
                                  <textarea
                                    id="comment"
                                    name="comment"
                                    cols="45"
                                    rows="8"
                                    required
                                  ></textarea>
                                </p>
                                <p className="comment-form-author">
                                  <label for="author">
                                    Name <span className="required">*</span>
                                  </label>
                                  <input
                                    id="author"
                                    name="author"
                                    type="text"
                                    value=""
                                    size="30"
                                    required
                                  />
                                </p>
                                <p className="comment-form-email">
                                  <label for="email">
                                    Email <span className="required">*</span>
                                  </label>
                                  <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value=""
                                    size="30"
                                    required
                                  />
                                </p>
                                <p className="form-submit">
                                  <input
                                    name="submit"
                                    type="submit"
                                    id="submit"
                                    className="submit"
                                    value="Submit"
                                  />
                                </p>
                              </form>
                            </div>
                            {/* <!-- #respond --> */}
                          </div>
                        </div>
                        <div className="clear"></div>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="product_tabs_custom">
                      <div className="product-tabs-content-inner clearfix">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed tempor, lorem et placerat vestibulum, metus
                          nisi posuere nisl, in accumsan elit odio quis mi.
                        </p>
                        <p>
                          {" "}
                          Cras neque metus, consequat et blandit et, luctus a
                          nunc. Etiam gravida vehicula tellus, in imperdiet
                          ligula euismod eget. Pellentesque habitant morbi
                          tristique senectus et netus et malesuada fames ac
                          turpis egestas. Nam erat mi, rutrum at sollicitudin
                          rhoncus, ultricies posuere erat. Duis convallis, arcu
                          nec aliquam consequat, purus felis vehicula felis, a
                          dapibus enim lorem nec augue.
                        </p>
                      </div>
                    </div>
                    <div className="tab-pane fade" id="product_tabs_custom1">
                      <div className="product-tabs-content-inner clearfix">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Sed tempor, lorem et placerat vestibulum, metus
                          nisi posuere nisl, in accumsan elit odio quis mi. Cras
                          neque metus, consequat et blandit et, luctus a nunc.
                          Etiam gravida vehicula tellus, in imperdiet ligula
                          euismod eget. Pellentesque habitant morbi tristique
                          senectus et netus et malesuada fames ac turpis
                          egestas. Nam erat mi, rutrum at sollicitudin rhoncus,
                          ultricies posuere erat. Duis convallis, arcu nec
                          aliquam consequat, purus felis vehicula felis, a
                          dapibus enim lorem nec augue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!--product-collateral--> */}
                <div className="box-additional">
                  {/* <!-- BEGIN RELATED PRODUCTS --> */}
                  <div className="related-pro container">
                    <div className="slider-items-products">
                      <div className="new_title center">
                        <h2>Related Products</h2>
                      </div>
                      <div
                        id="related-slider"
                        className="product-flexslider hidden-buttons"
                      >
                        <div className="slider-items slider-width-col4 products-grid">
                          <div className="item">
                            <div className="item-inner">
                              <div className="item-img">
                                <div className="item-img-info">
                                  <Link
                                    to={"/product-details"}
                                    title="Fresh Organic Mustard Leaves "
                                    className="product-image"
                                  >
                                    <img
                                      src="/assets/img/p1.jpg"
                                      alt="Fresh Organic Mustard Leaves "
                                    />
                                  </Link>
                                  <div className="item-box-hover">
                                    <div className="box-inner">
                                      <div className="product-detail-bnt">
                                        <Link
                                          to={" "}
                                          className="button detail-bnt"
                                        >
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
                                  <button
                                    className="button btn-cart"
                                    type="button"
                                  >
                                    <span>Add to Cart</span>
                                  </button>
                                </div>
                              </div>
                              <div className="item-info">
                                <div className="info-inner">
                                  <div className="item-title">
                                    <Link
                                      to={"/product-details"}
                                      title="Fresh Organic Mustard Leaves "
                                    >
                                      Fresh Organic Mustard Leaves{" "}
                                    </Link>{" "}
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
                                          <Link to={" "}>1 Review(s)</Link>{" "}
                                          <span className="separator">|</span>{" "}
                                          <Link to={" "}>Add Review</Link>{" "}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="item-price">
                                      <div className="price-box">
                                        <span className="regular-price">
                                          <span className="price">$125.00</span>{" "}
                                        </span>
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
                                  <Link
                                    to={"/product-details"}
                                    title="Fresh Organic Mustard Leaves "
                                    className="product-image"
                                  >
                                    <img
                                      src="/assets/img/p2.jpg"
                                      alt="Fresh Organic Mustard Leaves "
                                    />
                                  </Link>
                                  <div className="item-box-hover">
                                    <div className="box-inner">
                                      <div className="product-detail-bnt">
                                        <Link
                                          to={" "}
                                          className="button detail-bnt"
                                        >
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
                                  <button
                                    className="button btn-cart"
                                    type="button"
                                  >
                                    <span>Add to Cart</span>
                                  </button>
                                </div>
                              </div>
                              <div className="item-info">
                                <div className="info-inner">
                                  <div className="item-title">
                                    <Link
                                      to={"/product-details"}
                                      title="Fresh Organic Mustard Leaves "
                                    >
                                      Fresh Organic Mustard Leaves{" "}
                                    </Link>{" "}
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
                                          <Link to={" "}>1 Review(s)</Link>{" "}
                                          <span className="separator">|</span>{" "}
                                          <Link to={" "}>Add Review</Link>{" "}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="item-price">
                                      <div className="price-box">
                                        <span className="regular-price">
                                          <span className="price">$125.00</span>{" "}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End Item --> */}

                          {/* <!-- Item --> */}
                          <div className="item">
                            <div className="item-inner">
                              <div className="item-img">
                                <div className="item-img-info">
                                  <Link
                                    to={"/product-details"}
                                    title="Fresh Organic Mustard Leaves "
                                    className="product-image"
                                  >
                                    <img
                                      src="/assets/img/p3.jpg"
                                      alt="Fresh Organic Mustard Leaves "
                                    />
                                  </Link>
                                  <div className="item-box-hover">
                                    <div className="box-inner">
                                      <div className="product-detail-bnt">
                                        <Link
                                          to={" "}
                                          className="button detail-bnt"
                                        >
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
                                  <button
                                    className="button btn-cart"
                                    type="button"
                                  >
                                    <span>Add to Cart</span>
                                  </button>
                                </div>
                              </div>
                              <div className="item-info">
                                <div className="info-inner">
                                  <div className="item-title">
                                    <Link
                                      to={"/product-details"}
                                      title="Fresh Organic Mustard Leaves "
                                    >
                                      Fresh Organic Mustard Leaves{" "}
                                    </Link>{" "}
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
                                          <Link to={" "}>1 Review(s)</Link>{" "}
                                          <span className="separator">|</span>{" "}
                                          <Link to={" "}>Add Review</Link>{" "}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="item-price">
                                      <div className="price-box">
                                        <span className="regular-price">
                                          <span className="price">$125.00</span>{" "}
                                        </span>
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
                                  <Link
                                    to={"/product-details"}
                                    title="Fresh Organic Mustard Leaves "
                                    className="product-image"
                                  >
                                    <img
                                      src="/assets/img/p4.jpg"
                                      alt="Fresh Organic Mustard Leaves "
                                    />
                                  </Link>

                                  <div className="item-box-hover">
                                    <div className="box-inner">
                                      <div className="product-detail-bnt">
                                        <Link
                                          to={" "}
                                          className="button detail-bnt"
                                        >
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
                                  <button
                                    className="button btn-cart"
                                    type="button"
                                  >
                                    <span>Add to Cart</span>
                                  </button>
                                </div>
                              </div>
                              <div className="item-info">
                                <div className="info-inner">
                                  <div className="item-title">
                                    <Link
                                      to={"/product-details"}
                                      title="Fresh Organic Mustard Leaves "
                                    >
                                      Fresh Organic Mustard Leaves{" "}
                                    </Link>{" "}
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
                                          <Link to={" "}>1 Review(s)</Link>{" "}
                                          <span className="separator">|</span>{" "}
                                          <Link to={" "}>Add Review</Link>{" "}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="item-price">
                                      <div className="price-box">
                                        <span className="regular-price">
                                          <span className="price">$125.00</span>{" "}
                                        </span>
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
                                  <Link
                                    to={"/product-details"}
                                    title="Fresh Organic Mustard Leaves "
                                    className="product-image"
                                  >
                                    <img
                                      src="/assets/img/p5.jpg"
                                      alt="Fresh Organic Mustard Leaves "
                                    />
                                  </Link>
                                  <div className="item-box-hover">
                                    <div className="box-inner">
                                      <div className="product-detail-bnt">
                                        <Link
                                          to={" "}
                                          className="button detail-bnt"
                                        >
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
                                  <button
                                    className="button btn-cart"
                                    type="button"
                                  >
                                    <span>Add to Cart</span>
                                  </button>
                                </div>
                              </div>
                              <div className="item-info">
                                <div className="info-inner">
                                  <div className="item-title">
                                    <Link
                                      to={"/product-details"}
                                      title="Fresh Organic Mustard Leaves "
                                    >
                                      Fresh Organic Mustard Leaves{" "}
                                    </Link>{" "}
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
                                          <Link to={" "}>1 Review(s)</Link>{" "}
                                          <span className="separator">|</span>{" "}
                                          <Link to={" "}>Add Review</Link>{" "}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="item-price">
                                      <div className="price-box">
                                        <span className="regular-price">
                                          <span className="price">$125.00</span>{" "}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End Item --> */}

                          {/* <!-- Item --> */}
                          <div className="item">
                            <div className="item-inner">
                              <div className="item-img">
                                <div className="item-img-info">
                                  <Link
                                    to={"/product-details"}
                                    title="Fresh Organic Mustard Leaves "
                                    className="product-image"
                                  >
                                    <img
                                      src="/assets/img/p6.jpg"
                                      alt="Fresh Organic Mustard Leaves "
                                    />
                                  </Link>
                                  <div className="item-box-hover">
                                    <div className="box-inner">
                                      <div className="product-detail-bnt">
                                        <Link
                                          to={" "}
                                          className="button detail-bnt"
                                        >
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
                                  <button
                                    className="button btn-cart"
                                    type="button"
                                  >
                                    <span>Add to Cart</span>
                                  </button>
                                </div>
                              </div>
                              <div className="item-info">
                                <div className="info-inner">
                                  <div className="item-title">
                                    <Link
                                      to={"/product-details"}
                                      title="Fresh Organic Mustard Leaves "
                                    >
                                      Fresh Organic Mustard Leaves{" "}
                                    </Link>{" "}
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
                                          <Link to={" "}>1 Review(s)</Link>{" "}
                                          <span className="separator">|</span>{" "}
                                          <Link to={" "}>Add Review</Link>{" "}
                                        </p>
                                      </div>
                                    </div>
                                    <div className="item-price">
                                      <div className="price-box">
                                        <span className="regular-price">
                                          <span className="price">$125.00</span>{" "}
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* <!-- End Item --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <!-- end related product --> */}
                </div>
                {/* <!-- end related product --> */}
              </div>
              {/* <!--box-additional--> */}
              {/* <!--product-view--> */}
            </div>
          </div>
          {/* <!--col-main--> */}
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

        <Footer />
      </>
    );
  }
}
export default ProductDetails;
