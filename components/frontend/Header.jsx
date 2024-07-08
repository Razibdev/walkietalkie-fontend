"use client";
import React, { useState, useEffect } from "react";
import { getData } from "@/lib/getData";
import Link from 'next/link';

export default function Header() {
  const [products, setProducts] = useState(null);
  let sessionId = localStorage.getItem('sessionId');
  let userId = localStorage.getItem('_id');
  let userName = localStorage.getItem('name');
  let userEmail = localStorage.getItem('email');
  const endpoint = "api/v1/cart?session_id=" + sessionId; // Replace 'your-endpoint' with the actual endpoint

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getData(endpoint, false);
        setProducts(data.data[0]);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [endpoint]);

  // async function getCart() {
  //   let sessionId = localStorage.getItem('sessionId');
  //   const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/cart?session_id=a1b36aa1-7647-4b67-86fd-ce4b81d933b2");
  //   // setProducts(JSON.stringify(res.data));
  //   console.log(JSON.stringify(res));
  // }
  // getCart();

  return (
    <div>
      {/* Preloader */}
      {/*
      <div className="preloader">
        <div className="preloader-inner">
          <div className="preloader-icon">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      */}
      {/* /End Preloader */}

      {/* Start Header Area */}
      <header className="header navbar-area">
        {/* Start Topbar */}
        <div className="topbar">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-4 col-md-4 col-12">
                <div className="top-left">
                  <ul className="menu-top-link">
                    <li>
                      <div className="select-position">
                        <select id="select4">
                          <option value="0" selected>$ USD</option>
                          <option value="1">€ EURO</option>
                          <option value="2">$ CAD</option>
                          <option value="3">₹ INR</option>
                          <option value="4">¥ CNY</option>
                          <option value="5">৳ BDT</option>
                        </select>
                      </div>
                    </li>
                    <li>
                      <div className="select-position">
                        <select id="select5">
                          <option value="0" selected>English</option>
                          <option value="1">Español</option>
                          <option value="2">Filipino</option>
                          <option value="3">Français</option>
                          <option value="4">العربية</option>
                          <option value="5">हिन्दी</option>
                          <option value="6">বাংলা</option>
                        </select>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="top-middle">
                  <ul className="useful-links">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/about-us">About Us</Link></li>
                    <li><Link href="/contact-us">Contact Us</Link></li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-12">
                <div className="top-end">
                  {userId ? (
                    <div class="dropdown">
                      <button class="btn dropdown-toggle useroptions border-0 text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        {userName}
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  ) : (
                    <ul className="user-login">
                      <li>
                        <Link href="/login">Sign In</Link>
                      </li>
                      <li>
                        <Link href="/register">Register</Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Topbar */}
        {/* Start Header Middle */}
        <div className="header-middle">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-3 col-7">
                {/* Start Header Logo */}
                <Link className="navbar-brand" href="/">
                  <img src="/assets/images/logo/logo.svg" alt="Logo" />
                </Link>
                {/* End Header Logo */}
              </div>
              <div className="col-lg-5 col-md-7 d-xs-none">
                {/* Start Main Menu Search */}
                <div className="main-menu-search">
                  {/* navbar search start */}
                  <div className="navbar-search search-style-5">
                    <div className="search-select">
                      <div className="select-position">
                        <select id="select1">
                          <option selected>All</option>
                          <option value="1">option 01</option>
                          <option value="2">option 02</option>
                          <option value="3">option 03</option>
                          <option value="4">option 04</option>
                          <option value="5">option 05</option>
                        </select>
                      </div>
                    </div>
                    <div className="search-input">
                      <input type="text" placeholder="Search" />
                    </div>
                    <div className="search-btn">
                      <button><i className="lni lni-search-alt"></i></button>
                    </div>
                  </div>
                  {/* navbar search Ends */}
                </div>
                {/* End Main Menu Search */}
              </div>
              <div className="col-lg-4 col-md-2 col-5">
                <div className="middle-right-area">
                  <div className="nav-hotline">
                    <i className="lni lni-phone"></i>
                    <h3>Hotline:
                      <span>(+100) 123 456 7890</span>
                    </h3>
                  </div>
                  <div className="navbar-cart">
                    <div className="wishlist">
                      <a href="javascript:void(0)">
                        <i className="lni lni-heart"></i>
                        <span className="total-items">0</span>
                      </a>
                    </div>
                    <div className="cart-items">
                      <a href="javascript:void(0)" className="main-btn">
                        <i className="lni lni-cart"></i>
                        <span className="total-items">{products?.total_quantity > 0 ? products?.total_quantity : 0}</span>
                      </a>
                      {/* Shopping Item */}
                      <div className="shopping-item">
                        <div className="dropdown-cart-header">
                          <span>{products?.total_quantity > 0 ? products?.total_quantity : 0} Items</span>
                          <Link href="/cart">View Cart</Link>
                        </div>
                        <ul className="shopping-list">
                          {products?.items &&
                            products?.items.map((product, i) => {
                              return (
                                <li>
                                  <a href="javascript:void(0)" class="remove" title="Remove this item"><i
                                    class="lni lni-close"></i></a>
                                  <div class="cart-img-head">
                                    <a class="cart-img" href={`/product/${product?.product?.product_slug}`}><img
                                      src={product?.feature_image} alt={product?.product?.product_name} /></a>
                                  </div>

                                  <div class="content">
                                    <h4><a href={`/product/${product?.product_slug}`}>{product?.product?.product_name}</a></h4>
                                    <p class="quantity">{product?.quantity}x - <span class="amount">${product?.price ? product?.price : 0}</span></p>
                                  </div>
                                </li>
                              );
                            })}
                        </ul>
                        <div className="bottom">
                          <div className="total">
                            <span>Total</span>
                            <span className="total-amount">${products?.total_amount > 0 ? products?.total_amount : 0}</span>
                          </div>
                          <div className="button">
                            <Link href="/checkout" className="btn animate">Checkout</Link>
                          </div>
                        </div>
                      </div>
                      {/*/ End Shopping Item */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Header Middle */}
        {/* Start Header Bottom */}
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-6 col-12">
              <div className="nav-inner">
                {/* Start Mega Category Menu */}
                <div className="mega-category-menu">
                  <span className="cat-button"><i className="lni lni-menu"></i>All Categories</span>
                  <ul className="sub-category">
                    <li><Link href="/category/name">Electronics <i className="lni lni-chevron-right"></i></Link>
                      <ul className="inner-sub-category">
                        <li><Link href="/category/name">Digital Cameras</Link></li>
                        <li><Link href="/category/name">Camcorders</Link></li>
                        <li><Link href="/category/name">Camera Drones</Link></li>
                        <li><Link href="/category/name">Smart Watches</Link></li>
                        <li><Link href="/category/name">Headphones</Link></li>
                        <li><Link href="/category/name">MP3 Players</Link></li>
                        <li><Link href="/category/name">Microphones</Link></li>
                        <li><Link href="/category/name">Chargers</Link></li>
                        <li><Link href="/category/name">Batteries</Link></li>
                        <li><Link href="/category/name">Cables & Adapters</Link></li>
                      </ul>
                    </li>
                    <li><Link href="/category/name">accessories</Link></li>
                    <li><Link href="/category/name">Televisions</Link></li>
                    <li><Link href="/category/name">best selling</Link></li>
                    <li><Link href="/category/name">top 100 offer</Link></li>
                    <li><Link href="/category/name">sunglass</Link></li>
                    <li><Link href="/category/name">watch</Link></li>
                    <li><Link href="/category/name">man’s product</Link></li>
                    <li><Link href="/category/name">Home Audio & Theater</Link></li>
                    <li><Link href="/category/name">Computers & Tablets </Link></li>
                    <li><Link href="/category/name">Video Games </Link></li>
                    <li><Link href="/category/name">Home Appliances </Link></li>
                  </ul>
                </div>
                {/* End Mega Category Menu */}
                {/* Start Navbar */}
                <nav className="navbar navbar-expand-lg">
                  <button className="navbar-toggler mobile-menu-btn" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                    <span className="toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse sub-menu-bar" id="navbarSupportedContent">
                    <ul id="nav" className="navbar-nav ms-auto">
                      <li className="nav-item">
                        <Link href="/" className="active" aria-label="Toggle navigation">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/blog" aria-label="Toggle navigation">Blog</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/contact-us" aria-label="Toggle navigation">Contact Us</Link>
                      </li>
                      <li className="nav-item">
                        <Link href="/faq" aria-label="Toggle navigation">FAQ</Link>
                      </li>
                    </ul>
                  </div> {/* navbar collapse */}
                </nav>
                {/* End Navbar */}
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              {/* Start Nav Social */}
              <div className="nav-social">
                <h5 className="title">Follow Us:</h5>
                <ul>
                  <li>
                    <a href="javascript:void(0)"><i className="lni lni-facebook-filled"></i></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"><i className="lni lni-twitter-original"></i></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"><i className="lni lni-instagram"></i></a>
                  </li>
                  <li>
                    <a href="javascript:void(0)"><i className="lni lni-skype"></i></a>
                  </li>
                </ul>
              </div>
              {/* End Nav Social */}
            </div>
          </div>
        </div>
        {/* End Header Bottom */}
      </header>
      {/* End Header Area */}
    </div>
  )
}
