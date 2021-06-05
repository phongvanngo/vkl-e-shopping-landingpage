import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Header from "../layout/header";
import Footer from "../layout/footer";

class Dashboard extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="page-title">
                  <h2>Dashboard</h2>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="main-container col2-right-layout">
          <div className="main container">
            <div className="row">
              <section
                className="col-main col-sm-9 col-xs-12 wow bounceInUp animated animated"
                style={{ visibility: "visible" }}
              >
                <div className="my-account">
                  {/* <!--page-title-->  */}
                  {/* <!-- BEGIN DASHBOARD--> */}
                  <div className="dashboard">
                    <div className="welcome-msg">
                      <p className="hello">
                        <strong>Hello, john doe!</strong>
                      </p>
                      <p>
                        From your My Account Dashboard you have the ability to
                        view a snapshot of your recent account activity and
                        update your account information. Select a link below to
                        view or edit information.
                      </p>
                    </div>
                    <div className="recent-orders">
                      <div className="title-buttons">
                        {" "}
                        <strong>Recent Orders</strong> <a href="#">View All</a>{" "}
                      </div>
                      <div className="table-responsive">
                        <table
                          className="data-table table-striped"
                          id="my-orders-table"
                        >
                          <thead>
                            <tr className="first last">
                              <th>Order # </th>
                              <th>Date</th>
                              <th>Ship To</th>
                              <th>
                                <span className="nobr">Order Total</span>
                              </th>
                              <th>Status</th>
                              <th>&nbsp;</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="first odd">
                              <td>12800000002</td>
                              <td>
                                <span className="nobr">5/12/2015</span>
                              </td>
                              <td>jhon doe</td>
                              <td>
                                <span className="price">$403.00</span>
                              </td>
                              <td>
                                <em>Pending</em>
                              </td>
                              <td className="a-center last">
                                <span className="nobr">
                                  {" "}
                                  <a href="#">View Order</a>{" "}
                                </span>
                              </td>
                            </tr>
                            <tr className="even">
                              <td>12800000001</td>
                              <td>
                                <span className="nobr">5/11/2015</span>
                              </td>
                              <td>jhon doe</td>
                              <td>
                                <span className="price">$506.50</span>
                              </td>
                              <td>
                                <em>Pending</em>
                              </td>
                              <td className="a-center last">
                                <span className="nobr">
                                  {" "}
                                  <a href="#">View Order</a>{" "}
                                  <span className="separator">|</span>{" "}
                                  <a href="#" className="link-reorder">
                                    Reorder
                                  </a>{" "}
                                </span>
                              </td>
                            </tr>
                            <tr className="odd">
                              <td>13100000001</td>
                              <td>
                                <span className="nobr">5/9/2015</span>
                              </td>
                              <td>jhon doe</td>
                              <td>
                                <span className="price">$997.84</span>
                              </td>
                              <td>
                                <em>Pending</em>
                              </td>
                              <td className="a-center last">
                                <span className="nobr">
                                  {" "}
                                  <a href="#">View Order</a>{" "}
                                  <span className="separator">|</span>{" "}
                                  <a href="#" className="link-reorder">
                                    Reorder
                                  </a>{" "}
                                </span>
                              </td>
                            </tr>
                            <tr className="even">
                              <td>12000000002</td>
                              <td>
                                <span className="nobr">4/1/2015</span>
                              </td>
                              <td>jhon doe</td>
                              <td>
                                <span className="price">$60.00</span>
                              </td>
                              <td>
                                <em>Pending</em>
                              </td>
                              <td className="a-center last">
                                <span className="nobr">
                                  {" "}
                                  <a href="#">View Order</a>{" "}
                                  <span className="separator">|</span>{" "}
                                  <a href="#" className="link-reorder">
                                    Reorder
                                  </a>{" "}
                                </span>
                              </td>
                            </tr>
                            <tr className="last odd">
                              <td>12000000001</td>
                              <td>
                                <span className="nobr">4/1/2015</span>
                              </td>
                              <td>jhon doe</td>
                              <td>
                                <span className="price">$208.00</span>
                              </td>
                              <td>
                                <em>Pending</em>
                              </td>
                              <td className="a-center last">
                                <span className="nobr">
                                  {" "}
                                  <a href="#">View Order</a>{" "}
                                  <span className="separator">|</span>{" "}
                                  <a href="#" className="link-reorder">
                                    Reorder
                                  </a>{" "}
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* <!--table-responsive-->                  */}
                    </div>
                    {/* <!--recent-orders--> */}
                    <div className="box-account">
                      <div className="page-title">
                        <h2>Account Information</h2>
                      </div>
                      <div className="col2-set">
                        <div className="col-1">
                          <div className="box">
                            <div className="box-title">
                              <h5>Contact Information</h5>
                              <a href="#">Edit</a>{" "}
                            </div>
                            {/* <!--box-title--> */}
                            <div className="box-content">
                              <p>
                                {" "}
                                jhon doe
                                <br />
                                jhon.doe@gmail.com
                                <br />
                                <a href="#">Change Password</a>{" "}
                              </p>
                            </div>
                            {/* <!--box-content-->  */}
                          </div>
                          {/* <!--box-->  */}
                        </div>
                        <div className="col-2">
                          <div className="box">
                            <div className="box-title">
                              <h5>Newsletters</h5>
                              <a href="#">Edit</a>{" "}
                            </div>
                            {/* <!--box-title--> */}
                            <div className="box-content">
                              <p>
                                {" "}
                                You are currently not subscribed to any
                                newsletter.{" "}
                              </p>
                            </div>
                            {/* <!--box-content-->  */}
                          </div>
                          {/* <!--box-->  */}
                        </div>
                      </div>
                      <div className="col2-set">
                        <div className="box">
                          <div className="box-title">
                            <h4>Address Book</h4>
                            <a href="#">Manage Addresses</a>{" "}
                          </div>
                          {/* <!--box-title--> */}
                          <div className="box-content">
                            <div className="col-1">
                              <h5>Default Billing Address</h5>
                              <address>
                                jhon doe
                                <br />
                                Street road
                                <br />
                                AL, Alabama, 42136
                                <br />
                                United States
                                <br />
                                T: 4563 <br />
                                <a href="#">Edit Address</a>
                              </address>
                            </div>
                            <div className="col-2">
                              <h5>Default Shipping Address</h5>
                              <address>
                                jhon doe
                                <br />
                                Street road
                                <br />
                                AL, Alabama, 42136
                                <br />
                                United States
                                <br />
                                T: 4563 <br />
                                <a href="#">Edit Address</a>
                              </address>
                            </div>
                          </div>
                          {/* <!--box-content-->  */}
                        </div>
                        {/* <!--box-->  */}
                      </div>
                    </div>
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
                      <li className="current">
                        <a>Account Dashboard</a>
                      </li>
                      <li>
                        <a href="#">
                          <span> Account Information</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span> Address Book</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span> My Orders</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span> Billing Agreements</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span> Recurring Profiles</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span> My Product Reviews</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span> My Wishlist</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span> My Applications</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span> Newsletter Subscriptions</span>
                        </a>
                      </li>
                      <li className="last">
                        <a href="#">
                          <span> My Downloadable Products</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <!--block-content-->  */}
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
                              <a
                                title=" Sample Product"
                                href="product-detail.html"
                              >
                                Up to 70% Off
                              </a>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                            <a className="link" href="#">
                              Buy Now
                            </a>
                          </div>
                        </div>
                        <div className="item">
                          <img src="/assets/img/slide3.jpg" alt="slide1" />
                          <div className="carousel-caption">
                            <h4>Black Grapes</h4>
                            <h3>
                              <a
                                title=" Sample Product"
                                href="product-detail.html"
                              >
                                Mega Sale
                              </a>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                            <a className="link" href="#">
                              Buy Now
                            </a>
                          </div>
                        </div>
                        <div className="item">
                          <img src="/assets/img/slide1.jpg" alt="slide2" />
                          <div className="carousel-caption">
                            <h4>Food Farm</h4>
                            <h3>
                              <a
                                title=" Sample Product"
                                href="product-detail.html"
                              >
                                Up to 50% Off
                              </a>
                            </h3>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit.
                            </p>
                            <a className="link" href="#">
                              Buy Now
                            </a>
                          </div>
                        </div>
                      </div>
                      <a
                        className="left carousel-control"
                        href="#carousel-example-generic"
                        data-slide="prev"
                      >
                        {" "}
                        <span className="sr-only">Previous</span>{" "}
                      </a>{" "}
                      <a
                        className="right carousel-control"
                        href="#carousel-example-generic"
                        data-slide="next"
                      >
                        {" "}
                        <span className="sr-only">Next</span>{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </aside>
              {/* <!--col-right sidebar col-sm-3 wow bounceInUp animated-->  */}
            </div>
            {/* <!--row-->  */}
          </div>
          {/* <!--main container-->  */}
        </section>

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
      </>
    );
  }
}
export default Dashboard;
