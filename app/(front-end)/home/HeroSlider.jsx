"use client";
import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { getDataPaginate } from "@/lib/getData";

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


  const [sliders, setData] = useState(null);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const PAGE_SIZE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResult, setTotalResult] = useState(1);
  const endpoint = "api/v1/slider"; // Replace 'your-endpoint' with the actual endpoint

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDataPaginate(endpoint, currentPage, PAGE_SIZE, true);
        //  console.log("getdata", count);
        //  console.log("getdata", data.data);
        setData(data.data);
        setTotalResult(data.all_result);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [endpoint, currentPage, PAGE_SIZE, count]);



  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="hero-slider">
      <Slider {...settings}>
        {sliders &&
          sliders.map((item, i) => {
            return (
              <div
                className="single-slider"
                style={{ backgroundImage: `url(${item?.image_url})` }}
              >
                <div className="content">
                  <h2>
                    {item?.title}
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
            );
          })}
      </Slider>
    </div>
  );
};

export default HeroSlider;
