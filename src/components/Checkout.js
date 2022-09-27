import React from 'react'
import { Link } from 'react-router-dom'
export default function Checkout() {
	return (
		<div>
			<header id="header">
				<div className="header_top">
					<div className="container">
						<div className="row">
							<div className="col-sm-6">
								<div className="contactinfo">
									<ul className="nav nav-pills">
										<li><Link to=""><i className="fa fa-phone"></i> +2 95 01 88 821</Link></li>
										<li><Link to=""><i className="fa fa-envelope"></i> info@domain.com</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-sm-6">
								<div className="social-icons pull-right">
									<ul className="nav navbar-nav">
										<li><Link to=""><i className="fa fa-facebook"></i></Link></li>
										<li><Link to=""><i className="fa fa-twitter"></i></Link></li>
										<li><Link to=""><i className="fa fa-linkedin"></i></Link></li>
										<li><Link to=""><i className="fa fa-dribbble"></i></Link></li>
										<li><Link to=""><i className="fa fa-google-plus"></i></Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="header-middle">
					<div className="container">
						<div className="row">
							<div className="col-sm-4">
								<div className="logo pull-left">
									<Link to="index.html"><img src="images/home/logo.png" alt="" /></Link>
								</div>
								<div className="btn-group pull-right">
									<div className="btn-group">
										<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
											USA
											<span className="caret"></span>
										</button>
										<ul className="dropdown-menu">
											<li><Link to="">Canada</Link></li>
											<li><Link to="">UK</Link></li>
										</ul>
									</div>

									<div className="btn-group">
										<button type="button" className="btn btn-default dropdown-toggle usa" data-toggle="dropdown">
											DOLLAR
											<span className="caret"></span>
										</button>
										<ul className="dropdown-menu">
											<li><Link to="">Canadian Dollar</Link></li>
											<li><Link to="">Pound</Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-sm-8">
								<div className="shop-menu pull-right">
									<ul className="nav navbar-nav">
										<li><Link to=""><i className="fa fa-user"></i> Account</Link></li>
										<li><Link to=""><i className="fa fa-star"></i> Wishlist</Link></li>
										<li><Link to="./Checkout.js" className="active"><i className="fa fa-crosshairs"></i> Checkout</Link></li>
										<li><Link to="./Cart.js"><i className="fa fa-shopping-cart"></i> Cart</Link></li>
										<li><Link to="./Login.js"><i className="fa fa-lock"></i> Login</Link></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="header-bottom">
					<div className="container">
						<div className="row">
							<div className="col-sm-9">
								<div className="navbar-header">
									<button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
										<span className="sr-only">Toggle navigation</span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
										<span className="icon-bar"></span>
									</button>
								</div>
								<div className="mainmenu pull-left">
									<ul className="nav navbar-nav collapse navbar-collapse">
										<li><Link to="index.html">Home</Link></li>
										<li className="dropdown"><Link to="#">Shop<i className="fa fa-angle-down"></i></Link>
											<ul role="menu" className="sub-menu">
												<li><Link to="./Shop.js">Products</Link></li>
												<li><Link to="./ProductDetails.js">Product Details</Link></li>
												<li><Link to="./Checkout.js" className="active">Checkout</Link></li>
												<li><Link to="./Cart.js">Cart</Link></li>
												<li><Link to="./Login.js">Login</Link></li>
											</ul>
										</li>
										<li className="dropdown"><Link to="#">Blog<i className="fa fa-angle-down"></i></Link>
											<ul role="menu" className="sub-menu">
												<li><Link to="./Blog.js">Blog List</Link></li>
												<li><Link to="./Blog-single.js">Blog Single</Link></li>
											</ul>
										</li>
										<li><Link to="404.html">404</Link></li>
										<li><Link to="./ContactUs.js">Contact</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-sm-3">
								<div className="search_box pull-right">
									<input type="text" placeholder="Search" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

			<section id="cart_items">
				<div className="container">
					<div className="breadcrumbs">
						<ol className="breadcrumb">
							<li><Link to="#">Home</Link></li>
							<li className="active">Check out</li>
						</ol>
					</div>

					<div className="step-one">
						<h2 className="heading">Step1</h2>
					</div>
					<div className="checkout-options">
						<h3>New User</h3>
						<p>Checkout options</p>
						<ul className="nav">
							<li>
								<label><input type="checkbox" /> Register Account</label>
							</li>
							<li>
								<label><input type="checkbox" /> Guest Checkout</label>
							</li>
							<li>
								<Link to=""><i className="fa fa-times"></i>Cancel</Link>
							</li>
						</ul>
					</div>

					<div className="register-req">
						<p>Please use Register And Checkout to easily get access to your order history, or use Checkout as Guest</p>
					</div>

					<div className="shopper-informations">
						<div className="row">
							<div className="col-sm-3">
								<div className="shopper-info">
									<p>Shopper Information</p>
									<form>
										<input type="text" placeholder="Display Name" />
										<input type="text" placeholder="User Name" />
										<input type="password" placeholder="Password" />
										<input type="password" placeholder="Confirm password" />
									</form>
									<Link className="btn btn-primary" to="">Get Quotes</Link>
									<Link className="btn btn-primary" to="">Continue</Link>
								</div>
							</div>
							<div className="col-sm-5 clearfix">
								<div className="bill-to">
									<p>Bill To</p>
									<div className="form-one">
										<form>
											<input type="text" placeholder="Company Name" />
											<input type="text" placeholder="Email*" />
											<input type="text" placeholder="Title" />
											<input type="text" placeholder="First Name *" />
											<input type="text" placeholder="Middle Name" />
											<input type="text" placeholder="Last Name *" />
											<input type="text" placeholder="Address 1 *" />
											<input type="text" placeholder="Address 2" />
										</form>
									</div>
									<div className="form-two">
										<form>
											<input type="text" placeholder="Zip / Postal Code *" />
											<select>
												<option>-- Country --</option>
												<option>United States</option>
												<option>Bangladesh</option>
												<option>UK</option>
												<option>India</option>
												<option>Pakistan</option>
												<option>Ucrane</option>
												<option>Canada</option>
												<option>Dubai</option>
											</select>
											<select>
												<option>-- State / Province / Region --</option>
												<option>United States</option>
												<option>Bangladesh</option>
												<option>UK</option>
												<option>India</option>
												<option>Pakistan</option>
												<option>Ucrane</option>
												<option>Canada</option>
												<option>Dubai</option>
											</select>
											<input type="password" placeholder="Confirm password" />
											<input type="text" placeholder="Phone *" />
											<input type="text" placeholder="Mobile Phone" />
											<input type="text" placeholder="Fax" />
										</form>
									</div>
								</div>
							</div>
							<div className="col-sm-4">
								<div className="order-message">
									<p>Shipping Order</p>
									<textarea name="message" placeholder="Notes about your order, Special Notes for Delivery" rows="16"></textarea>
									<label><input type="checkbox" /> Shipping to bill address</label>
								</div>
							</div>
						</div>
					</div>
					<div className="review-payment">
						<h2>Review & Payment</h2>
					</div>

					<div className="table-responsive cart_info">
						<table className="table table-condensed">
							<thead>
								<tr className="cart_menu">
									<td className="image">Item</td>
									<td className="description"></td>
									<td className="price">Price</td>
									<td className="quantity">Quantity</td>
									<td className="total">Total</td>
									<td></td>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td className="cart_product">
										<Link to=""><img src="images/cart/one.png" alt="" /></Link>
									</td>
									<td className="cart_description">
										<h4><Link to="">Colorblock Scuba</Link></h4>
										<p>Web ID: 1089772</p>
									</td>
									<td className="cart_price">
										<p>$59</p>
									</td>
									<td className="cart_quantity">
										<div className="cart_quantity_button">
											<Link className="cart_quantity_up" to=""> + </Link>
											<input className="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
											<Link className="cart_quantity_down" to=""> - </Link>
										</div>
									</td>
									<td className="cart_total">
										<p className="cart_total_price">$59</p>
									</td>
									<td className="cart_delete">
										<Link className="cart_quantity_delete" to=""><i className="fa fa-times"></i></Link>
									</td>
								</tr>

								<tr>
									<td className="cart_product">
										<Link to=""><img src="images/cart/two.png" alt="" /></Link>
									</td>
									<td className="cart_description">
										<h4><Link to="">Colorblock Scuba</Link></h4>
										<p>Web ID: 1089772</p>
									</td>
									<td className="cart_price">
										<p>$59</p>
									</td>
									<td className="cart_quantity">
										<div className="cart_quantity_button">
											<Link className="cart_quantity_up" to=""> + </Link>
											<input className="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
											<Link className="cart_quantity_down" to=""> - </Link>
										</div>
									</td>
									<td className="cart_total">
										<p className="cart_total_price">$59</p>
									</td>
									<td className="cart_delete">
										<Link className="cart_quantity_delete" to=""><i className="fa fa-times"></i></Link>
									</td>
								</tr>
								<tr>
									<td className="cart_product">
										<Link to=""><img src="images/cart/three.png" alt="" /></Link>
									</td>
									<td className="cart_description">
										<h4><Link to="">Colorblock Scuba</Link></h4>
										<p>Web ID: 1089772</p>
									</td>
									<td className="cart_price">
										<p>$59</p>
									</td>
									<td className="cart_quantity">
										<div className="cart_quantity_button">
											<Link className="cart_quantity_up" to=""> + </Link>
											<input className="cart_quantity_input" type="text" name="quantity" value="1" autocomplete="off" size="2" />
											<Link className="cart_quantity_down" to=""> - </Link>
										</div>
									</td>
									<td className="cart_total">
										<p className="cart_total_price">$59</p>
									</td>
									<td className="cart_delete">
										<Link className="cart_quantity_delete" to=""><i className="fa fa-times"></i></Link>
									</td>
								</tr>
								<tr>
									<td colspan="4">&nbsp;</td>
									<td colspan="2">
										<table className="table table-condensed total-result">
											<tr>
												<td>Cart Sub Total</td>
												<td>$59</td>
											</tr>
											<tr>
												<td>Exo Tax</td>
												<td>$2</td>
											</tr>
											<tr className="shipping-cost">
												<td>Shipping Cost</td>
												<td>Free</td>
											</tr>
											<tr>
												<td>Total</td>
												<td><span>$61</span></td>
											</tr>
										</table>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="payment-options">
						<span>
							<label><input type="checkbox" /> Direct Bank Transfer</label>
						</span>
						<span>
							<label><input type="checkbox" /> Check Payment</label>
						</span>
						<span>
							<label><input type="checkbox" /> Paypal</label>
						</span>
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
			<script src="js/bootstrap.min.js"></script>
			<script src="js/jquery.scrollUp.min.js"></script>
			<script src="js/jquery.prettyPhoto.js"></script>
			<script src="js/main.js"></script>
		</div>
	)
}
