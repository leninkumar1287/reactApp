import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
export default function Blog() {
    return (
        <div>
            <Navigation />
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="left-sidebar">
                                <h2>Category</h2>
                                <div className="panel-group category-products" id="accordian">
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <Link data-toggle="collapse" data-parent="#accordian" to="#sportswear">
                                                    <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                                    Sportswear
                                                </Link>
                                            </h4>
                                        </div>
                                        <div id="sportswear" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <ul>
                                                    <li><Link to="">Nike </Link></li>
                                                    <li><Link to="">Under Armour </Link></li>
                                                    <li><Link to="">Adidas </Link></li>
                                                    <li><Link to="">Puma</Link></li>
                                                    <li><Link to="">ASICS </Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <Link data-toggle="collapse" data-parent="#accordian" to="#mens">
                                                    <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                                    Mens
                                                </Link>
                                            </h4>
                                        </div>
                                        <div id="mens" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <ul>
                                                    <li><Link to="">Fendi</Link></li>
                                                    <li><Link to="">Guess</Link></li>
                                                    <li><Link to="">Valentino</Link></li>
                                                    <li><Link to="">Dior</Link></li>
                                                    <li><Link to="">Versace</Link></li>
                                                    <li><Link to="">Armani</Link></li>
                                                    <li><Link to="">Prada</Link></li>
                                                    <li><Link to="">Dolce and Gabbana</Link></li>
                                                    <li><Link to="">Chanel</Link></li>
                                                    <li><Link to="">Gucci</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title">
                                                <Link data-toggle="collapse" data-parent="#accordian" to="#womens">
                                                    <span className="badge pull-right"><i className="fa fa-plus"></i></span>
                                                    Womens
                                                </Link>
                                            </h4>
                                        </div>
                                        <div id="womens" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <ul>
                                                    <li><Link to="">Fendi</Link></li>
                                                    <li><Link to="">Guess</Link></li>
                                                    <li><Link to="">Valentino</Link></li>
                                                    <li><Link to="">Dior</Link></li>
                                                    <li><Link to="">Versace</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><Link to="#">Kids</Link></h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><Link to="#">Fashion</Link></h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><Link to="#">Households</Link></h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><Link to="#">Interiors</Link></h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><Link to="#">Clothing</Link></h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><Link to="#">Bags</Link></h4>
                                        </div>
                                    </div>
                                    <div className="panel panel-default">
                                        <div className="panel-heading">
                                            <h4 className="panel-title"><Link to="#">Shoes</Link></h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="brands_products">
                                    <h2>Brands</h2>
                                    <div className="brands-name">
                                        <ul className="nav nav-pills nav-stacked">
                                            <li><Link to=""> <span className="pull-right">(50)</span>Acne</Link></li>
                                            <li><Link to=""> <span className="pull-right">(56)</span>Grüne Erde</Link></li>
                                            <li><Link to=""> <span className="pull-right">(27)</span>Albiro</Link></li>
                                            <li><Link to=""> <span className="pull-right">(32)</span>Ronhill</Link></li>
                                            <li><Link to=""> <span className="pull-right">(5)</span>Oddmolly</Link></li>
                                            <li><Link to=""> <span className="pull-right">(9)</span>Boudestijn</Link></li>
                                            <li><Link to=""> <span className="pull-right">(4)</span>Rösch creative culture</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="price-range">
                                    <h2>Price Range</h2>
                                    <div className="well">
                                        <input type="text" className="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
                                        <b>$ 0</b> <b className="pull-right">$ 600</b>
                                    </div>
                                </div>

                                <div className="shipping text-center">
                                    <img src="images/home/shipping.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="blog-post-area">
                                <h2 className="title text-center">Latest From our Blog</h2>
                                <div className="single-blog-post">
                                    <h3>Girls Pink T Shirt arrived in store</h3>
                                    <div className="post-meta">
                                        <ul>
                                            <li><i className="fa fa-user"></i> Mac Doe</li>
                                            <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                                            <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                                        </ul>
                                        <span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                        </span>
                                    </div>
                                    <Link to="">
                                        <img src="images/blog/blog-one.jpg" alt="" />
                                    </Link>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <Link className="btn btn-primary" to="">Read More</Link>
                                </div>
                                <div className="single-blog-post">
                                    <h3>Girls Pink T Shirt arrived in store</h3>
                                    <div className="post-meta">
                                        <ul>
                                            <li><i className="fa fa-user"></i> Mac Doe</li>
                                            <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                                            <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                                        </ul>
                                        <span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                        </span>
                                    </div>
                                    <Link to="">
                                        <img src="images/blog/blog-two.jpg" alt="" />
                                    </Link>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <Link className="btn btn-primary" to="">Read More</Link>
                                </div>
                                <div className="single-blog-post">
                                    <h3>Girls Pink T Shirt arrived in store</h3>
                                    <div className="post-meta">
                                        <ul>
                                            <li><i className="fa fa-user"></i> Mac Doe</li>
                                            <li><i className="fa fa-clock-o"></i> 1:33 pm</li>
                                            <li><i className="fa fa-calendar"></i> DEC 5, 2013</li>
                                        </ul>
                                        <span>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star-half-o"></i>
                                        </span>
                                    </div>
                                    <Link to="">
                                        <img src="images/blog/blog-three.jpg" alt="" />
                                    </Link>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                    <Link className="btn btn-primary" to="">Read More</Link>
                                </div>
                                <div className="pagination-area">
                                    <ul className="pagination">
                                        <li><Link to="" className="active">1</Link></li>
                                        <li><Link to="">2</Link></li>
                                        <li><Link to="">3</Link></li>
                                        <li><Link to=""><i className="fa fa-angle-double-right"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer id="footer">
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="companyinfo">
                                    <h2><span>e</span>-shopper</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
                                </div>
                            </div>
                            <div className="col-sm-7">
                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <Link to="#">
                                            <div className="iframe-img">
                                                <img src="images/home/iframe1.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </Link>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <Link to="#">
                                            <div className="iframe-img">
                                                <img src="images/home/iframe2.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </Link>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <Link to="#">
                                            <div className="iframe-img">
                                                <img src="images/home/iframe3.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </Link>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>

                                <div className="col-sm-3">
                                    <div className="video-gallery text-center">
                                        <Link to="#">
                                            <div className="iframe-img">
                                                <img src="images/home/iframe4.png" alt="" />
                                            </div>
                                            <div className="overlay-icon">
                                                <i className="fa fa-play-circle-o"></i>
                                            </div>
                                        </Link>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3">
                                <div className="address">
                                    <img src="images/home/map.png" alt="" />
                                    <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-widget">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Service</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><Link to="">Online Help</Link></li>
                                        <li><Link to="">Contact Us</Link></li>
                                        <li><Link to="">Order Status</Link></li>
                                        <li><Link to="">Change Location</Link></li>
                                        <li><Link to="">FAQ’s</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Quock Shop</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><Link to="">T-Shirt</Link></li>
                                        <li><Link to="">Mens</Link></li>
                                        <li><Link to="">Womens</Link></li>
                                        <li><Link to="">Gift Cards</Link></li>
                                        <li><Link to="">Shoes</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>Policies</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><Link to="">Terms of Use</Link></li>
                                        <li><Link to="">Privecy Policy</Link></li>
                                        <li><Link to="">Refund Policy</Link></li>
                                        <li><Link to="">Billing System</Link></li>
                                        <li><Link to="">Ticket System</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-2">
                                <div className="single-widget">
                                    <h2>About Shopper</h2>
                                    <ul className="nav nav-pills nav-stacked">
                                        <li><Link to="">Company Information</Link></li>
                                        <li><Link to="">Careers</Link></li>
                                        <li><Link to="">Store Location</Link></li>
                                        <li><Link to="">Affillate Program</Link></li>
                                        <li><Link to="">Copyright</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-sm-3 col-sm-offset-1">
                                <div className="single-widget">
                                    <h2>About Shopper</h2>
                                    <form action="#" className="searchform">
                                        <input type="text" placeholder="Your email address" />
                                        <button type="submit" className="btn btn-default"><i className="fa fa-arrow-circle-o-right"></i></button>
                                        <p>Get the most recent updates from <br />our site and be updated your self...</p>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <p className="pull-left">Copyright © 2013 E-SHOPPER Inc. All rights reserved.</p>
                            <p className="pull-right">Designed by <span><Link target="_blank" to="http://www.themeum.com">Themeum</Link></span></p>
                        </div>
                    </div>
                </div>

            </footer>

            <script src="js/jquery.js"></script>
            <script src="js/price-range.js"></script>
            <script src="js/jquery.scrollUp.min.js"></script>
            <script src="js/bootstrap.min.js"></script>
            <script src="js/jquery.prettyPhoto.js"></script>
            <script src="js/main.js"></script>
        </div>
    )
}
