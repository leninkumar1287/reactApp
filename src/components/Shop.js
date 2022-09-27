import React from 'react'
import { Link } from 'react-router-dom'
export default function Shop() {
  return (
    <div>
      <header id="header">
        <div className="header_top">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 ">
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
                    <li className="dropdown"><Link to="#" className="active">Shop<i className="fa fa-angle-down"></i></Link>
                      <ul role="menu" className="sub-menu">
                        <li><Link to="./Shop.js" className="active">Products</Link></li>
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
                    <li><Link to="404.js">404</Link></li>
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

      <section id="advertisement">
        <div className="container">
          <img src="images/shop/advertisement.jpg" alt="" />
        </div>
      </section>

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

            <div className="col-sm-9 padding-right">
              <div className="features_items">
                <h2 className="title text-center">Features Items</h2>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/shop/product12.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/shop/product11.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/shop/product10.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/shop/product9.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                      <img src="images/home/new.png" className="new" alt="" />
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/shop/product8.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                      <img src="images/home/sale.png" className="new" alt="" />
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/shop/product7.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/product6.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/product5.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/product4.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/product3.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>


                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/product2.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-sm-4">
                  <div className="product-image-wrapper">
                    <div className="single-products">
                      <div className="productinfo text-center">
                        <img src="images/home/product1.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div className="product-overlay">
                        <div className="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" className="btn btn-default add-to-cart"><i className="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div className="choose">
                      <ul className="nav nav-pills nav-justified">
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i className="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ul className="pagination">
                  <li className="active"><Link to="">1</Link></li>
                  <li><Link to="">2</Link></li>
                  <li><Link to="">3</Link></li>
                  <li><Link to="">&raquo;</Link></li>
                </ul>
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
              <p className="pull-left">Copyright © 2013 E-Shopper. All rights reserved.</p>
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
