import React, { Component } from "react";
import { Link } from "react-router-dom";
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

class BrandCarousel extends Component {
  render() {
    return (
      <>
        <div id="brand-slider" className="product-flexslider hidden-buttons">
          <div className="slider-items slider-width-col6">
            <div className="item">
              <div className="logo-item">
                <Link to={" "}>
                  <img src="/assets/img/brand1.png" alt="Image" />
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="logo-item">
                <Link to={" "}>
                  <img src="/assets/img/brand2.png" alt="Image" />
                </Link>
              </div>
            </div>

            <div className="item">
              <div className="logo-item">
                <Link to={" "}>
                  <img src="/assets/img/brand3.png" alt="Image" />
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="logo-item">
                <Link to={" "}>
                  <img src="/assets/img/brand4.png" alt="Image" />
                </Link>
              </div>
            </div>

            <div className="item">
              <div className="logo-item">
                <Link to={" "}>
                  <img src="/assets/img/brand5.png" alt="Image" />
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="logo-item">
                <Link to={" "}>
                  <img src="/assets/img/brand6.png" alt="Image" />
                </Link>
              </div>
            </div>

            <div className="item">
              <div className="logo-item">
                <Link to={" "}>
                  <img src="/assets/img/brand1.png" alt="Image" />
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="logo-item">
                <Link to={" "}>
                  <img src="/assets/img/brand2.png" alt="Image" />
                </Link>
              </div>
            </div>

            <div className="item">
              <div className="logo-item">
                <Link to={" "}>
                  <img src="/assets/img/brand3.png" alt="Image" />
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="logo-item">
                <Link to={" "}>
                  <img src="/assets/img/brand4.png" alt="Image" />
                </Link>
              </div>
            </div>

            <div className="item">
              <div className="logo-item">
                <Link to={" "}>
                  <img src="/assets/img/brand5.png" alt="Image" />
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="logo-item">
                <Link to={" "}>
                  <img src="/assets/img/brand6.png" alt="Image" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default BrandCarousel;
