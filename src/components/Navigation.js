import React from 'react'
import { Link } from 'react-router-dom'
export default function Navigation() {
    return (
        <div>
            <header id="header">
                <div class="header_top">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-6">
                                <div class="contactinfo">
                                    <ul class="nav nav-pills">
                                        <li><Link to=""><i class="fa fa-phone"></i> +2 95 01 88 821</Link></li>
                                        <li><Link to=""><i class="fa fa-envelope"></i> info@domain.com</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="social-icons pull-right">
                                    <ul class="nav navbar-nav">
                                        <li><Link to=""><i class="fa fa-facebook"></i></Link></li>
                                        <li><Link to=""><i class="fa fa-twitter"></i></Link></li>
                                        <li><Link to=""><i class="fa fa-linkedin"></i></Link></li>
                                        <li><Link to=""><i class="fa fa-dribbble"></i></Link></li>
                                        <li><Link to=""><i class="fa fa-google-plus"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="header-middle">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-4">
                                <div class="logo pull-left">
                                    <Link to="index.html"><img src="images/home/logo.png" alt="" /></Link>
                                </div>
                                <div class="btn-group pull-right">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                            USA
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><Link to="">Canada</Link></li>
                                            <li><Link to="">UK</Link></li>
                                        </ul>
                                    </div>

                                    <div class="btn-group">
                                        <button type="button" class="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
                                            DOLLAR
                                            <span class="caret"></span>
                                        </button>
                                        <ul class="dropdown-menu">
                                            <li><Link to="">Canadian Dollar</Link></li>
                                            <li><Link to="">Pound</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-8">
                                <div class="shop-menu pull-right">
                                    <ul class="nav navbar-nav">
                                        <li><Link to=""><i class="fa fa-user"></i> Account</Link></li>
                                        <li><Link to=""><i class="fa fa-star"></i> Wishlist</Link></li>
                                        <li><Link to="checkout.html"><i class="fa fa-crosshairs"></i> Checkout</Link></li>
                                        <li><Link to="cart.html"><i class="fa fa-shopping-cart"></i> Cart</Link></li>
                                        <li><Link to="login.html" class="active"><i class="fa fa-lock"></i> Login</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="header-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-9">
                                <div class="navbar-header">
                                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                                        <span class="sr-only">Toggle navigation</span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                        <span class="icon-bar"></span>
                                    </button>
                                </div>
                                <div class="mainmenu pull-left">
                                    <ul class="nav navbar-nav collapse navbar-collapse">
                                        <li><Link to="index.js">Home</Link></li>
                                        <li class="dropdown"><Link to="#">Shop<i class="fa fa-angle-down"></i></Link>
                                            <ul role="menu" class="sub-menu">
                                                <li><Link to="Shop.js">Products</Link></li>
                                                <li><Link to="ProductDetails.js">Product Details</Link></li>
                                                <li><Link to="Checkout.js">Checkout</Link></li>
                                                <li><Link to="Cart.js">Cart</Link></li>
                                                <li><Link to="Login.js" class="active">Login</Link></li>
                                            </ul>
                                        </li>
                                        <li class="dropdown"><Link to="#">Blog<i class="fa fa-angle-down"></i></Link>
                                            <ul role="menu" class="sub-menu">
                                                <li><Link to="blog.html">Blog List</Link></li>
                                                <li><Link to="blog-single.html">Blog Single</Link></li>
                                            </ul>
                                        </li>
                                        <li><Link to="404.html">404</Link></li>
                                        <li><Link to="contact-us.html">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="search_box pull-right">
                                    <input type="text" placeholder="Search" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <section id="form">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-4 col-sm-offset-1">
                            <div class="login-form">
                                <h2>Login to your account</h2>
                                <form action="#">
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email Address" />
                                    <span>
                                        <input type="checkbox" class="checkbox" />
                                        Keep me signed in
                                    </span>
                                    <button type="submit" class="btn btn-default">Login</button>
                                </form>
                            </div>
                        </div>
                        <div class="col-sm-1">
                            <h2 class="or">OR</h2>
                        </div>
                        <div class="col-sm-4">
                            <div class="signup-form">
                                <h2>New User Signup!</h2>
                                <form action="#">
                                    <input type="text" placeholder="Name" />
                                    <input type="email" placeholder="Email Address" />
                                    <input type="password" placeholder="Password" />
                                    <button type="submit" class="btn btn-default">Signup</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <footer id="footer">
                <div class="footer-top">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-2">
                                <div class="companyinfo">
                                    <h2><span>e</span>-shopper</h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor</p>
                                </div>
                            </div>
                            <div class="col-sm-7">
                                <div class="col-sm-3">
                                    <div class="video-gallery text-center">
                                        <Link to="#">
                                            <div class="iframe-img">
                                                <img src="images/home/iframe1.png" alt="" />
                                            </div>
                                            <div class="overlay-icon">
                                                <i class="fa fa-play-circle-o"></i>
                                            </div>
                                        </Link>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>

                                <div class="col-sm-3">
                                    <div class="video-gallery text-center">
                                        <Link to="#">
                                            <div class="iframe-img">
                                                <img src="images/home/iframe2.png" alt="" />
                                            </div>
                                            <div class="overlay-icon">
                                                <i class="fa fa-play-circle-o"></i>
                                            </div>
                                        </Link>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>

                                <div class="col-sm-3">
                                    <div class="video-gallery text-center">
                                        <Link to="#">
                                            <div class="iframe-img">
                                                <img src="images/home/iframe3.png" alt="" />
                                            </div>
                                            <div class="overlay-icon">
                                                <i class="fa fa-play-circle-o"></i>
                                            </div>
                                        </Link>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>

                                <div class="col-sm-3">
                                    <div class="video-gallery text-center">
                                        <Link to="#">
                                            <div class="iframe-img">
                                                <img src="images/home/iframe4.png" alt="" />
                                            </div>
                                            <div class="overlay-icon">
                                                <i class="fa fa-play-circle-o"></i>
                                            </div>
                                        </Link>
                                        <p>Circle of Hands</p>
                                        <h2>24 DEC 2014</h2>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-3">
                                <div class="address">
                                    <img src="images/home/map.png" alt="" />
                                    <p>505 S Atlantic Ave Virginia Beach, VA(Virginia)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="footer-widget">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-2">
                                <div class="single-widget">
                                    <h2>Service</h2>
                                    <ul class="nav nav-pills nav-stacked">
                                        <li><Link to="">Online Help</Link></li>
                                        <li><Link to="">Contact Us</Link></li>
                                        <li><Link to="">Order Status</Link></li>
                                        <li><Link to="">Change Location</Link></li>
                                        <li><Link to="">FAQ’s</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="single-widget">
                                    <h2>Quock Shop</h2>
                                    <ul class="nav nav-pills nav-stacked">
                                        <li><Link to="">T-Shirt</Link></li>
                                        <li><Link to="">Mens</Link></li>
                                        <li><Link to="">Womens</Link></li>
                                        <li><Link to="">Gift Cards</Link></li>
                                        <li><Link to="">Shoes</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="single-widget">
                                    <h2>Policies</h2>
                                    <ul class="nav nav-pills nav-stacked">
                                        <li><Link to="">Terms of Use</Link></li>
                                        <li><Link to="">Privecy Policy</Link></li>
                                        <li><Link to="">Refund Policy</Link></li>
                                        <li><Link to="">Billing System</Link></li>
                                        <li><Link to="">Ticket System</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div class="single-widget">
                                    <h2>About Shopper</h2>
                                    <ul class="nav nav-pills nav-stacked">
                                        <li><Link to="">Company Information</Link></li>
                                        <li><Link to="">Careers</Link></li>
                                        <li><Link to="">Store Location</Link></li>
                                        <li><Link to="">Affillate Program</Link></li>
                                        <li><Link to="">Copyright</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-sm-3 col-sm-offset-1">
                                <div class="single-widget">
                                    <h2>About Shopper</h2>
                                    <form action="#" class="searchform">
                                        <input type="text" placeholder="Your email address" />
                                        <button type="submit" class="btn btn-default"><i class="fa fa-arrow-circle-o-right"></i></button>
                                        <p>Get the most recent updates from <br />our site and be updated your self...</p>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <p class="pull-left">Copyright © 2013 E-SHOPPER Inc. All rights reserved.</p>
                            <p class="pull-right">Designed by <span><Link target="_blank" to="http://www.themeum.com">Themeum</Link></span></p>
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
