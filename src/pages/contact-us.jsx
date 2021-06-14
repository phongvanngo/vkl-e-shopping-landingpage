import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import Header from "../layout/header";
import Footer from "../layout/footer";

class ContactUs extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="page-title">
                  <h2>Liên hệ với chúng tôi</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- BEGIN Main Container col2-right --> */}
        <div className="main-container col2-right-layout">
          <div className="main container">
            <div className="row">
              <div
                className="col-main col-sm-9 wow bounceInUp animated animated"
                style={{ visibility: "visible" }}
              >
                <div id="messages_product_view"></div>
                <form action="" id="contactForm" method="post">
                  <div className="static-contain">
                    <fieldset className="group-select">
                      <ul>
                        <li id="billing-new-address-form">
                          <fieldset className="">
                            <ul>
                              <li>
                                <div className="customer-name">
                                  <div className="input-box name-firstname">
                                    <label for="name">
                                      <em className="required">*</em>Tên của bạn
                                    </label>
                                    <br />
                                    <input
                                      name="name"
                                      id="name"
                                      title="Name"
                                      value="john doe"
                                      className="input-text required-entry"
                                      type="text"
                                    />
                                  </div>
                                  <div className="input-box name-firstname">
                                    <label for="email">
                                      <em className="required">*</em>Địa chỉ email
                                    </label>
                                    <br />
                                    <input
                                      name="email"
                                      id="email"
                                      title="Email"
                                      value="john.doe@gmail.com"
                                      className="input-text required-entry validate-email"
                                      type="text"
                                    />
                                  </div>
                                </div>
                              </li>
                              <li>
                                <label for="telephone">Điện thoại</label>
                                <br />
                                <input
                                  name="telephone"
                                  id="telephone"
                                  title="Telephone"
                                  value=""
                                  className="input-text"
                                  type="text"
                                />
                              </li>
                              <li>
                                <label for="comment">
                                  <em className="required">*</em>Nội dung
                                </label>
                                <br />
                                <textarea
                                  name="comment"
                                  id="comment"
                                  title="Comment"
                                  className="required-entry input-text"
                                  cols="5"
                                  rows="3"
                                ></textarea>
                              </li>
                            </ul>
                          </fieldset>
                        </li>
                        <p className="require">
                          <em className="required">* </em>Required Fields
                        </p>
                        <input
                          type="text"
                          name="hideit"
                          id="hideit"
                          value=""
                          style={{ display: "none !important" }}
                        />
                        <div className="buttons-set">
                          <button
                            type="submit"
                            title="Submit"
                            className="button submit"
                          >
                            <span>
                              <span>Gửi</span>
                            </span>
                          </button>
                        </div>
                      </ul>
                    </fieldset>
                  </div>
                </form>
              </div>
              <aside
                className="col-right sidebar col-sm-3 wow bounceInUp animated animated"
                style={{ visibility: "visible" }}
              >
                <div className="block block-company">
                  <div className="block-title">Company</div>
                  <div className="block-content">
                    <ol id="recently-viewed-items">
                      <li className="item odd">
                        <a href="about-us.html">About Us</a>
                      </li>
                      <li className="item even">
                        <a href="#">Sitemap</a>
                      </li>
                      <li className="item  odd">
                        <a href="#">Terms of Service</a>
                      </li>
                      <li className="item last">
                        <a href="#">Search Terms</a>
                      </li>
                      <li className="item last">
                        <a href="contact-us.html">
                          <strong>Contact Us</strong>
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
              </aside>
              {/* <!--col-right sidebar-->  */}
            </div>
            {/* <!--row-->  */}
          </div>
          {/* <!--main-container-inner-->  */}
        </div>
        {/* <!--main-container col2-left-layout-->  */}

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
export default ContactUs;
