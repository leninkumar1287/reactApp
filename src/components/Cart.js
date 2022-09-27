import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
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
                                        <li><Link to="cart.html" class="active"><i class="fa fa-shopping-cart"></i> Cart</Link></li>
                                        <li><Link to="login.html"><i class="fa fa-lock"></i> Login</Link></li>
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
                                        <li><Link to="index.html">Home</Link></li>
                                        <li class="dropdown"><Link to="#">Shop<i class="fa fa-angle-down"></i></Link>
                                            <ul role="menu" class="sub-menu">
                                                <li><Link to="shop.html">Products</Link></li>
                                                <li><Link to="product-details.html">Product Details</Link></li>
                                                <li><Link to="checkout.html">Checkout</Link></li>
                                                <li><Link to="cart.html" class="active">Cart</Link></li>
                                                <li><Link to="login.html">Login</Link></li>
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

            <section id="cart_items">
                <div class="container">
                    <div class="breadcrumbs">
                        <ol class="breadcrumb">
                            <li><Link to="#">Home</Link></li>
                            <li class="active">Shopping Cart</li>
                        </ol>
                    </div>
                    <div class="table-responsive cart_info">
                        <table class="table table-condensed">
                            <thead>
                                <tr class="cart_menu">
                                    <td class="image">Item</td>
                                    <td class="description"></td>
                                    <td class="price">Price</td>
                                    <td class="quantity">Quantity</td>
                                    <td class="total">Total</td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="cart_product">
                                        <Link to=""><img src="images/cart/one.png" alt="" /></Link>
                                    </td>
                                    <td class="cart_description">
                                        <h4><Link to="">Colorblock Scuba</Link></h4>
                                        <p>Web ID: 1089772</p>
                                    </td>
                                    <td class="cart_price">
                                        <p>$59</p>
                                    </td>
                                    <td class="cart_quantity">
                                        <div class="cart_quantity_button">
                                            <Link class="cart_quantity_up" to=""> + </Link>
                                            <input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
                                            <Link class="cart_quantity_down" to=""> - </Link>
                                        </div>
                                    </td>
                                    <td class="cart_total">
                                        <p class="cart_total_price">$59</p>
                                    </td>
                                    <td class="cart_delete">
                                        <Link class="cart_quantity_delete" to=""><i class="fa fa-times"></i></Link>
                                    </td>
                                </tr>

                                <tr>
                                    <td class="cart_product">
                                        <Link to=""><img src="images/cart/two.png" alt="" /></Link>
                                    </td>
                                    <td class="cart_description">
                                        <h4><Link to="">Colorblock Scuba</Link></h4>
                                        <p>Web ID: 1089772</p>
                                    </td>
                                    <td class="cart_price">
                                        <p>$59</p>
                                    </td>
                                    <td class="cart_quantity">
                                        <div class="cart_quantity_button">
                                            <Link class="cart_quantity_up" to=""> + </Link>
                                            <input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
                                            <Link class="cart_quantity_down" to=""> - </Link>
                                        </div>
                                    </td>
                                    <td class="cart_total">
                                        <p class="cart_total_price">$59</p>
                                    </td>
                                    <td class="cart_delete">
                                        <Link class="cart_quantity_delete" to=""><i class="fa fa-times"></i></Link>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="cart_product">
                                        <Link to=""><img src="images/cart/three.png" alt="" /></Link>
                                    </td>
                                    <td class="cart_description">
                                        <h4><Link to="">Colorblock Scuba</Link></h4>
                                        <p>Web ID: 1089772</p>
                                    </td>
                                    <td class="cart_price">
                                        <p>$59</p>
                                    </td>
                                    <td class="cart_quantity">
                                        <div class="cart_quantity_button">
                                            <Link class="cart_quantity_up" to=""> + </Link>
                                            <input class="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
                                            <Link class="cart_quantity_down" to=""> - </Link>
                                        </div>
                                    </td>
                                    <td class="cart_total">
                                        <p class="cart_total_price">$59</p>
                                    </td>
                                    <td class="cart_delete">
                                        <Link class="cart_quantity_delete" to=""><i class="fa fa-times"></i></Link>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section id="do_action">
                <div class="container">
                    <div class="heading">
                        <h3>What would you like to do next?</h3>
                        <p>Choose if you have a discount code or reward points you want to use or would like to estimate your delivery cost.</p>
                    </div>
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="chose_area">
                                <ul class="user_option">
                                    <li>
                                        <input type="checkbox" />
                                        <label>Use Coupon Code</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label>Use Gift Voucher</label>
                                    </li>
                                    <li>
                                        <input type="checkbox" />
                                        <label>Estimate Shipping & Taxes</label>
                                    </li>
                                </ul>
                                <ul class="user_info">
                                    <li class="single_field">
                                        <label>Country:</label>
                                        <select>
                                            <option>United States</option>
                                            <option>Bangladesh</option>
                                            <option>UK</option>
                                            <option>India</option>
                                            <option>Pakistan</option>
                                            <option>Ucrane</option>
                                            <option>Canada</option>
                                            <option>Dubai</option>
                                        </select>

                                    </li>
                                    <li class="single_field">
                                        <label>Region / State:</label>
                                        <select>
                                            <option>Select</option>
                                            <option>Dhaka</option>
                                            <option>London</option>
                                            <option>Dillih</option>
                                            <option>Lahore</option>
                                            <option>Alaska</option>
                                            <option>Canada</option>
                                            <option>Dubai</option>
                                        </select>

                                    </li>
                                    <li class="single_field zip-field">
                                        <label>Zip Code:</label>
                                        <input type="text" />
                                    </li>
                                </ul>
                                <Link class="btn btn-default update" to="">Get Quotes</Link>
                                <Link class="btn btn-default check_out" to="">Continue</Link>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="total_area">
                                <ul>
                                    <li>Cart Sub Total <span>$59</span></li>
                                    <li>Eco Tax <span>$2</span></li>
                                    <li>Shipping Cost <span>Free</span></li>
                                    <li>Total <span>$61</span></li>
                                </ul>
                                <Link class="btn btn-default update" to="">Update</Link>
                                <Link class="btn btn-default check_out" to="">Check Out</Link>
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
            <script src="js/bootstrap.min.js"></script>
            <script src="js/jquery.scrollUp.min.js"></script>
            <script src="js/jquery.prettyPhoto.js"></script>
            <script src="js/main.js"></script>u
        </div>
    )
}
