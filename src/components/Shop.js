import React from 'react'
import { Link } from 'react-router-dom'
export default function Shop() {
  return (
    <div>
      <header id="header">
        <div class="header_top">
          <div class="container">
            <div class="row">
              <div class="col-sm-6 ">
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
                    <li class="dropdown"><Link to="#" class="active">Shop<i class="fa fa-angle-down"></i></Link>
                      <ul role="menu" class="sub-menu">
                        <li><Link to="shop.html" class="active">Products</Link></li>
                        <li><Link to="product-details.html">Product Details</Link></li>
                        <li><Link to="checkout.html">Checkout</Link></li>
                        <li><Link to="cart.html">Cart</Link></li>
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

      <section id="advertisement">
        <div class="container">
          <img src="images/shop/advertisement.jpg" alt="" />
        </div>
      </section>

      <section>
        <div class="container">
          <div class="row">
            <div class="col-sm-3">
              <div class="left-sidebar">
                <h2>Category</h2>
                <div class="panel-group category-products" id="accordian">
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <Link data-toggle="collapse" data-parent="#accordian" to="#sportswear">
                          <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                          Sportswear
                        </Link>
                      </h4>
                    </div>
                    <div id="sportswear" class="panel-collapse collapse">
                      <div class="panel-body">
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
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <Link data-toggle="collapse" data-parent="#accordian" to="#mens">
                          <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                          Mens
                        </Link>
                      </h4>
                    </div>
                    <div id="mens" class="panel-collapse collapse">
                      <div class="panel-body">
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

                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title">
                        <Link data-toggle="collapse" data-parent="#accordian" to="#womens">
                          <span class="badge pull-right"><i class="fa fa-plus"></i></span>
                          Womens
                        </Link>
                      </h4>
                    </div>
                    <div id="womens" class="panel-collapse collapse">
                      <div class="panel-body">
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
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title"><Link to="#">Kids</Link></h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title"><Link to="#">Fashion</Link></h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title"><Link to="#">Households</Link></h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title"><Link to="#">Interiors</Link></h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title"><Link to="#">Clothing</Link></h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title"><Link to="#">Bags</Link></h4>
                    </div>
                  </div>
                  <div class="panel panel-default">
                    <div class="panel-heading">
                      <h4 class="panel-title"><Link to="#">Shoes</Link></h4>
                    </div>
                  </div>
                </div>

                <div class="brands_products">
                  <h2>Brands</h2>
                  <div class="brands-name">
                    <ul class="nav nav-pills nav-stacked">
                      <li><Link to=""> <span class="pull-right">(50)</span>Acne</Link></li>
                      <li><Link to=""> <span class="pull-right">(56)</span>Grüne Erde</Link></li>
                      <li><Link to=""> <span class="pull-right">(27)</span>Albiro</Link></li>
                      <li><Link to=""> <span class="pull-right">(32)</span>Ronhill</Link></li>
                      <li><Link to=""> <span class="pull-right">(5)</span>Oddmolly</Link></li>
                      <li><Link to=""> <span class="pull-right">(9)</span>Boudestijn</Link></li>
                      <li><Link to=""> <span class="pull-right">(4)</span>Rösch creative culture</Link></li>
                    </ul>
                  </div>
                </div>

                <div class="price-range">
                  <h2>Price Range</h2>
                  <div class="well">
                    <input type="text" class="span2" value="" data-slider-min="0" data-slider-max="600" data-slider-step="5" data-slider-value="[250,450]" id="sl2" /><br />
                      <b>$ 0</b> <b class="pull-right">$ 600</b>
                  </div>
                </div>

                <div class="shipping text-center">
                  <img src="images/home/shipping.jpg" alt="" />
                </div>

              </div>
            </div>

            <div class="col-sm-9 padding-right">
              <div class="features_items">
                <h2 class="title text-center">Features Items</h2>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/shop/product12.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/shop/product11.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/shop/product10.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/shop/product9.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                      <img src="images/home/new.png" class="new" alt="" />
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/shop/product8.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                      <img src="images/home/sale.png" class="new" alt="" />
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/shop/product7.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/home/product6.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/home/product5.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/home/product4.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/home/product3.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>


                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/home/product2.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div class="col-sm-4">
                  <div class="product-image-wrapper">
                    <div class="single-products">
                      <div class="productinfo text-center">
                        <img src="images/home/product1.jpg" alt="" />
                        <h2>$56</h2>
                        <p>Easy Polo Black Edition</p>
                        <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                      </div>
                      <div class="product-overlay">
                        <div class="overlay-content">
                          <h2>$56</h2>
                          <p>Easy Polo Black Edition</p>
                          <Link to="#" class="btn btn-default add-to-cart"><i class="fa fa-shopping-cart"></i>Add to cart</Link>
                        </div>
                      </div>
                    </div>
                    <div class="choose">
                      <ul class="nav nav-pills nav-justified">
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to wishlist</Link></li>
                        <li><Link to=""><i class="fa fa-plus-square"></i>Add to compare</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <ul class="pagination">
                  <li class="active"><Link to="">1</Link></li>
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
              <p class="pull-left">Copyright © 2013 E-Shopper. All rights reserved.</p>
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
