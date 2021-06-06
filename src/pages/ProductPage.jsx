import React, { Component, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";
import { useDispatch, useSelector } from "react-redux";
import { fetchListCategory } from "../app/redux/categorySlice";
import ProductPageHeading from "./component/productPage/PageHeading";
import ListProductsComponent from "./component/productPage/ListProduct";
import SideNavCategory from "./component/productPage/SideNavCategory";

export default function ProductPage() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const [currentCategory, setCurrentCategory] = useState({});
  const listCategory = useSelector((state) => state.category.listCategory);
  useEffect(() => {
    dispatch(fetchListCategory({}));
  }, []);

  useEffect(() => {
    if (listCategory === null) return;
    let category = listCategory.find((category) => category.id == id);
    if (!category) category = { id: null, name: "Tất cả sản phẩm" };
    setCurrentCategory(category);
    console.log("use effect product page: ", category);
  }, [listCategory, id]);

  return (
    <>
      <Header />

      <ProductPageHeading currentCategory={currentCategory} />

      {/* <!--breadcrumbs--> */}

      {/* <!-- BEGIN Main Container col2-left --> */}
      <section className="main-container col2-left-layout bounceInUp animated">
        {/* <!-- For version 1, 2, 3, 8 --> */}

        {/* <!-- For version 1, 2, 3 --> */}
        <div className="container">
          <div className="row">
            <div className="col-main col-sm-9 col-sm-push-3 product-grid">
              <div className="pro-coloumn">
                <div className="category-description std">
                  <div className="slider-items-products">
                    <div
                      id="category-desc-slider"
                      className="product-flexslider hidden-buttons"
                    >
                      <div className="slider-items slider-width-col1 owl-carousel owl-theme">
                        {/* <!-- Item --> */}
                        <div className="item">
                          {" "}
                          <Link to={" "}>
                            <img alt="" src="/assets/img/category-img1.jpg" />
                          </Link>
                          <div className="cat-img-title cat-bg cat-box">
                            <div className="small-tag">Season 2018</div>
                            <h2 className="cat-heading">
                              Organic <span>World</span>
                            </h2>
                            <p>GET 40% OFF &sdot; Free Delivery </p>
                          </div>
                        </div>

                        {/* <!-- End Item --> */}

                        {/* <!-- Item --> */}
                        <div className="item">
                          {" "}
                          <Link to={" "}>
                            <img alt="" src="/assets/img/category-img2.jpg" />
                          </Link>
                          <div className="cat-img-title cat-bg cat-box">
                            <div className="small-tag">Green World</div>
                            <h2 className="cat-heading">
                              Vegetable <span>sale</span>
                            </h2>
                            <p>Save 70% on all items</p>
                          </div>
                          {/* <!-- End Item --> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <article>
                  <div className="toolbar">
                    <div className="sorter">
                      <div className="view-mode">
                        {" "}
                        <span
                          title="Grid"
                          className="button button-active button-grid"
                        >
                          &nbsp;
                        </span>
                        <Link to={"/list"} title="List" className="button-list">
                          &nbsp;
                        </Link>{" "}
                      </div>
                    </div>
                    <div className="sort-by">
                      <label className="left">Sort By: </label>
                      <ul>
                        <li>
                          <Link to={" "}>
                            Position<span className="right-arrow"></span>
                          </Link>
                          <ul>
                            <li>
                              <Link to={" "}>Name</Link>
                            </li>
                            <li>
                              <Link to={" "}>Price</Link>
                            </li>
                            <li>
                              <Link to={" "}>Position</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                      <Link
                        className="button-asc left"
                        to={" "}
                        title="Set Descending Direction"
                      >
                        <span className="top_arrow"></span>
                      </Link>
                    </div>
                    <div className="pager">
                      <div className="limiter">
                        <label>View: </label>
                        <ul>
                          <li>
                            <Link to={" "}>
                              15<span className="right-arrow"></span>
                            </Link>
                            <ul>
                              <li>
                                <Link to={" "}>20</Link>
                              </li>
                              <li>
                                <Link to={" "}>30</Link>
                              </li>
                              <li>
                                <Link to={" "}>35</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                      <div className="pages">
                        <label>Page:</label>
                        <ul className="pagination">
                          <li>
                            <Link to={" "}>&laquo;</Link>
                          </li>
                          <li className="active">
                            <Link to={" "}>1</Link>
                          </li>
                          <li>
                            <Link to={" "}>2</Link>
                          </li>
                          <li>
                            <Link to={" "}>3</Link>
                          </li>
                          <li>
                            <Link to={" "}>4</Link>
                          </li>
                          <li>
                            <Link to={" "}>5</Link>
                          </li>
                          <li>
                            <Link to={" "}>&raquo;</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="category-products">
                    <ListProductsComponent currentCategory={currentCategory} />
                  </div>
                  <div className="toolbar bottom">
                    <div className="display-product-option">
                      <div className="pages">
                        <label>Page:</label>
                        <ul className="pagination">
                          <li>
                            <Link to={" "}>«</Link>
                          </li>
                          <li className="active">
                            <Link to={" "}>1</Link>
                          </li>
                          <li>
                            <Link to={" "}>2</Link>
                          </li>
                          <li>
                            <Link to={" "}>3</Link>
                          </li>
                          <li>
                            <Link to={" "}>»</Link>
                          </li>
                        </ul>
                      </div>
                      <div className="product-option-right">
                        <div className="sort-by">
                          <label className="left">Sort By: </label>
                          <ul>
                            <li>
                              <Link to={" "}>
                                Position<span className="right-arrow"></span>
                              </Link>
                              <ul>
                                <li>
                                  <Link to={" "}>Name</Link>
                                </li>
                                <li>
                                  <Link to={" "}>Price</Link>
                                </li>
                                <li>
                                  <Link to={" "}>Position</Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                          <Link
                            className="button-asc left"
                            to={" "}
                            title="Set Descending Direction"
                          >
                            <span className="top_arrow"></span>
                          </Link>
                        </div>
                        <div className="pager">
                          <div className="limiter">
                            <label>View: </label>
                            <ul>
                              <li>
                                <Link to={" "}>
                                  15<span className="right-arrow"></span>
                                </Link>
                                <ul>
                                  <li>
                                    <Link to={" "}>20</Link>
                                  </li>
                                  <li>
                                    <Link to={" "}>30</Link>
                                  </li>
                                  <li>
                                    <Link to={" "}>35</Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
            <aside className="col-left sidebar col-sm-3 col-xs-12 col-sm-pull-9 wow bounceInUp animated">
              {/* <!-- BEGIN SIDE-NAV-CATEGORY --> */}
              <SideNavCategory
                currentCategory={currentCategory}
                listCategories={listCategory || []}
              />
              {/* <!--side-nav-categories--> */}
              <div className="block block-layered-nav">
                <div className="block-title"> Shop By </div>
                <div className="block-content">
                  <p className="block-subtitle">Shopping Options</p>
                  <dl id="narrow-by-list">
                    <dt className="odd">Price</dt>
                    <dd className="odd">
                      <ol>
                        <li>
                          {" "}
                          <Link to={" "}>
                            <span className="price">$0.00</span> -{" "}
                            <span className="price">$99.99</span>
                          </Link>{" "}
                          (6){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>
                            <span className="price">$100.00</span> and above
                          </Link>{" "}
                          (6){" "}
                        </li>
                      </ol>
                    </dd>
                    <dt className="even">Manufacturer</dt>
                    <dd className="even">
                      <ol>
                        <li>
                          {" "}
                          <Link to={" "}>TheBrand</Link> (9){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>Company</Link> (4){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>LogoFashion</Link> (1){" "}
                        </li>
                      </ol>
                    </dd>
                    <dt className="odd">Color</dt>
                    <dd className="odd">
                      <ol>
                        <li>
                          {" "}
                          <Link to={" "}>Green</Link> (1){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>White</Link> (5){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>Black</Link> (5){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>Gray</Link> (4){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>Dark Gray</Link> (3){" "}
                        </li>
                      </ol>
                    </dd>
                    <dt className="last even">Size</dt>
                    <dd className="last even">
                      <ol>
                        <li>
                          {" "}
                          <Link to={" "}>Small</Link> (6){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>Medium</Link> (6){" "}
                        </li>
                        <li>
                          {" "}
                          <Link to={" "}>Large</Link> (4){" "}
                        </li>
                      </ol>
                    </dd>
                  </dl>
                </div>
              </div>
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
                            <Link
                              title=" Sample Product"
                              to={"product-details"}
                            >
                              Up to 70% Off
                            </Link>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                          <Link className="link" to={" "}>
                            Buy Now
                          </Link>
                        </div>
                      </div>
                      <div className="item">
                        <img src="/assets/img/slide3.jpg" alt="slide1" />
                        <div className="carousel-caption">
                          <h4>Black Grapes</h4>
                          <h3>
                            <Link
                              title=" Sample Product"
                              to={"product-details"}
                            >
                              Mega Sale
                            </Link>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                          <Link className="link" to={" "}>
                            Buy Now
                          </Link>
                        </div>
                      </div>
                      <div className="item">
                        <img src="/assets/img/slide1.jpg" alt="slide2" />
                        <div className="carousel-caption">
                          <h4>Food Farm</h4>
                          <h3>
                            <Link
                              title=" Sample Product"
                              to={"product-details"}
                            >
                              Up to 50% Off
                            </Link>
                          </h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                          </p>
                          <Link className="link" to={" "}>
                            Buy Now
                          </Link>
                        </div>
                      </div>
                    </div>
                    <Link
                      to="/"
                      className="left carousel-control"
                      href="#carousel-example-generic"
                      data-slide="prev"
                    >
                      <span className="sr-only">Previous</span>{" "}
                    </Link>{" "}
                    <Link
                      to="/"
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

              <div className="block block-list block-cart">
                <div className="block-title"> My Cart </div>
                <div className="block-content">
                  <div className="summary">
                    <p className="amount">
                      There is <Link to={" "}>1 item</Link> in your cart.
                    </p>
                    <p className="subtotal">
                      {" "}
                      <span className="label">Cart Subtotal:</span>{" "}
                      <span className="price">$299.00</span>{" "}
                    </p>
                  </div>
                  <div className="ajax-checkout">
                    <button
                      type="button"
                      title="Checkout"
                      className="button button-checkout"
                      onClick={() => {}}
                    >
                      <span>Checkout</span>{" "}
                    </button>
                  </div>
                  <p className="block-subtitle">Recently added item(s)</p>
                  <ul id="cart-sidebar1" className="mini-products-list">
                    <li className="item">
                      <div className="item-inner">
                        {" "}
                        <Link to={" "} className="product-image">
                          <img
                            src="/assets/img/p1.jpg"
                            width="80"
                            alt="product"
                          />
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
                          <strong>1</strong> x{" "}
                          <span className="price">$299.00</span>
                          <p className="product-name">
                            <Link to={" "}>Fresh Organic Mustard Leaves </Link>
                          </p>
                        </div>
                        {/* <!--product-details-bottoms--> */}
                      </div>
                    </li>
                    <li className="item  last1">
                      <div className="item-inner">
                        {" "}
                        <Link to={" "} className="product-image">
                          <img
                            src="/assets/img/p2.jpg"
                            width="80"
                            alt="product"
                          />
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
                          <strong>1</strong> x{" "}
                          <span className="price">$299.00</span>
                          <p className="product-name">
                            <Link to={" "}>Fresh Organic Mustard Leaves </Link>
                          </p>
                        </div>
                        {/* <!--product-details-bottoms--> */}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="block block-compare">
                <div className="block-title"> Compare Products </div>
                <div className="block-content">
                  <ol id="compare-items">
                    <li className="item odd">
                      <Link
                        to={" "}
                        className="btn-remove1"
                        onClick={() => {}}
                      ></Link>
                      <Link className="product-name" to={" "}>
                        Fresh Organic Mustard Leaves{" "}
                      </Link>{" "}
                    </li>
                    <li className="item odd">
                      <Link
                        to={" "}
                        className="btn-remove1"
                        onClick={() => {}}
                      ></Link>
                      <Link className="product-name" to={" "}>
                        Fresh Organic Mustard Leaves{" "}
                      </Link>{" "}
                    </li>
                    <li className="item odd">
                      <Link
                        to={" "}
                        className="btn-remove1"
                        onClick={() => {}}
                      ></Link>
                      <Link className="product-name" to={" "}>
                        Fresh Organic Mustard Leaves{" "}
                      </Link>{" "}
                    </li>
                    <li className="item odd">
                      <Link
                        to={" "}
                        className="btn-remove1"
                        onClick={() => {}}
                      ></Link>
                      <Link className="product-name" to={" "}>
                        Fresh Organic Mustard Leaves{" "}
                      </Link>{" "}
                    </li>
                  </ol>

                  <div className="ajax-checkout">
                    <button
                      type="button"
                      title="Compare"
                      className="button button-compare"
                      onClick={() => {}}
                    >
                      <span>Compare</span>
                    </button>
                  </div>

                  {/* <!--ajax-checkout--> */}
                </div>

                {/* <!--block-content--> */}
              </div>

              {/* <!--block block-list block-compare--> */}
            </aside>

            {/* <!--col-right sidebar--> */}
          </div>

          {/* <!--row--> */}
        </div>

        {/* <!--container--> */}
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
