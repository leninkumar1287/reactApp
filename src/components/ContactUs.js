import React from 'react'
import { Link } from 'react-router-dom'
export default function ContactUs() {
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
								<li><Link to="./Checkout.js"><i className="fa fa-crosshairs"></i> Checkout</Link></li>
								<li><Link to="./Cart.js"><i className="fa fa-shopping-cart"></i> Cart</Link></li>
								<li><Link to="Login.js"><i className="fa fa-lock"></i> Login</Link></li>
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
										<li><Link to="./Checkout.js">Checkout</Link></li> 
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
								<li><Link to="./ContactUs.js" className="active">Contact</Link></li>
							</ul>
						</div>
					</div>
					<div className="col-sm-3">
						<div className="search_box pull-right">
							<input type="text" placeholder="Search"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
	 
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
	    				<div className="status alert alert-success" style="display: none"></div>
				    	<form id="main-contact-form" className="contact-form row" name="contact-form" method="post">
				            <div className="form-group col-md-6">
				                <input type="text" name="name" className="form-control" required="required" placeholder="Name"/>
				            </div>
				            <div className="form-group col-md-6">
				                <input type="email" name="email" className="form-control" required="required" placeholder="Email"/>
				            </div>
				            <div className="form-group col-md-12">
				                <input type="text" name="subject" className="form-control" required="required" placeholder="Subject"/>
				            </div>
				            <div className="form-group col-md-12">
				                <textarea name="message" id="message" required="required" className="form-control" rows="8" placeholder="Your Message Here"></textarea>
				            </div>                        
				            <div className="form-group col-md-12">
				                <input type="submit" name="submit" className="btn btn-primary pull-right" value="Submit"/>
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
