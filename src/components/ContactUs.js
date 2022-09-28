import React from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
export default function ContactUs() {
	return (
		<div>
			<Navigation />
			<div id="contact-page" className="container">
				<div className="bg">
					<div className="row">
						<div className="col-sm-12">
							<h2 className="title text-center">Contact <strong>Us</strong></h2>
							<div id="gmap" className="contact-map">
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-8">
							<div className="contact-form">
								<h2 className="title text-center">Get In Touch</h2>
								<div className="status alert alert-success" style={{ display: 'none' }}></div>
								<form id="main-contact-form" className="contact-form row" name="contact-form" method="post">
									<div className="form-group col-md-6">
										<input type="text" name="name" className="form-control" required="required" placeholder="Name" />
									</div>
									<div className="form-group col-md-6">
										<input type="email" name="email" className="form-control" required="required" placeholder="Email" />
									</div>
									<div className="form-group col-md-12">
										<input type="text" name="subject" className="form-control" required="required" placeholder="Subject" />
									</div>
									<div className="form-group col-md-12">
										<textarea name="message" id="message" required="required" className="form-control" rows="8" placeholder="Your Message Here"></textarea>
									</div>
									<div className="form-group col-md-12">
										<input type="submit" name="submit" className="btn btn-primary pull-right" value="Submit" />
									</div>
								</form>
							</div>
						</div>
						<div className="col-sm-4">
							<div className="contact-info">
								<h2 className="title text-center">Contact Info</h2>
								<address>
									<p>E-Shopper Inc.</p>
									<p>935 W. Webster Ave New Streets Chicago, IL 60614, NY</p>
									<p>Newyork USA</p>
									<p>Mobile: +2346 17 38 93</p>
									<p>Fax: 1-714-252-0026</p>
									<p>Email: info@e-shopper.com</p>
								</address>
								<div className="social-networks">
									<h2 className="title text-center">Social Networking</h2>
									<ul>
										<li>
											<Link to="#"><i className="fa fa-facebook"></i></Link>
										</li>
										<li>
											<Link to="#"><i className="fa fa-twitter"></i></Link>
										</li>
										<li>
											<Link to="#"><i className="fa fa-google-plus"></i></Link>
										</li>
										<li>
											<Link to="#"><i className="fa fa-youtube"></i></Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

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
			<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=true"></script>
			<script type="text/javascript" src="js/gmaps.js"></script>
			<script src="js/contact.js"></script>
			<script src="js/price-range.js"></script>
			<script src="js/jquery.scrollUp.min.js"></script>
			<script src="js/jquery.prettyPhoto.js"></script>
			<script src="js/main.js"></script>
		</div>
	)
}
