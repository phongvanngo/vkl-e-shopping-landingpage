import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";

class Error404 extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="page-title">
                  <h2>404 Page</h2>
                </div>
              </div>
              {/* <!--col-xs-12--> */}
            </div>
            {/* <!--row--> */}
          </div>
          {/* <!--container--> */}
        </div>

        <section className="content-wrapper">
          <div className="container">
            <div className="std">
              <div className="page-not-found">
                <br />
                <div>
                  <img src="/assets/img/404-img.png" alt="error imag" />
                </div>
                <h3>Oops! The Page you requested was not found!</h3>
                <div>
                  <Link href="index.html" className="btn-home">
                    <span>Back To Home</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Main Container End -->  */}
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
export default Error404;
