import React from 'react';
import TrendingProduct from "@/components/frontend/home/TrendingProduct";
<<<<<<< HEAD
=======
import HeroSlider from './home/HeroSlider';
>>>>>>> 9b85663b26e16cd7b68e1d3a241333bca8126825

export default function page() {
  return (
    <div>

      {/* Start Hero Area */}
      <section className="hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-12 custom-padding-right">
<<<<<<< HEAD
              <div className="slider-head">
                {/* Start Hero Slider */}
                <div class="hero-slider">
                  {/* Start Single Slider */}
                  <div class="single-slider"
                    style={{ backgroundImage: `url(/assets/images/hero/slider-bg1.jpg)` }}>
                    <div class="content">
                      <h2><span>No restocking fee ($35 savings)</span>
                        M75 Sport Watch
                      </h2>
                      <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                        labore dolore magna aliqua.</p>
                      <h3><span>Now Only</span> $320.99</h3>
                      <div class="button">
                        <a href="product-grids.html" class="btn">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  {/* End Single Slider */}
                  {/* Start Single Slider */}
                  <div class="single-slider"
                    style={{ backgroundImage: `url(/assets/images/hero/slider-bg2.jpg)` }}>
                    <div class="content">
                      <h2><span>Big Sale Offer</span>
                        Get the Best Deal on CCTV Camera
                      </h2>
                      <p>Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut
                        labore dolore magna aliqua.</p>
                      <h3><span>Combo Only:</span> $590.00</h3>
                      <div class="button">
                        <a href="product-grids.html" class="btn">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  {/* End Single Slider */}
                </div>
                {/* End Hero Slider */}
              </div>
=======
            {/* React slider */}
               <HeroSlider />
>>>>>>> 9b85663b26e16cd7b68e1d3a241333bca8126825
            </div>
            <div className="col-lg-4 col-12">
              <div className="row">
                <div className="col-lg-12 col-md-6 col-12 md-custom-padding">
                  {/* Start Small Banner */}
                  <div className="hero-small-banner" style={{ backgroundImage: `url('/assets/images/banner/banner-1-bg.jpg')` }}>
                    <div className="content">
                      <h2>
                        <span>New line required</span>
                        iPhone 12 Pro Max
                      </h2>
                      <h3>$259.99</h3>
                    </div>
                  </div>
                  {/* End Small Banner */}
                </div>
                <div className="col-lg-12 col-md-6 col-12">
                  {/* Start Small Banner */}
                  <div className="hero-small-banner style2">
                    <div className="content">
                      <h2>Weekly Sale!</h2>
                      <p>Saving up to 50% off all online store items this week.</p>
                      <div className="button">
                        <a className="btn" href="product-grids.html">Shop Now</a>
                      </div>
                    </div>
                  </div>
                  {/* Start Small Banner */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Area */}

      {/* Start Featured Categories Area */}
      <section className="featured-categories section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Featured Categories</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Category */}
              <div className="single-category">
                <h3 className="heading">TV & Audios</h3>
                <ul>
                  <li><a href="product-grids.html">Smart Television</a></li>
                  <li><a href="product-grids.html">QLED TV</a></li>
                  <li><a href="product-grids.html">Audios</a></li>
                  <li><a href="product-grids.html">Headphones</a></li>
                  <li><a href="product-grids.html">View All</a></li>
                </ul>
                <div className="images">
                  <img src="/assets/images/featured-categories/fetured-item-1.png" alt="#" />
                </div>
              </div>
              {/* End Single Category */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Category */}
              <div className="single-category">
                <h3 className="heading">Desktop & Laptop</h3>
                <ul>
                  <li><a href="product-grids.html">Smart Television</a></li>
                  <li><a href="product-grids.html">QLED TV</a></li>
                  <li><a href="product-grids.html">Audios</a></li>
                  <li><a href="product-grids.html">Headphones</a></li>
                  <li><a href="product-grids.html">View All</a></li>
                </ul>
                <div className="images">
                  <img src="/assets/images/featured-categories/fetured-item-2.png" alt="#" />
                </div>
              </div>
              {/* End Single Category */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Category */}
              <div className="single-category">
                <h3 className="heading">Cctv Camera</h3>
                <ul>
                  <li><a href="product-grids.html">Smart Television</a></li>
                  <li><a href="product-grids.html">QLED TV</a></li>
                  <li><a href="product-grids.html">Audios</a></li>
                  <li><a href="product-grids.html">Headphones</a></li>
                  <li><a href="product-grids.html">View All</a></li>
                </ul>
                <div className="images">
                  <img src="/assets/images/featured-categories/fetured-item-3.png" alt="#" />
                </div>
              </div>
              {/* End Single Category */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Category */}
              <div className="single-category">
                <h3 className="heading">Dslr Camera</h3>
                <ul>
                  <li><a href="product-grids.html">Smart Television</a></li>
                  <li><a href="product-grids.html">QLED TV</a></li>
                  <li><a href="product-grids.html">Audios</a></li>
                  <li><a href="product-grids.html">Headphones</a></li>
                  <li><a href="product-grids.html">View All</a></li>
                </ul>
                <div className="images">
                  <img src="/assets/images/featured-categories/fetured-item-4.png" alt="#" />
                </div>
              </div>
              {/* End Single Category */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Category */}
              <div className="single-category">
                <h3 className="heading">Smart Phones</h3>
                <ul>
                  <li><a href="product-grids.html">Smart Television</a></li>
                  <li><a href="product-grids.html">QLED TV</a></li>
                  <li><a href="product-grids.html">Audios</a></li>
                  <li><a href="product-grids.html">Headphones</a></li>
                  <li><a href="product-grids.html">View All</a></li>
                </ul>
                <div className="images">
                  <img src="/assets/images/featured-categories/fetured-item-5.png" alt="#" />
                </div>
              </div>
              {/* End Single Category */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Category */}
              <div className="single-category">
                <h3 className="heading">Game Console</h3>
                <ul>
                  <li><a href="product-grids.html">Smart Television</a></li>
                  <li><a href="product-grids.html">QLED TV</a></li>
                  <li><a href="product-grids.html">Audios</a></li>
                  <li><a href="product-grids.html">Headphones</a></li>
                  <li><a href="product-grids.html">View All</a></li>
                </ul>
                <div className="images">
                  <img src="/assets/images/featured-categories/fetured-item-6.png" alt="#" />
                </div>
              </div>
              {/* End Single Category */}
            </div>
          </div>
        </div>
      </section>
      {/* End Features Area */}

      {/* Start Trending Product Area */}
      <TrendingProduct/>
      {/* End Trending Product Area */}

      {/* Start Banner Area */}
      <section className="banner section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="single-banner" style={{ backgroundImage: `url('/assets/images/banner/banner-1-bg.jpg')` }}>
                <div className="content">
                  <h2>Smart Watch 2.0</h2>
                  <p>Space Gray Aluminum Case with <br />Black/Volt Real Sport Band </p>
                  <div className="button">
                    <a href="product-grids.html" className="btn">View Details</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="single-banner custom-responsive-margin" style={{ backgroundImage: `url('/assets/images/banner/banner-2-bg.jpg')` }}>
                <div className="content">
                  <h2>Smart Headphone</h2>
                  <p>Lorem ipsum dolor sit amet, <br />eiusmod tempor
                    incididunt ut labore.</p>
                  <div className="button">
                    <a href="product-grids.html" className="btn">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Area */}

      {/* Start Special Offer */}
      <section className="special-offer section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Special Offer</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 col-md-12 col-12">
              <div className="row">
                <div className="col-lg-4 col-md-4 col-12">
                  {/* Start Single Product */}
                  <div className="single-product">
                    <div className="product-image">
                      <img src="/assets/images/products/product-3.jpg" alt="#" />
                      <div className="button">
                        <a href="product-details.html" className="btn"><i className="lni lni-cart"></i> Add to
                          Cart</a>
                      </div>
                    </div>
                    <div className="product-info">
                      <span className="category">Camera</span>
                      <h4 className="title">
                        <a href="product-grids.html">WiFi Security Camera</a>
                      </h4>
                      <ul className="review">
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><span>5.0 Review(s)</span></li>
                      </ul>
                      <div className="price">
                        <span>$399.00</span>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  {/* Start Single Product */}
                  <div className="single-product">
                    <div className="product-image">
                      <img src="/assets/images/products/product-8.jpg" alt="#" />
                      <div className="button">
                        <a href="product-details.html" className="btn"><i className="lni lni-cart"></i> Add to
                          Cart</a>
                      </div>
                    </div>
                    <div className="product-info">
                      <span className="category">Laptop</span>
                      <h4 className="title">
                        <a href="product-grids.html">Apple MacBook Air</a>
                      </h4>
                      <ul className="review">
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><span>5.0 Review(s)</span></li>
                      </ul>
                      <div className="price">
                        <span>$899.00</span>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                </div>
                <div className="col-lg-4 col-md-4 col-12">
                  {/* Start Single Product */}
                  <div className="single-product">
                    <div className="product-image">
                      <img src="/assets/images/products/product-6.jpg" alt="#" />
                      <div className="button">
                        <a href="product-details.html" className="btn"><i className="lni lni-cart"></i> Add to
                          Cart</a>
                      </div>
                    </div>
                    <div className="product-info">
                      <span className="category">Speaker</span>
                      <h4 className="title">
                        <a href="product-grids.html">Bluetooth Speaker</a>
                      </h4>
                      <ul className="review">
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star-filled"></i></li>
                        <li><i className="lni lni-star"></i></li>
                        <li><span>4.0 Review(s)</span></li>
                      </ul>
                      <div className="price">
                        <span>$70.00</span>
                      </div>
                    </div>
                  </div>
                  {/* End Single Product */}
                </div>
              </div>
              {/* Start Banner */}
              <div className="single-banner right" style={{ backgroundImage: `url('/assets/images/banner/banner-3-bg.jpg')` }}>
                <div className="content">
                  <h2>Samsung Notebook 9 </h2>
                  <p>Lorem ipsum dolor sit amet, <br />eiusmod tempor
                    incididunt ut labore.</p>
                  <div className="price">
                    <span>$590.00</span>
                  </div>
                  <div className="button">
                    <a href="product-grids.html" className="btn">Shop Now</a>
                  </div>
                </div>
              </div>
              {/* End Banner */}
            </div>
            <div className="col-lg-4 col-md-12 col-12">
              <div className="offer-content">
                <div className="image">
                  <img src="/assets/images/offer/offer-image.jpg" alt="#" />
                  <span className="sale-tag">-50%</span>
                </div>
                <div className="text">
                  <h2><a href="product-grids.html">Bluetooth Headphone</a></h2>
                  <ul className="review">
                    <li><i className="lni lni-star-filled"></i></li>
                    <li><i className="lni lni-star-filled"></i></li>
                    <li><i className="lni lni-star-filled"></i></li>
                    <li><i className="lni lni-star-filled"></i></li>
                    <li><i className="lni lni-star-filled"></i></li>
                    <li><span>5.0 Review(s)</span></li>
                  </ul>
                  <div className="price">
                    <span>$200.00</span>
                    <span className="discount-price">$400.00</span>
                  </div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry incididunt ut
                    eiusmod tempor labores.</p>
                </div>
                <div className="box-head">
                  <div className="box">
                    <h1 id="days">000</h1>
                    <h2 id="daystxt">Days</h2>
                  </div>
                  <div className="box">
                    <h1 id="hours">00</h1>
                    <h2 id="hourstxt">Hours</h2>
                  </div>
                  <div className="box">
                    <h1 id="minutes">00</h1>
                    <h2 id="minutestxt">Minutes</h2>
                  </div>
                  <div className="box">
                    <h1 id="seconds">00</h1>
                    <h2 id="secondstxt">Secondes</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Special Offer */}

      {/* Start Home Product List */}
      <section className="home-product-list section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-12 custom-responsive-margin">
              <h4 className="list-title">Best Sellers</h4>
              {/* Start Single List */}
              <div className="single-list">
                <div className="list-image">
                  <a href="product-grids.html"><img src="/assets/images/home-product-list/01.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                  <h3>
                    <a href="product-grids.html">GoPro Hero4 Silver</a>
                  </h3>
                  <span>$287.99</span>
                </div>
              </div>
              {/* End Single List */}
              {/* Start Single List */}
              <div className="single-list">
                <div className="list-image">
                  <a href="product-grids.html"><img src="/assets/images/home-product-list/02.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                  <h3>
                    <a href="product-grids.html">Puro Sound Labs BT2200</a>
                  </h3>
                  <span>$95.00</span>
                </div>
              </div>
              {/* End Single List */}
              {/* Start Single List */}
              <div className="single-list">
                <div className="list-image">
                  <a href="product-grids.html"><img src="/assets/images/home-product-list/03.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                  <h3>
                    <a href="product-grids.html">HP OfficeJet Pro 8710</a>
                  </h3>
                  <span>$120.00</span>
                </div>
              </div>
              {/* End Single List */}
            </div>
            <div className="col-lg-4 col-md-4 col-12 custom-responsive-margin">
              <h4 className="list-title">New Arrivals</h4>
              {/* Start Single List */}
              <div className="single-list">
                <div className="list-image">
                  <a href="product-grids.html"><img src="/assets/images/home-product-list/04.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                  <h3>
                    <a href="product-grids.html">iPhone X 256 GB Space Gray</a>
                  </h3>
                  <span>$1150.00</span>
                </div>
              </div>
              {/* End Single List */}
              {/* Start Single List */}
              <div className="single-list">
                <div className="list-image">
                  <a href="product-grids.html"><img src="/assets/images/home-product-list/05.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                  <h3>
                    <a href="product-grids.html">Canon EOS M50 Mirrorless Camera</a>
                  </h3>
                  <span>$950.00</span>
                </div>
              </div>
              {/* End Single List */}
              {/* Start Single List */}
              <div className="single-list">
                <div className="list-image">
                  <a href="product-grids.html"><img src="/assets/images/home-product-list/06.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                  <h3>
                    <a href="product-grids.html">Microsoft Xbox One S</a>
                  </h3>
                  <span>$298.00</span>
                </div>
              </div>
              {/* End Single List */}
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <h4 className="list-title">Top Rated</h4>
              {/* Start Single List */}
              <div className="single-list">
                <div className="list-image">
                  <a href="product-grids.html"><img src="/assets/images/home-product-list/07.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                  <h3>
                    <a href="product-grids.html">Samsung Gear 360 VR Camera</a>
                  </h3>
                  <span>$68.00</span>
                </div>
              </div>
              {/* End Single List */}
              {/* Start Single List */}
              <div className="single-list">
                <div className="list-image">
                  <a href="product-grids.html"><img src="/assets/images/home-product-list/08.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                  <h3>
                    <a href="product-grids.html">Samsung Galaxy S9+ 64 GB</a>
                  </h3>
                  <span>$840.00</span>
                </div>
              </div>
              {/* End Single List */}
              {/* Start Single List */}
              <div className="single-list">
                <div className="list-image">
                  <a href="product-grids.html"><img src="/assets/images/home-product-list/09.jpg" alt="#" /></a>
                </div>
                <div className="list-info">
                  <h3>
                    <a href="product-grids.html">Zeus Bluetooth Headphones</a>
                  </h3>
                  <span>$28.00</span>
                </div>
              </div>
              {/* End Single List */}
            </div>
          </div>
        </div>
      </section>
      {/* End Home Product List */}

      {/* Start Brands Area */}
      <div className="brands">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
              <h2 className="title">Popular Brands</h2>
            </div>
          </div>
          <div className="brands-logo-wrapper">
            <div className="brands-logo-carousel d-flex align-items-center justify-content-between">
              <div className="brand-logo">
                <img src="/assets/images/brands/01.png" alt="#" />
              </div>
              <div className="brand-logo">
                <img src="/assets/images/brands/02.png" alt="#" />
              </div>
              <div className="brand-logo">
                <img src="/assets/images/brands/03.png" alt="#" />
              </div>
              <div className="brand-logo">
                <img src="/assets/images/brands/04.png" alt="#" />
              </div>
              <div className="brand-logo">
                <img src="/assets/images/brands/05.png" alt="#" />
              </div>
              <div className="brand-logo">
                <img src="/assets/images/brands/06.png" alt="#" />
              </div>
              <div className="brand-logo">
                <img src="/assets/images/brands/03.png" alt="#" />
              </div>
              <div className="brand-logo">
                <img src="/assets/images/brands/04.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Brands Area */}

      {/* Start Blog Section Area */}
      <section className="blog-section section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title">
                <h2>Our Latest News</h2>
                <p>There are many variations of passages of Lorem
                  Ipsum available, but the majority have suffered alteration in some form.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Blog */}
              <div className="single-blog">
                <div className="blog-img">
                  <a href="blog-single-sidebar.html">
                    <img src="/assets/images/blog/blog-1.jpg" alt="#" />
                  </a>
                </div>
                <div className="blog-content">
                  <a className="category" href="javascript:void(0)">eCommerce</a>
                  <h4>
                    <a href="blog-single-sidebar.html">What information is needed for shipping?</a>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt.</p>
                  <div className="button">
                    <a href="javascript:void(0)" className="btn">Read More</a>
                  </div>
                </div>
              </div>
              {/* End Single Blog */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Blog */}
              <div className="single-blog">
                <div className="blog-img">
                  <a href="blog-single-sidebar.html">
                    <img src="/assets/images/blog/blog-2.jpg" alt="#" />
                  </a>
                </div>
                <div className="blog-content">
                  <a className="category" href="javascript:void(0)">Gaming</a>
                  <h4>
                    <a href="blog-single-sidebar.html">Interesting fact about gaming consoles</a>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt.</p>
                  <div className="button">
                    <a href="javascript:void(0)" className="btn">Read More</a>
                  </div>
                </div>
              </div>
              {/* End Single Blog */}
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Single Blog */}
              <div className="single-blog">
                <div className="blog-img">
                  <a href="blog-single-sidebar.html">
                    <img src="/assets/images/blog/blog-3.jpg" alt="#" />
                  </a>
                </div>
                <div className="blog-content">
                  <a className="category" href="javascript:void(0)">Electronic</a>
                  <h4>
                    <a href="blog-single-sidebar.html">Electronics, instrumentation & control engineering
                    </a>
                  </h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt.</p>
                  <div className="button">
                    <a href="javascript:void(0)" className="btn">Read More</a>
                  </div>
                </div>
              </div>
              {/* End Single Blog */}
            </div>
          </div>
        </div>
      </section>
      {/* End Blog Section Area */}

      {/* Start Shipping Info */}
      <section className="shipping-info">
        <div className="container">
          <ul>
            {/* Free Shipping */}
            <li>
              <div className="media-icon">
                <i className="lni lni-delivery"></i>
              </div>
              <div className="media-body">
                <h5>Free Shipping</h5>
                <span>On order over $99</span>
              </div>
            </li>
            {/* Money Return */}
            <li>
              <div className="media-icon">
                <i className="lni lni-support"></i>
              </div>
              <div className="media-body">
                <h5>24/7 Support.</h5>
                <span>Live Chat Or Call.</span>
              </div>
            </li>
            {/* Support 24/7 */}
            <li>
              <div className="media-icon">
                <i className="lni lni-credit-cards"></i>
              </div>
              <div className="media-body">
                <h5>Online Payment.</h5>
                <span>Secure Payment Services.</span>
              </div>
            </li>
            {/* Safe Payment */}
            <li>
              <div className="media-icon">
                <i className="lni lni-reload"></i>
              </div>
              <div className="media-body">
                <h5>Easy Return.</h5>
                <span>Hassle Free Shopping.</span>
              </div>
            </li>
          </ul>
        </div>
      </section>
      {/* End Shipping Info */}

    </div>
  )
}
