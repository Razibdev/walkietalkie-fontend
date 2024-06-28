"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getDataPaginate } from "@/lib/getData";

export default function TrendingProduct() {
    const [products, setData] = useState(null);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const PAGE_SIZE = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [totalResult, setTotalResult] = useState(1);
    const endpoint = "api/v1/home/trading"; // Replace 'your-endpoint' with the actual endpoint

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
        <div>
            <section className="trending-product section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-title">
                                <h2>Trending Product</h2>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have
                                    suffered alteration in some form.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                    {products &&
                        products.map((item, i) => {
                        return (
                            <div className="col-lg-3 col-md-6 col-12">
                            {/* Start Single Product */}
                            <div className="single-product">
                                <div className="product-image">
                                    <img src={item?.feature_image} alt={item?.product_name} />
                                    <div className="button">
                                        <Link href={`/product/${item?.product_slug}`} className="btn"><i className="lni lni-cart"></i> Add to Cart</Link>
                                    </div>
                                </div>
                                <div className="product-info">
                                    <Link href={`/category/${item?.category?.category_slug ? item?.category?.category_slug : 'uncategorized'}`}><span className="category">{item?.category?.category_name ? item?.category?.category_name : 'Uncategorized'}</span></Link>
                                    <h4 className="title">
                                        <Link href={`/product/${item?.product_slug}`}>{item?.product_name}</Link>
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
                                        <span>${item?.sale_price ? item?.sale_price : 0}</span>
                                    </div>
                                </div>
                            </div>
                            {/* End Single Product */}
                        </div>
                        );
                    })}
                    </div>
                </div>
            </section>
        </div>
    )
}
