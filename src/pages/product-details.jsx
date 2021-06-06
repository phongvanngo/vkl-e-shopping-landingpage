import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import queryString from "query-string";
import { useDispatch, useSelector } from "react-redux";
import { fetchListCategory } from "../app/redux/categorySlice";
import {
  fetchListProduct,
  fetchListProductByCategory,
  fetchProductById,
} from "../app/redux/productSlice";
import ProductPageHeading from "./component/productPage/PageHeading";
import { numberWithSpaces } from "../app/myLibrary/utilities";
import RelatedProduct from "./component/productPage/RelatedProduct";
import AddToBoxComponent from "./component/productPage/productDetail.AddToBox";

export default function ProductDetails() {
  const { productInfo } = useParams();
  let info = queryString.parse(productInfo);

  const [currentCategory, setCurrentCategory] = useState({});
  const currentProduct = useSelector((state) => state.product.currentProduct);
  const listCategory = useSelector((state) => state.category.listCategory);

  const dispatch = useDispatch();
  useEffect(() => {
    window.commonjs();
    window.zoomimg();
    console.log("product detaild - use effect- info = ", info);
    if (info === null) return;
    dispatch(fetchProductById(info.product_id));
    if (info.category_id === null) {
      dispatch(fetchListProduct({}));
    } else {
      dispatch(fetchListProductByCategory(info.category_id));
    }
  }, [productInfo]);

  useEffect(() => {
    if (listCategory === null) return;
    let category = listCategory.find(
      (category) => category.id == info.category_id
    );
    if (!category) category = { id: null, name: "Tất cả sản phẩm" };
    setCurrentCategory(category);
    console.log("use effect product page: ", category);
  }, [listCategory]);

  console.log("product detail - current Product = ", currentProduct);

  const handleAddToCart = () => {};

  return (
    <>
      <Header />

      <ProductPageHeading currentCategory={currentCategory} />
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
                            src={currentProduct?.image}
                            alt="product-image"
                          />
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
                      <div className="brand">{currentCategory?.name}</div>
                      <div className="product-name">
                        <h1>{currentProduct?.name}</h1>
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
                            <span className="price-label">GIÁ</span>
                            <span id="product-price-48" className="price">
                              {" "}
                              {numberWithSpaces(currentProduct?.price)}
                              {" VND "}
                            </span>{" "}
                          </p>
                        </div>
                      </div>
                      <AddToBoxComponent product={currentProduct} />
                      <div className="short-description">
                        <p>{currentProduct?.description}</p>
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
                        <li>Miễn phí ship bán kính 1 km</li>
                        <li>Trả lại trong ngày</li>
                        <li>Chiết khấu hấp dẫn dành cho thành viên</li>
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam fringilla augue nec est tristique auctor. Donec non
                        est at libero vulputate rutrum. Morbi ornare lectus quis
                        justo gravida semper. Nulla tellus mi, vulputate
                        adipiscing cursus eu, suscipit id nulla. Donec a neque
                        libero. Pellentesque aliquet, sem eget laoreet ultrices,
                        ipsum metus feugiat sem, quis fermentum turpis eros eget
                        velit. Donec ac tempus ante. Fusce ultricies massa
                        massa. Mauris vel tellus non nunc mattis lobortis.
                        vulputate adipiscing cursus eu, suscipit id nulla. Donec
                        a neque libero. Pellentesque aliquet, sem eget laoreet
                        ultrices, ipsum metus feugiat sem, quis fermentum turpis
                        eros eget velit. Donec ac tempus ante.{" "}
                      </p>
                      <img
                        alt=""
                        src="/assets/img/custom-img2.jpg"
                        style={{ float: "right" }}
                      />
                      <p>
                        {" "}
                        Nunc facilisis sagittis ullamcorper. Proin lectus ipsum,
                        gravida et mattis vulputate, tristique ut lectus. Sed et
                        lorem nunc. Vestibulum ante ipsum primis in faucibus
                        orci luctus et ultrices posuere cubilia Curae; Aenean
                        eleifend laoreet congue. Vivamus adipiscing nisl ut
                        dolor dignissim semper. Nulla luctus malesuada
                        tincidunt. Class aptent taciti sociosqu ad litora
                        torquent per conubia nostra, per inceptos himenaeos.
                        Integer enim purus, posuere at ultricies eu, placerat a
                        felis. Suspendisse aliquet urna pretium eros convallis
                        interdum. Quisque in arcu id dui vulputate mollis eget
                        non arcu. Aenean et nulla purus. Mauris vel tellus non
                        nunc mattis lobortis. vulputate adipiscing cursus eu,
                        suscipit id nulla. Donec a neque libero. Pellentesque
                        aliquet, sem eget laoreet ultrices, ipsum metus feugiat
                        sem, quis fermentum turpis eros eget velit. Donec ac
                        tempus ante. Fusce ultricies massa massa. Fusce aliquam,
                        purus eget sagittis vulputate, sapien libero hendrerit
                        est, vulputate adipiscing cursus eu, suscipit id nulla.
                        Donec a neque libero. Pellentesque aliquet, sem eget
                        laoreet ultrices, ipsum metus feugiat sem, quis
                        fermentum turpis eros eget velit. Donec ac tempus ante.
                        Fusce ultricies massa massa. Fusce aliquam, purus eget
                        sagittis vulputate, sapien libero hendrerit.
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Nam fringilla augue nec est tristique auctor. Donec non
                        est at libero vulputate rutrum. Morbi ornare lectus quis
                        justo gravida semper. Nulla tellus mi, vulputate
                        adipiscing cursus eu, suscipit id nulla. Donec a neque
                        libero. Pellentesque aliquet, sem eget laoreet ultrices,
                        ipsum metus feugiat sem, quis fermentum turpis eros eget
                        velit. Donec ac tempus ante. Fusce ultricies massa
                        massa. Mauris vel tellus non nunc mattis lobortis.
                        vulputate adipiscing cursus eu, suscipit id nulla. Donec
                        a neque libero. Pellentesque aliquet, sem eget laoreet
                        ultrices, ipsum metus feugiat sem, quis fermentum turpis
                        eros eget velit. Donec ac tempus ante.{" "}
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
                                    consectetur sed, convallis at tellus. Nulla
                                    quis lorem ut libero malesuada feugiat.
                                    Proin eget tortor risus. Donec rutrum congue
                                    leo eget malesuada. Lorem ipsum dolor sit
                                    amet, consectetur adipiscing elit.
                                  </p>
                                  <p>
                                    Donec sollicitudin molestie malesuada.
                                    Vivamus suscipit tortor eget felis porttitor
                                    volutpat. Lorem ipsum dolor sit amet,
                                    consectetur adipiscing elit. Nulla quis
                                    lorem ut libero malesuada feugiat. Vivamus
                                    magna justo, lacinia eget consectetur sed,
                                    convallis at tellus.
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
                                  <strong>Stephen Smith</strong> <span>–</span>{" "}
                                  June 02, 2018
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed tempor, lorem et placerat vestibulum, metus nisi
                        posuere nisl, in accumsan elit odio quis mi.
                      </p>
                      <p>
                        {" "}
                        Cras neque metus, consequat et blandit et, luctus a
                        nunc. Etiam gravida vehicula tellus, in imperdiet ligula
                        euismod eget. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas.
                        Nam erat mi, rutrum at sollicitudin rhoncus, ultricies
                        posuere erat. Duis convallis, arcu nec aliquam
                        consequat, purus felis vehicula felis, a dapibus enim
                        lorem nec augue.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="product_tabs_custom1">
                    <div className="product-tabs-content-inner clearfix">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed tempor, lorem et placerat vestibulum, metus nisi
                        posuere nisl, in accumsan elit odio quis mi. Cras neque
                        metus, consequat et blandit et, luctus a nunc. Etiam
                        gravida vehicula tellus, in imperdiet ligula euismod
                        eget. Pellentesque habitant morbi tristique senectus et
                        netus et malesuada fames ac turpis egestas. Nam erat mi,
                        rutrum at sollicitudin rhoncus, ultricies posuere erat.
                        Duis convallis, arcu nec aliquam consequat, purus felis
                        vehicula felis, a dapibus enim lorem nec augue.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--product-collateral--> */}
              <div className="box-additional">
                {/* <!-- BEGIN RELATED PRODUCTS --> */}
                <div className="related-pro container">
                  <RelatedProduct currentCategory={currentCategory} />
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
