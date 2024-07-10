"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        <div
          className="single-slider"
          style={{ backgroundImage: `url(/assets/images/hero/slider-bg1.jpg)` }}
        >
          <div className="content">
            <h2>
              <span>No restocking fee ($35 savings)</span> M75 Sport Watch
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3>
              <span>Now Only</span> $320.99
            </h3>
            <div className="button">
              <a href="product-grids.html" className="btn">
                Shop Now
              </a>
            </div>
          </div>
        </div>
        <div
          className="single-slider"
          style={{ backgroundImage: `url(/assets/images/hero/slider-bg2.jpg)` }}
        >
          <div className="content">
            <h2>
              <span>Big Sale Offer</span> Get the Best Deal on CCTV Camera
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <h3>
              <span>Combo Only:</span> $590.00
            </h3>
            <div className="button">
              <a href="product-grids.html" className="btn">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default HeroSlider;
