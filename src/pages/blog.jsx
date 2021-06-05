import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../layout/header";
import Footer from "../layout/footer";

class Blog extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <div className="page-title">
                  <h2>Blog</h2>
                </div>
              </div>
              {/* <!--col-xs-12--> */}
            </div>
            {/* <!--row--> */}
          </div>
          {/* <!--container--> */}
        </div>
        {/* <!-- BEGIN Main Container --> */}
        <div className="main-container col2-left-layout">
          <div className="main container">
            <div className="row">
              <div className="col-left sidebar col-sm-3 blog-side">
                <div id="secondary" className="widget_wrapper13" role="complementary">
                  <div
                    id="recent-posts-4"
                    className="popular-posts widget widget__sidebar wow bounceInUp animated animated"
                  >
                    <h2 className="widget-title">Most Popular Posts</h2>
                    <div className="widget-content">
                      <ul className="posts-list unstyled clearfix">
                        <li>
                          <figure className="featured-thumb">
                            {" "}
                            <Link to={" "}>
                              {" "}
                              <img src="/assets/img/blog-img1_1.jpg" alt="blog image" />{" "}
                            </Link>{" "}
                          </figure>
                          {/* <!--featured-thumb--> */}
                          <div className="content-info">
                            <h4>
                              <Link to={" "} title="Lorem ipsum dolor sit amet">
                                Powerful and flexible premium Ecommerce themes
                              </Link>
                            </h4>
                            <p className="post-meta">
                              <time className="entry-date">Jan 10, 2018 .</time>.
                            </p>
                          </div>
                        </li>
                        <li>
                          <figure className="featured-thumb">
                            {" "}
                            <Link to={" "}>
                              {" "}
                              <img src="/assets/img/blog-img3.jpg" alt="blog image" />{" "}
                            </Link>{" "}
                          </figure>
                          {/* <!--featured-thumb--> */}
                          <div className="content-info">
                            <h4>
                              <Link to={" "} title="Lorem ipsum dolor sit amet">
                                Awesome template with lot's of features on the board!
                              </Link>
                            </h4>
                            <p className="post-meta">
                              <time className="entry-date">Feb 26, 2018 .</time>.
                            </p>
                          </div>
                        </li>
                        <li>
                          <figure className="featured-thumb">
                            {" "}
                            <Link to={" "}>
                              {" "}
                              <img src="/assets/img/blog-img2.jpg" alt="blog image" />{" "}
                            </Link>{" "}
                          </figure>
                          {/* <!--featured-thumb--> */}
                          <div className="content-info">
                            <h4>
                              <Link to={" "} title="Lorem ipsum dolor sit amet">
                                Premium template with unlimited colours, and fully Customizable
                              </Link>
                            </h4>
                            <p className="post-meta">
                              <time className="entry-date">Mar 14, 2018 .</time>.
                            </p>
                          </div>
                        </li>
                        <li>
                          <figure className="featured-thumb">
                            {" "}
                            <Link to={" "}>
                              {" "}
                              <img src="/assets/img/blog-img4.jpg" alt="blog image" />{" "}
                            </Link>{" "}
                          </figure>
                          {/* <!--featured-thumb--> */}
                          <div className="content-info">
                            <h4>
                              <Link to={" "} title="Lorem ipsum dolor sit amet">
                                Powerful and flexible premium Ecommerce themes
                              </Link>
                            </h4>
                            <p className="post-meta">
                              <time className="entry-date">Apr 18, 2018 .</time>.
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    {/* <!--widget-content--> */}
                  </div>
                  <div
                    id="categories-2"
                    className="widget widget_categories wow bounceInUp animated animated"
                  >
                    <h2 className="widget-title">Categories</h2>
                    <div className="content">
                      <ul>
                        <li>
                          <Link to={" "}>PhotoShop</Link>
                        </li>
                        <li>
                          <Link to={" "}>News</Link>
                        </li>
                        <li>
                          <Link to={" "}>Illustration</Link>
                        </li>
                        <li>
                          <Link to={" "}>Foods and Drinks</Link>
                        </li>
                        <li>
                          <Link to={" "}>Social</Link>
                        </li>
                        <li>
                          <Link to={" "}>Technology</Link>
                        </li>
                        <li>
                          <Link to={" "}>Uncategorized</Link>
                        </li>
                        <li>
                          <Link to={" "}>Videos</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* <!-- Banner Ad Block --> */}
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
                                <Link title=" Sample Product" to={"product-details"}>
                                  Up to 70% Off
                                </Link>
                              </h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                                <Link title=" Sample Product" to={"product-details"}>
                                  Mega Sale
                                </Link>
                              </h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                                <Link title=" Sample Product" to={"product-details"}>
                                  Up to 50% Off
                                </Link>
                              </h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                              <Link className="link" to={" "}>
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
                          {" "}
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
                  {/* <!-- Banner Text Block --> */}
                  <div className="text-widget widget widget__sidebar">
                    <h2 className="widget-title">Custom Widget</h2>
                    <div className="widget-content">
                      Mauris at blandit erat. Nam vel tortor non quam scelerisque cursus. Praesent
                      nunc vitae magna pellentesque auctor. Quisque id lectus.
                      <br />
                      <br />
                      Massa, eget eleifend tellus. Proin nec ante leo ssim nunc sit amet velit
                      malesuada pharetra. Nulla neque sapien, sollicitudin non ornare quis,
                      malesuada.
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-main col-sm-9 main-blog">
                <div id="main" className="blog-wrapper">
                  <div id="primary" className="site-content">
                    <div id="content" role="main">
                      <article
                        id="post-29"
                        className="blog_entry clearfix wow bounceInUp animated animated"
                      >
                        <div className="entry-content">
                          <div className="featured-thumb">
                            <Link to={" "}>
                              <img src="/assets/img/blog-img1.jpg" alt="blog-img3" />
                            </Link>
                          </div>
                          <header className="blog_entry-header clearfix">
                            <div className="blog_entry-header-inner">
                              <h2 className="blog_entry-title">
                                {" "}
                                <Link href="blog-detail.html" rel="bookmark">
                                  Powerful and flexible premium Ecommerce themes
                                </Link>{" "}
                              </h2>
                            </div>
                            {/* <!--blog_entry-header-inner--> */}
                          </header>
                          <div className="entry-content">
                            <ul className="post-meta">
                              <li>
                                <i className="fa fa-user"></i>posted by <Link to={" "}>admin</Link>{" "}
                              </li>
                              <li>
                                <i className="fa fa-comments"></i>
                                <Link to={" "}>8 comments</Link>{" "}
                              </li>
                              <li>
                                <i className="fa fa-clock-o"></i>
                                <span className="day">12</span> <span className="month">Feb</span>
                              </li>
                            </ul>
                            <p>
                              Fusce ac pharetra urna. Duis non lacus sit amet lacus interdum
                              facilisis sed non est. Ut mi metus, semper eu dictum nec, condimentum
                              sed sapien. Nullam lobortis nunc semper ipsum luctus ut viverra ante
                              eleifend. Nunc pretium velit sed augue luctus accumsan. Integer vitae
                              diam sed dolor euismod laoreet eget ac felis. Donec non erat sed elit
                              bibendum sodales.
                            </p>
                          </div>
                          <p>
                            {" "}
                            <Link href="blog-detail.html" className="btn">
                              Read More
                            </Link>{" "}
                          </p>
                        </div>
                      </article>
                      <article
                        id="post-29"
                        className="blog_entry clearfix wow bounceInUp animated animated"
                      >
                        <div className="entry-content">
                          <div className="featured-thumb">
                            <Link to={" "}>
                              <img src="/assets/img/blog-img2.jpg" alt="blog-img2" />
                            </Link>
                          </div>
                          <header className="blog_entry-header clearfix">
                            <div className="blog_entry-header-inner">
                              <h2 className="blog_entry-title">
                                {" "}
                                <Link href="blog-detail.html" rel="bookmark">
                                  Awesome template with lot's of features on the board!
                                </Link>{" "}
                              </h2>
                            </div>
                            {/* <!--blog_entry-header-inner--> */}
                          </header>
                          <div className="entry-content">
                            <ul className="post-meta">
                              <li>
                                <i className="fa fa-user"></i>posted by <Link to={" "}>admin</Link>{" "}
                              </li>
                              <li>
                                <i className="fa fa-comments"></i>
                                <Link to={" "}>8 comments</Link>{" "}
                              </li>
                              <li>
                                <i className="fa fa-clock-o"></i>
                                <span className="day">12</span> <span className="month">Feb</span>
                              </li>
                            </ul>
                            <p>
                              Aliquam laoreet consequat malesuada. Integer vitae diam sed dolor
                              euismod laoreet eget ac felis. Donec non erat sed elit bibendum
                              sodales. Donec eu cursus velit. Proin nunc lacus, gravida mollis
                              dictum ut, vulputate eu turpis. Sed felis sapien, commodo in iaculis
                              in, feugiat sed enim. Sed nunc ipsum, fermentum varius dignissim
                              vitae, blandit et ante.Maecenas sagittis, lorem sed congue egestas,
                              lectus purus congue nisl, ac molestie enim ligula nec eros.{" "}
                            </p>
                          </div>
                          <p>
                            {" "}
                            <Link href="blog-detail.html" className="btn">
                              Read More
                            </Link>{" "}
                          </p>
                        </div>
                      </article>
                      <article
                        id="post-29"
                        className="blog_entry clearfix wow bounceInUp animated animated"
                      >
                        <div className="entry-content">
                          <div className="featured-thumb">
                            <Link to={" "}>
                              <img src="/assets/img/blog-img3.jpg" alt="blog-img1" />
                            </Link>
                          </div>
                          <header className="blog_entry-header clearfix">
                            <div className="blog_entry-header-inner">
                              <h2 className="blog_entry-title">
                                {" "}
                                <Link href="blog-detail.html" rel="bookmark">
                                  Premium template with unlimited colours, and fully Customizable
                                </Link>{" "}
                              </h2>
                            </div>
                            {/* <!--blog_entry-header-inner--> */}
                          </header>
                          <div className="entry-content">
                            <ul className="post-meta">
                              <li>
                                <i className="fa fa-user"></i>posted by <Link to={" "}>admin</Link>{" "}
                              </li>
                              <li>
                                <i className="fa fa-comments"></i>
                                <Link to={" "}>8 comments</Link>{" "}
                              </li>
                              <li>
                                <i className="fa fa-clock-o"></i>
                                <span className="day">12</span> <span className="month">Feb</span>
                              </li>
                            </ul>
                            <p>
                              {" "}
                              Integer vitae diam sed dolor euismod laoreet eget ac felis. Donec non
                              erat sed elit bibendum sodales. Donec eu cursus velit. Proin nunc
                              lacus, gravida mollis dictum ut, vulputate eu turpis. Sed felis
                              sapien, commodo in iaculis in, feugiat sed enim. Sed nunc ipsum,
                              fermentum varius dignissim vitae, blandit et ante.Maecenas sagittis,
                              lorem sed congue egestas, lectus purus congue nisl, ac molestie enim
                              ligula nec eros.
                            </p>
                          </div>
                          <p>
                            {" "}
                            <Link href="blog-detail.html" className="btn">
                              Read More
                            </Link>{" "}
                          </p>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="pager">
                    <div className="pages">
                      {/* <!--<strong></strong>--> */}
                      <ol className="pagination">
                        <li className="active">
                          <Link href="">1</Link>
                        </li>
                        <li>
                          <Link className="button" href="blog.html?p=2">
                            2
                          </Link>
                        </li>
                        <li>
                          <Link className="button" href="blog.html?p=2">
                            3
                          </Link>
                        </li>
                        <li>
                          <Link className="button" href="blog.html?p=2">
                            4
                          </Link>
                        </li>
                        <li>
                          <Link className="button" href="blog.html?p=2">
                            5
                          </Link>
                        </li>
                        <li>
                          <Link className="button" href="blog.html?p=2">
                            6
                          </Link>
                        </li>
                        <li>
                          {" "}
                          <Link className="button next i-next" href="blog.html?p=2" title="Next">
                            {" "}
                            »{" "}
                          </Link>
                        </li>
                      </ol>
                    </div>
                  </div>
                </div>
                {/* <!--#main wrapper grid_8--> */}
              </div>
              {/* <!--col-main col-sm-9--> */}
            </div>
          </div>
          {/* <!--main-container--> */}
        </div>
        {/* <!--col2-layout--> */}

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
        {/* <!-- For version 1,2,3,4,6 --></div> */}

        <Footer />
      </>
    );
  }
}
export default Blog;
