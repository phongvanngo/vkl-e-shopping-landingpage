import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";

class List extends Component {
  componentDidMount() {
    window.commonjs();
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
                      <Link href="index.html" title="Go to Home Page">
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
                {/* 
                                // <!--col-xs-12--> */}
              </div>
              {/* 
                            // <!--row--> */}
            </div>
            {/* 
                        // <!--container--> */}
          </div>
          <div className="page-title">
            <h2>Vegetables</h2>
          </div>
        </div>

        <section className="main-container col2-left-layout bounceInUp animated">
          <div className="container">
            <div className="row">
              <div className="col-main col-sm-9 col-sm-push-3 product-list">
                <div className="pro-coloumn">
                  <div className="category-description std">
                    <div className="slider-items-products">
                      <div id="category-desc-slider" className="product-flexslider hidden-buttons">
                        <div className="slider-items slider-width-col1 owl-carousel owl-theme">
                          <div className="item">
                            {" "}
                            <Link href="#">
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

                          <div className="item">
                            {" "}
                            <Link href="#">
                              <img alt="" src="/assets/img/category-img2.jpg" />
                            </Link>
                            <div className="cat-img-title cat-bg cat-box">
                              <div className="small-tag">Green World</div>
                              <h2 className="cat-heading">
                                Vegetable <span>sale</span>
                              </h2>
                              <p>Save 70% on all items</p>
                            </div>
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
                          <Link to={"/grid"} title="Grid" className="button button-grid">
                            &nbsp;
                          </Link>
                          &nbsp;{" "}
                          <span title="List" className="button button-active button-list">
                            &nbsp;
                          </span>
                          &nbsp;
                        </div>
                      </div>
                      <div className="sort-by">
                        <label className="left">Sort By: </label>
                        <ul>
                          <li>
                            <Link href="#">
                              Position<span className="right-arrow"></span>
                            </Link>
                            <ul>
                              <li>
                                <Link href="#">Name</Link>
                              </li>
                              <li>
                                <Link href="#">Price</Link>
                              </li>
                              <li>
                                <Link href="#">Position</Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                        <Link className="button-asc left" href="#" title="Set Descending Direction">
                          <span className="top_arrow"></span>
                        </Link>
                      </div>
                      <div className="pager">
                        <div className="limiter">
                          <label>View: </label>
                          <ul>
                            <li>
                              <Link href="#">
                                15<span className="right-arrow"></span>
                              </Link>
                              <ul>
                                <li>
                                  <Link href="#">20</Link>
                                </li>
                                <li>
                                  <Link href="#">30</Link>
                                </li>
                                <li>
                                  <Link href="#">35</Link>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </div>
                        <div className="pages">
                          <label>Page:</label>
                          <ul className="pagination">
                            <li>
                              <Link href="#">&laquo;</Link>
                            </li>
                            <li className="active">
                              <Link href="#">1</Link>
                            </li>
                            <li>
                              <Link href="#">2</Link>
                            </li>
                            <li>
                              <Link href="#">3</Link>
                            </li>
                            <li>
                              <Link href="#">4</Link>
                            </li>
                            <li>
                              <Link href="#">5</Link>
                            </li>
                            <li>
                              <Link href="#">&raquo;</Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="category-products">
                      <ol className="products-list" id="products-list">
                        <li className="item first">
                          <div className="product-image">
                            <Link href="product-detail.html" title="HTC Rhyme Sense">
                              <img
                                className="small-image"
                                src="/assets/img/p1.jpg"
                                alt="HTC Rhyme Sense"
                              />{" "}
                            </Link>{" "}
                          </div>
                          <div className="product-shop">
                            <h2 className="product-name">
                              <Link href="product-detail.html" title="HTC Rhyme Sense">
                                Fresh Organic Mustard Leaves
                              </Link>
                            </h2>
                            <div className="ratings">
                              <div className="rating-box">
                                <div className="rating"></div>
                              </div>
                              <p className="rating-links">
                                {" "}
                                <Link href="#/review/product/list/id/167/category/35/">
                                  1 Review(s)
                                </Link>{" "}
                                <span className="separator">|</span>{" "}
                                <Link href="#review-form">Add Your Review</Link>{" "}
                              </p>
                            </div>
                            <div className="desc std">
                              <p>
                                Sed volutpat ac massa eget lacinia. Aenean volutpat lacus at dolor
                                blandit{" "}
                              </p>
                              <p>
                                Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu,
                                tincidunt mi. Vivamus dictum nec...{" "}
                                <Link className="link-learn" title="" href="#">
                                  Learn More
                                </Link>{" "}
                              </p>
                            </div>
                            <div className="price-box">
                              <p className="old-price">
                                {" "}
                                <span className="price-label"></span>{" "}
                                <span id="old-price-212" className="price">
                                  {" "}
                                  $442.99{" "}
                                </span>{" "}
                              </p>
                              <p className="special-price">
                                {" "}
                                <span className="price-label"></span>{" "}
                                <span id="product-price-212" className="price">
                                  {" "}
                                  $222.99{" "}
                                </span>{" "}
                              </p>
                            </div>
                            <div className="actions">
                              <button
                                className="button btn-cart ajx-cart"
                                title="Add to Cart"
                                type="button"
                              >
                                <span>Add to Cart</span>
                              </button>
                              <span className="add-to-links">
                                {" "}
                                <Link
                                  title="Add to Wishlist"
                                  className="button link-wishlist"
                                  href="#"
                                >
                                  <span>Add to Wishlist</span>
                                </Link>{" "}
                                <Link
                                  title="Add to Compare"
                                  className="button link-compare"
                                  href="#"
                                >
                                  <span>Add to Compare</span>
                                </Link>{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </li>
                        <li className="item even">
                          <div className="product-image">
                            {" "}
                            <Link href="product-detail.html" title="Microsoft Natural Keyboard">
                              {" "}
                              <img
                                className="small-image"
                                src="/assets/img/p2.jpg"
                                alt="Microsoft Natural Keyboard"
                              />
                            </Link>{" "}
                          </div>
                          <div className="product-shop">
                            <h2 className="product-name">
                              <Link href="product-detail.html" title="Microsoft Natural Keyboard">
                                Fresh Organic Mustard Leaves
                              </Link>
                            </h2>
                            <div className="desc std">
                              <p>
                                Sed volutpat ac massa eget lacinia. Suspendisse non purus semper,
                                tellus vel, tristique urna. Aenean volutpat lacus at dolor blandit.{" "}
                              </p>
                              <p>
                                Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu,
                                tincidunt mi. Vivamus dignissimm ...{" "}
                                <Link className="link-learn" title="" href="#">
                                  Learn More
                                </Link>
                              </p>
                            </div>
                            <div className="price-box">
                              {" "}
                              <span className="regular-price" id="product-price-159">
                                {" "}
                                <span className="price">$99.99</span>
                              </span>{" "}
                            </div>
                            <div className="actions">
                              <button
                                className="button btn-cart ajx-cart"
                                title="Add to Cart"
                                type="button"
                              >
                                <span>Add to Cart</span>
                              </button>
                              <span className="add-to-links">
                                {" "}
                                <Link
                                  title="Add to Wishlist"
                                  className="button link-wishlist"
                                  href="#"
                                >
                                  <span>Add to Wishlist</span>
                                </Link>{" "}
                                <Link
                                  title="Add to Compare"
                                  className="button link-compare"
                                  href="#"
                                >
                                  <span>Add to Compare</span>
                                </Link>{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </li>
                        <li className="item odd">
                          <div className="product-image">
                            {" "}
                            <Link href="product-detail.html" title='30" Flat-Panel HD Monitor'>
                              {" "}
                              <img
                                className="small-image"
                                src="/assets/img/p3.jpg"
                                alt='30" Flat-Panel HD Monitor'
                              />{" "}
                            </Link>{" "}
                          </div>
                          <div className="product-shop">
                            <h2 className="product-name">
                              <Link href="product-detail.html" title='30" Flat-Panel HD Monitor'>
                                Fresh Organic Mustard Leaves
                              </Link>
                            </h2>
                            <div className="desc std">
                              Computer games, digital photo editing and graphic applications will
                              astound you on this huge 30" flat-panel monitor.
                              <p>
                                Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu,
                                tincidunt mi.{" "}
                              </p>
                              <p>
                                Phasellus consequat id purus in convallis. Nulla quis...{" "}
                                <Link className="link-learn" title="" href="#">
                                  Learn More
                                </Link>
                              </p>
                            </div>
                            <div className="price-box">
                              {" "}
                              <span className="regular-price" id="product-price-157">
                                {" "}
                                <span className="price">$699.99</span>
                              </span>{" "}
                            </div>
                            <div className="actions">
                              <button
                                className="button btn-cart ajx-cart"
                                title="Add to Cart"
                                type="button"
                              >
                                <span>Add to Cart</span>
                              </button>
                              <span className="add-to-links">
                                {" "}
                                <Link
                                  title="Add to Wishlist"
                                  className="button link-wishlist"
                                  href="#"
                                >
                                  <span>Add to Wishlist</span>
                                </Link>{" "}
                                <Link
                                  title="Add to Compare"
                                  className="button link-compare"
                                  href="#"
                                >
                                  <span>Add to Compare</span>
                                </Link>{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </li>
                        <li className="item even">
                          <div className="product-image">
                            {" "}
                            <Link href="product-detail.html" title='19" Widescreen LCD Monitor'>
                              {" "}
                              <img
                                className="small-image"
                                src="/assets/img/p4.jpg"
                                alt='19" Widescreen LCD Monitor'
                              />{" "}
                            </Link>{" "}
                          </div>
                          <div className="product-shop">
                            <h2 className="product-name">
                              <Link href="product-detail.html" title='19" Widescreen LCD Monitor'>
                                Fresh Organic Mustard Leaves
                              </Link>
                            </h2>
                            <div className="desc std">
                              2 ms response time; 10,000:1 contrast ratio; 300 cd/m² brightness;
                              1440 x 900 maximum resolution; DVI-D and 15-pin D-sub inputs
                              <p>
                                Phasellus consequat id purus pretium enimnec, tristique...{" "}
                                <Link className="link-learn" title="" href="#">
                                  Learn More
                                </Link>{" "}
                              </p>
                            </div>
                            <div className="price-box">
                              {" "}
                              <span className="regular-price" id="product-price-156">
                                {" "}
                                <span className="price">$399.99</span>
                              </span>{" "}
                            </div>
                            <div className="actions">
                              <button
                                className="button btn-cart ajx-cart"
                                title="Add to Cart"
                                type="button"
                              >
                                <span>Add to Cart</span>
                              </button>
                              <span className="add-to-links">
                                {" "}
                                <Link
                                  title="Add to Wishlist"
                                  className="button link-wishlist"
                                  href="#"
                                >
                                  <span>Add to Wishlist</span>
                                </Link>{" "}
                                <Link
                                  title="Add to Compare"
                                  className="button link-compare"
                                  href="#"
                                >
                                  <span>Add to Compare</span>
                                </Link>{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </li>
                        <li className="item odd">
                          <div className="product-image">
                            {" "}
                            <Link href="product-detail.html" title="Seagate 250GB HD ">
                              {" "}
                              <img
                                className="small-image"
                                src="/assets/img/p5.jpg"
                                alt="Seagate 250GB HD "
                              />{" "}
                            </Link>
                          </div>
                          <div className="product-shop">
                            <h2 className="product-name">
                              <Link href="product-detail.html" title="Seagate 250GB HD ">
                                Fresh Organic Mustard Leaves
                              </Link>
                            </h2>
                            <div className="desc std">
                              1 TB - 7200RPM, SATA 3.0Gb/s, 32MB Cache
                              <p>
                                Maecenas vehicula volutpat elit, in interdum lacus faucibus sit
                                amet.{" "}
                              </p>
                              <p>
                                Sed sed interdum diam. Donec sit ametenim tempor, dapibus nunc eu,
                                tincidunt mi. Vivamus dignissim nisl. Donec eget feugiat ante.
                                Integerarcu libero, dictum nec congue sed, faucibus ...{" "}
                                <Link className="link-learn" title="" href="#">
                                  Learn More
                                </Link>{" "}
                              </p>
                            </div>
                            <div className="price-box">
                              {" "}
                              <span className="regular-price" id="product-price-155">
                                {" "}
                                <span className="price">$99.00</span>
                              </span>{" "}
                            </div>
                            <div className="actions">
                              <button
                                className="button btn-cart ajx-cart"
                                title="Add to Cart"
                                type="button"
                              >
                                <span>Add to Cart</span>
                              </button>
                              <span className="add-to-links">
                                {" "}
                                <Link
                                  title="Add to Wishlist"
                                  className="button link-wishlist"
                                  href="#"
                                >
                                  <span>Add to Wishlist</span>
                                </Link>{" "}
                                <Link
                                  title="Add to Compare"
                                  className="button link-compare"
                                  href="#"
                                >
                                  <span>Add to Compare</span>
                                </Link>{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </li>
                        <li className="item even">
                          <div className="product-image">
                            {" "}
                            <Link href="product-detail.html" title="Seagate 500GB HD">
                              {" "}
                              <img
                                className="small-image"
                                src="/assets/img/p6.jpg"
                                alt="Seagate 500GB HD"
                              />{" "}
                            </Link>{" "}
                          </div>
                          <div className="product-shop">
                            <h2 className="product-name">
                              <Link href="product-detail.html" title="Seagate 500GB HD">
                                Fresh Organic Mustard Leaves
                              </Link>
                            </h2>
                            <div className="desc std">
                              1 TB - 7200RPM, SATA 3.0Gb/s, 32MB Cache
                              <p>
                                Aenean volutpat lacus at dolor blandit, vitae lobortisante semper.
                                Ut bibendum metusfringilla, in interdum lacus faucibus sit amet.
                              </p>
                              <p>
                                {" "}
                                Donec eget feugiat ante. Integerarcu libero...{" "}
                                <Link className="link-learn" title="" href="#">
                                  Learn More
                                </Link>{" "}
                              </p>
                            </div>
                            <div className="price-box">
                              {" "}
                              <span className="regular-price" id="product-price-154">
                                {" "}
                                <span className="price">
                                  $299<span className="sub">.00</span>
                                </span>{" "}
                              </span>{" "}
                            </div>
                            <div className="actions">
                              <button
                                className="button btn-cart ajx-cart"
                                title="Add to Cart"
                                type="button"
                              >
                                <span>Add to Cart</span>
                              </button>
                              <span className="add-to-links">
                                {" "}
                                <Link
                                  title="Add to Wishlist"
                                  className="button link-wishlist"
                                  href="#"
                                >
                                  <span>Add to Wishlist</span>
                                </Link>{" "}
                                <Link
                                  title="Add to Compare"
                                  className="button link-compare"
                                  href="#"
                                >
                                  <span>Add to Compare</span>
                                </Link>{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </li>
                        <li className="item odd">
                          <div className="product-image">
                            {" "}
                            <Link href="product-detail.html" title="Intel Core 2 Extreme QX9775">
                              {" "}
                              <img
                                className="small-image"
                                src="/assets/img/p7.jpg"
                                alt="Intel Core 2 Extreme QX9775"
                              />
                            </Link>{" "}
                          </div>
                          <div className="product-shop">
                            <h2 className="product-name">
                              <Link href="product-detail.html" title="Intel Core 2 Extreme QX9775">
                                Fresh Organic Mustard Leaves
                              </Link>
                            </h2>
                            <div className="desc std">
                              Intel Core 2 Extreme QX9775 Processor BX80574QX9775 - 45nm, 3.20GHz,
                              12MB Cache, 1600MHz FSB,
                              <p>
                                Vivamus dignissim nisl eu euismod ullamcorper. Donec pellentesque
                                diam id est tristique vestibulum. Donec eget feugiat ante.
                                Integerarcu libero, dictum nec congue sed, faucibus sit amet lectus.{" "}
                              </p>
                              <p>
                                Phasellus consequat...{" "}
                                <Link className="link-learn" title="" href="#">
                                  Learn More
                                </Link>{" "}
                              </p>
                            </div>
                            <div className="price-box">
                              {" "}
                              <span className="regular-price" id="product-price-153">
                                {" "}
                                <span className="price">$2,049.99</span>
                              </span>{" "}
                            </div>
                            <div className="actions">
                              <button
                                className="button btn-cart ajx-cart"
                                title="Add to Cart"
                                type="button"
                              >
                                <span>Add to Cart</span>
                              </button>
                              <span className="add-to-links">
                                {" "}
                                <Link
                                  title="Add to Wishlist"
                                  className="button link-wishlist"
                                  href="#"
                                >
                                  <span>Add to Wishlist</span>
                                </Link>{" "}
                                <Link
                                  title="Add to Compare"
                                  className="button link-compare"
                                  href="#"
                                >
                                  <span>Add to Compare</span>
                                </Link>{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </li>
                        <li className="item even">
                          <div className="product-image">
                            {" "}
                            <Link href="product-detail.html" title='24" Widescreen LCD Monitor'>
                              {" "}
                              <img
                                className="small-image"
                                src="/assets/img/p8.jpg"
                                alt='24" Widescreen LCD Monitor'
                              />{" "}
                            </Link>{" "}
                          </div>
                          <div className="product-shop">
                            <h2 className="product-name">
                              <Link href="product-detail.html" title='24" Widescreen LCD Monitor'>
                                Fresh Organic Mustard Leaves
                              </Link>
                            </h2>
                            <div className="desc std">
                              5 ms response time; 10,000:1 contrast ratio; 400 cd/m² brightness;
                              1920 x 1200 maximum resolution; DVI-D and 15-pin D-sub inputs
                              <p> tellus vel, tristique urna. </p>
                              <p>
                                Phasellus consequat id purus in convallis. Nulla quis nunc auctor,
                                pretium enimnec, tristique magna...{" "}
                                <Link className="link-learn" title="" href="#">
                                  Learn More
                                </Link>{" "}
                              </p>
                            </div>
                            <div className="price-box">
                              {" "}
                              <span className="regular-price" id="product-price-152">
                                {" "}
                                <span className="price">$699.99</span>
                              </span>{" "}
                            </div>
                            <div className="actions">
                              <button
                                className="button btn-cart ajx-cart"
                                title="Add to Cart"
                                type="button"
                              >
                                <span>Add to Cart</span>
                              </button>
                              <span className="add-to-links">
                                {" "}
                                <Link
                                  title="Add to Wishlist"
                                  className="button link-wishlist"
                                  href="#"
                                >
                                  <span>Add to Wishlist</span>
                                </Link>{" "}
                                <Link
                                  title="Add to Compare"
                                  className="button link-compare"
                                  href="#"
                                >
                                  <span>Add to Compare</span>
                                </Link>{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </li>
                        <li className="item odd">
                          <div className="product-image">
                            {" "}
                            <Link href="product-detail.html" title="Logitech Optical Trackman">
                              {" "}
                              <img
                                className="small-image"
                                src="/assets/img/p9.jpg"
                                alt="Logitech Optical Trackman"
                              />
                            </Link>{" "}
                          </div>
                          <div className="product-shop">
                            <h2 className="product-name">
                              <Link href="product-detail.html" title="Logitech Optical Trackman">
                                Fresh Organic Mustard Leaves
                              </Link>
                            </h2>
                            <div className="desc std">
                              Our most advanced trackball yet. Save space and eliminate desktop
                              clutter.
                              <p>
                                Donec eget feugiat ante. Integerarcu libero, dictum nec congue sed,
                                faucibus sit amet lectus.{" "}
                              </p>
                              <p>
                                Vivamus vitae arcu faucibus, dictum magna vel, adipiscing...{" "}
                                <Link className="link-learn" title="" href="#">
                                  Learn More
                                </Link>{" "}
                              </p>
                            </div>
                            <div className="price-box">
                              {" "}
                              <span className="regular-price" id="product-price-160">
                                {" "}
                                <span className="price">$79.99</span>
                              </span>{" "}
                            </div>
                            <div className="actions">
                              <button
                                className="button btn-cart ajx-cart"
                                title="Add to Cart"
                                type="button"
                              >
                                <span>Add to Cart</span>
                              </button>
                              <span className="add-to-links">
                                {" "}
                                <Link
                                  title="Add to Wishlist"
                                  className="button link-wishlist"
                                  href="#"
                                >
                                  <span>Add to Wishlist</span>
                                </Link>{" "}
                                <Link
                                  title="Add to Compare"
                                  className="button link-compare"
                                  href="#"
                                >
                                  <span>Add to Compare</span>
                                </Link>{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </li>
                        <li className="item last even">
                          <div className="product-image">
                            {" "}
                            <Link href="product-detail.html" title="Logitech diNovo Edge Keyboard">
                              {" "}
                              <img
                                className="small-image"
                                src="/assets/img/p10.jpg"
                                alt="Logitech diNovo Edge Keyboard"
                              />{" "}
                            </Link>{" "}
                          </div>
                          <div className="product-shop">
                            <h2 className="product-name">
                              <Link
                                href="product-detail.html"
                                title="Logitech diNovo Edge Keyboard"
                              >
                                Fresh Organic Mustard Leaves
                              </Link>
                            </h2>
                            <div className="ratings">
                              <div className="rating-box">
                                <div className="rating"></div>
                              </div>
                              <p className="rating-links">
                                {" "}
                                <Link href="#/review/product/list/id/167/category/35/">
                                  1 Review(s)
                                </Link>{" "}
                                <span className="separator">|</span>{" "}
                                <Link href="#">Add Your Review</Link>{" "}
                              </p>
                            </div>
                            <div className="desc std">
                              Li-Ion powered.
                              <p>
                                Sed volutpat ac massa eget lacinia. Suspendisse non purus semper,
                                vitae lobortisante semper.{" "}
                              </p>
                              <p>
                                Integerarcu libero, dictum nec congue sed, faucibus sit...{" "}
                                <Link className="link-learn" title="" href="#">
                                  Learn More
                                </Link>{" "}
                              </p>
                            </div>
                            <div className="price-box">
                              {" "}
                              <span className="regular-price" id="product-price-161">
                                {" "}
                                <span className="price">$239.99</span>
                              </span>{" "}
                            </div>
                            <div className="actions">
                              <button
                                className="button btn-cart ajx-cart"
                                title="Add to Cart"
                                type="button"
                              >
                                <span>Add to Cart</span>
                              </button>
                              <span className="add-to-links">
                                {" "}
                                <Link
                                  title="Add to Wishlist"
                                  className="button link-wishlist"
                                  href="#"
                                >
                                  <span>Add to Wishlist</span>
                                </Link>{" "}
                                <Link
                                  title="Add to Compare"
                                  className="button link-compare"
                                  href="#"
                                >
                                  <span>Add to Compare</span>
                                </Link>{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </li>
                      </ol>
                    </div>
                    <div className="toolbar bottom">
                      <div className="display-product-option">
                        <div className="pages">
                          <label>Page:</label>
                          <ul className="pagination">
                            <li>
                              <Link href="#">«</Link>
                            </li>
                            <li className="active">
                              <Link href="#">1</Link>
                            </li>
                            <li>
                              <Link href="#">2</Link>
                            </li>
                            <li>
                              <Link href="#">3</Link>
                            </li>
                            <li>
                              <Link href="#">»</Link>
                            </li>
                          </ul>
                        </div>
                        <div className="product-option-right">
                          <div className="sort-by">
                            <label className="left">Sort By: </label>
                            <ul>
                              <li>
                                <Link href="#">
                                  Position<span className="right-arrow"></span>
                                </Link>
                                <ul>
                                  <li>
                                    <Link href="#">Name</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Price</Link>
                                  </li>
                                  <li>
                                    <Link href="#">Position</Link>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                            <Link
                              className="button-asc left"
                              href="#"
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
                                  <Link href="#">
                                    15<span className="right-arrow"></span>
                                  </Link>
                                  <ul>
                                    <li>
                                      <Link href="#">20</Link>
                                    </li>
                                    <li>
                                      <Link href="#">30</Link>
                                    </li>
                                    <li>
                                      <Link href="#">35</Link>
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
                <div className="side-nav-categories">
                  <div className="block-title"> Categories </div>

                  {/* <!--block-title--> */}

                  {/* <!-- BEGIN BOX-CATEGORY --> */}
                  <div className="box-content box-category">
                    <ul>
                      <li>
                        {" "}
                        <Link className="active" to={"/grid"}>
                          Fruits
                        </Link>{" "}
                        <span className="subDropdown minus"></span>
                        <ul className="level0_415">
                          <li>
                            {" "}
                            <Link to={"/grid"}> Tropical Fruits </Link>{" "}
                            <span className="subDropdown plus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Coconuts</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Dragonfruits</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Pomegranates</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Passionfruit</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          {/* <!--level1--> */}
                          <li>
                            {" "}
                            <Link to={"/grid"}>Citrus Fruits </Link>{" "}
                            <span className="subDropdown plus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Fresh Oranges</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Grapefruits</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Organic Limes</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Yellow Lemons</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          {/* <!--level1--> */}
                          <li>
                            {" "}
                            <Link to={"/grid"}>Stone Fruits</Link>{" "}
                            <span className="subDropdown plus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Sweet Apricots</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Nectarines</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Doughnut Peachs</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Italian Fruits</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          {/* <!--level1--> */}
                          <li>
                            {" "}
                            <Link to={"/grid"}>Seasonal Fruits </Link>{" "}
                            <span className="subDropdown plus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Black Jamuns</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Fresh Mangos</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Organic Litchis</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Longans</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          <li>
                            {" "}
                            <Link to={"/grid"}>Berries & Cherries </Link>{" "}
                            <span className="subDropdown plus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Strawberries</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Raspberries</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Blackberries</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Cherries</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>
                        </ul>
                        {/* <!--level0--> */}
                      </li>

                      {/* <!--level 0--> */}
                      <li>
                        {" "}
                        <Link to={"/grid"}>Salads</Link> <span className="subDropdown plus"></span>
                        <ul className="level0_415">
                          <li>
                            {" "}
                            <Link to={"/grid"}> Veg Salads </Link>{" "}
                            <span className="subDropdown minus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Tomatoes</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Cucumbers</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Peppers & Capsicums</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Avocados</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          {/* <!--level1--> */}
                          <li>
                            {" "}
                            <Link to={"/grid"}>Dressings Salads</Link>{" "}
                            <span className="subDropdown minus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Hellmann's</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Giuseppe Giusti</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Unitednature</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Walden Farms</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          {/* <!--level1--> */}
                          <li>
                            {" "}
                            <Link to={"/grid"}>Fruits Salads</Link>{" "}
                            <span className="subDropdown minus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Pineapples</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Red Apple</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Strawberries</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Row Mangos</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          {/* <!--level1--> */}
                          <li>
                            {" "}
                            <Link to={"/grid"}>Bagged Salads</Link>{" "}
                            <span className="subDropdown minus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Italian Baby Spinach</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Australia Green Kale</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Sustenir Fresh Toscano</span>
                                </Link>
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Oro Rocket Salad</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          {/* <!--level1--> */}
                          <li>
                            {" "}
                            <Link to={"/grid"}>Lettuce Salads</Link>{" "}
                            <span className="subDropdown minus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Butterhead</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Red Coral</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Rolla Rosa Lettuce</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Summercrisp</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          {/* <!--level1--> */}
                          <li>
                            {" "}
                            <Link to={"/grid"}>Bread Salads</Link>{" "}
                            <span className="subDropdown minus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Green Goddess</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Grilled Broccoli</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Panzanella</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Green Tomato</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>
                        </ul>
                        {/* <!--level0--> */}
                      </li>

                      {/* <!--level 0--> */}
                      <li>
                        {" "}
                        <Link to={" "}>Vegetables</Link> <span className="subDropdown plus"></span>
                        <ul className="level0_482">
                          <li>
                            {" "}
                            <Link to={"/grid"}>Leafy Vegetables</Link>{" "}
                            <span className="subDropdown minus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Sprouts</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Lettuce</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Banana Leaves</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Microgreens</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          {/* <!--level1--> */}
                          <li>
                            {" "}
                            <Link to={"/grid"}>Mushrooms</Link>{" "}
                            <span className="subDropdown minus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Shimeji Mushroom</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Portobello Mushroom</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Oyster Mushroom</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Shiitake Mushroom</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          {/* <!--level1--> */}
                          <li>
                            {" "}
                            <Link to={"/grid"}>Baby Vegetables</Link>{" "}
                            <span className="subDropdown minus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Cabbage</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Capsicums</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Pak Choi</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Spinach</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          {/* <!--level1--> */}
                          <li>
                            {" "}
                            <Link to={"/grid"}>Salad Vegetables</Link>{" "}
                            <span className="subDropdown minus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Cucumbers</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Avocados</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Mustard Leaves</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Tomatoes</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          {/* <!--level1--> */}
                          <li>
                            {" "}
                            <Link to={"/grid"}>Asian Vegetables</Link>{" "}
                            <span className="subDropdown minus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Spring Onion</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Lady Fingers</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Watercress</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Curry Leaves</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          {/* <!--level1--> */}
                          <li>
                            {" "}
                            <Link to={"/grid"}>Beans Vegetables</Link>{" "}
                            <span className="subDropdown minus"></span>
                            <ul className="level1">
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>French Beans</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Sweet Corn</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Fine Green Beans</span>
                                </Link>{" "}
                              </li>
                              <li>
                                {" "}
                                <Link to={"/grid"}>
                                  <span>Petai Beans</span>
                                </Link>{" "}
                              </li>
                            </ul>
                            {/* <!--level1--> */}
                          </li>

                          {/* <!--level1--> */}
                        </ul>
                        {/* <!--level0--> */}
                      </li>

                      {/* <!--level 0--> */}
                      <li>
                        {" "}
                        <Link to={"/grid"}>Juices‎</Link>{" "}
                      </li>
                      <li>
                        {" "}
                        <Link to={"/grid"}>Meats‎</Link>{" "}
                      </li>

                      {/* <!--level 0--> */}
                    </ul>
                  </div>

                  {/* <!--box-content box-category--> */}
                </div>

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
                            <Link href="#">
                              <span className="price">$0.00</span> -{" "}
                              <span className="price">$99.99</span>
                            </Link>{" "}
                            (6){" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="#">
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
                            <Link href="#">TheBrand</Link> (9){" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="#">Company</Link> (4){" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="#">LogoFashion</Link> (1){" "}
                          </li>
                        </ol>
                      </dd>
                      <dt className="odd">Color</dt>
                      <dd className="odd">
                        <ol>
                          <li>
                            {" "}
                            <Link href="#">Green</Link> (1){" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="#">White</Link> (5){" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="#">Black</Link> (5){" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="#">Gray</Link> (4){" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="#">Dark Gray</Link> (3){" "}
                          </li>
                        </ol>
                      </dd>
                      <dt className="last even">Size</dt>
                      <dd className="last even">
                        <ol>
                          <li>
                            {" "}
                            <Link href="#">Small</Link> (6){" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="#">Medium</Link> (6){" "}
                          </li>
                          <li>
                            {" "}
                            <Link href="#">Large</Link> (4){" "}
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
                              <Link title=" Sample Product" href="product-detail.html">
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
                              <Link title=" Sample Product" href="product-detail.html">
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
                              <Link title=" Sample Product" href="product-detail.html">
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

                <div className="block block-list block-cart">
                  <div className="block-title"> My Cart </div>
                  <div className="block-content">
                    <div className="summary">
                      <p className="amount">
                        There is <Link href="#">1 item</Link> in your cart.
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
                        onClick="#"
                      >
                        <span>Checkout</span>{" "}
                      </button>
                    </div>
                    <p className="block-subtitle">Recently added item(s)</p>
                    <ul id="cart-sidebar1" className="mini-products-list">
                      <li className="item">
                        <div className="item-inner">
                          {" "}
                          <Link href="#" className="product-image">
                            <img src="/assets/img/p1.jpg" width="80" alt="product" />
                          </Link>
                          <div className="product-details">
                            <div className="access">
                              {" "}
                              <Link href="#" className="btn-remove1">
                                Remove
                              </Link>
                              <Link href="" title="Edit item" className="btn-edit">
                                <i className="icon-pencil"></i>
                                <span className="hidden">Edit item</span>
                              </Link>{" "}
                            </div>
                            {/* <!--access--> */}
                            <strong>1</strong> x <span className="price">$299.00</span>
                            <p className="product-name">
                              <Link href="#">Fresh Organic Mustard Leaves </Link>
                            </p>
                          </div>
                          {/* <!--product-details-bottoms--> */}
                        </div>
                      </li>
                      <li className="item  last1">
                        <div className="item-inner">
                          <Link href="#" className="product-image">
                            <img src="/assets/img/p2.jpg" width="80" alt="product" />
                          </Link>
                          <div className="product-details">
                            <div className="access">
                              {" "}
                              <Link href="#" className="btn-remove1">
                                Remove
                              </Link>
                              <Link href="" title="Edit item" className="btn-edit">
                                <i className="icon-pencil"></i>
                                <span className="hidden">Edit item</span>
                              </Link>{" "}
                            </div>
                            {/* <!--access--> */}
                            <strong>1</strong> x <span className="price">$299.00</span>
                            <p className="product-name">
                              <Link href="#">Fresh Organic Mustard Leaves </Link>
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
                        <Link href="#" className="btn-remove1" onClick="#"></Link>
                        <Link className="product-name" href="#">
                          Fresh Organic Mustard Leaves{" "}
                        </Link>{" "}
                      </li>
                      <li className="item odd">
                        <Link href="#" className="btn-remove1" onClick="#"></Link>
                        <Link className="product-name" href="#">
                          Fresh Organic Mustard Leaves{" "}
                        </Link>{" "}
                      </li>
                      <li className="item odd">
                        <Link href="#" className="btn-remove1" onClick="#"></Link>
                        <Link className="product-name" href="#">
                          Fresh Organic Mustard Leaves{" "}
                        </Link>{" "}
                      </li>
                      <li className="item odd">
                        <Link href="#" className="btn-remove1" onClick="#"></Link>
                        <Link className="product-name" href="#">
                          Fresh Organic Mustard Leaves{" "}
                        </Link>{" "}
                      </li>
                    </ol>

                    <div className="ajax-checkout">
                      <button
                        type="button"
                        title="Compare"
                        className="button button-compare"
                        onClick="#"
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
            </div>
          </div>
        </section>

        <Footer />
      </>
    );
  }
}
export default List;
