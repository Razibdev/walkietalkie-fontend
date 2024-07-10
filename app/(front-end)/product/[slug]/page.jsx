"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { getData } from "@/lib/getData";
import { makePatchRequest } from "@/lib/apiRequest";

export default function page({ initialData = {} }) {
    const { slug } = useParams();

    const [product, setProduct] = useState(null);
    const endpoint = "api/v1/home/product-details/" + slug; // Replace 'your-endpoint' with the actual endpoint

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getData(endpoint, true);
                setProduct(data.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [endpoint]);



    async function addToCart(product_id) {
        let sessionId = localStorage.getItem('sessionId');
        const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/cart", {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                product_id: product_id,
                session_id: sessionId,
                quantity: 1,
                sale_price: 4322,
            })

        });
    }


    return (
        <div>
            {/* Start Breadcrumbs */}
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">Single Product</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><a href="index-2.html"><i className="lni lni-home"></i> Home</a></li>
                                <li><a href="index-2.html">Shop</a></li>
                                <li>Single Product</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrumbs */}

            {/* Start Item Details */}
            <section className="item-details section">
                <div className="container">
                    <div className="top-area">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="product-images">
                                    <main id="gallery">
                                        <div className="main-img">
                                            <img src={product?.feature_image} id="current" alt={product?.product_name} />
                                        </div>
                                        <div className="images">
                                            {product?.image_gallery &&
                                                product?.image_gallery.map((image, j) => {
                                                    return (
                                                        <img src={image} className="img" />
                                                    );
                                                })}
                                        </div>
                                    </main>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <div className="product-info">
                                    <h2 className="title">{product?.product_name}</h2>
                                    <p className="category"><i className="lni lni-tag"></i> Drones:<a href="javascript:void(0)">{product?.category_id?.category_name ? product?.category_id?.category_name : 'Uncategorized'}</a></p>
                                    <h3 className="price">${product?.sale_price ? product?.sale_price : 0}</h3>
                                    <p className="info-text">{product?.product_description}</p>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="form-group color-option">
                                                <label className="title-label" for="size">Choose color</label>
                                                <div className="single-checkbox checkbox-style-1">
                                                    <input type="checkbox" id="checkbox-1" checked />
                                                    <label for="checkbox-1"><span></span></label>
                                                </div>
                                                <div className="single-checkbox checkbox-style-2">
                                                    <input type="checkbox" id="checkbox-2" />
                                                    <label for="checkbox-2"><span></span></label>
                                                </div>
                                                <div className="single-checkbox checkbox-style-3">
                                                    <input type="checkbox" id="checkbox-3" />
                                                    <label for="checkbox-3"><span></span></label>
                                                </div>
                                                <div className="single-checkbox checkbox-style-4">
                                                    <input type="checkbox" id="checkbox-4" />
                                                    <label for="checkbox-4"><span></span></label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="form-group">
                                                <label for="color">Size</label>
                                                <select className="form-control" id="color">
                                                    {product?.size &&
                                                        product?.size.map((size, i) => {
                                                            return (
                                                                <option>{size}</option>
                                                            );
                                                        })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4 col-12">
                                            <div className="form-group quantity">
                                                <label for="color">Quantity</label>
                                                <select className="form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-content">
                                        <div className="row align-items-end">
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <button onClick={() => addToCart(product?._id)} className="button cart-button">
                                                    <button className="btn" style={{ width: '100%' }}>Add to Cart</button>
                                                </button>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="wish-button">
                                                    <button className="btn"><i className="lni lni-reload"></i> Compare</button>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-12">
                                                <div className="wish-button">
                                                    <button className="btn"><i className="lni lni-heart"></i> To Wishlist</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="product-details-info">
                        <div className="single-block">
                            <div className="row">
                                <div className="col-12">
                                    <div className="info-body custom-responsive-margin">
                                        <h4>Details</h4>
                                        <div>
                                            {product?.product_description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-12">
                                <div className="single-block give-review">
                                    <h4>4.5 (Overall)</h4>
                                    <ul>
                                        <li>
                                            <span>5 stars - 38</span>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                        </li>
                                        <li>
                                            <span>4 stars - 10</span>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star"></i>
                                        </li>
                                        <li>
                                            <span>3 stars - 3</span>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star"></i>
                                            <i className="lni lni-star"></i>
                                        </li>
                                        <li>
                                            <span>2 stars - 1</span>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star"></i>
                                            <i className="lni lni-star"></i>
                                            <i className="lni lni-star"></i>
                                        </li>
                                        <li>
                                            <span>1 star - 0</span>
                                            <i className="lni lni-star-filled"></i>
                                            <i className="lni lni-star"></i>
                                            <i className="lni lni-star"></i>
                                            <i className="lni lni-star"></i>
                                            <i className="lni lni-star"></i>
                                        </li>
                                    </ul>
                                    {/* Button trigger modal */}
                                    <button type="button" className="btn review-btn" data-bs-toggle="modal"
                                        data-bs-target="#exampleModal">
                                        Leave a Review
                                    </button>
                                </div>
                            </div>
                            <div className="col-lg-8 col-12">
                                <div className="single-block">
                                    <div className="reviews">
                                        <h4 className="title">Latest Reviews</h4>
                                        {/* Start Single Review */}
                                        <div className="single-review">
                                            <img src="/assets/images/blog/comment1.jpg" alt="#" />
                                            <div className="review-info">
                                                <h4>Awesome quality for the price
                                                    <span>Jacob Hammond
                                                    </span>
                                                </h4>
                                                <ul className="stars">
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor...</p>
                                            </div>
                                        </div>
                                        {/* End Single Review */}
                                        {/* Start Single Review */}
                                        <div className="single-review">
                                            <img src="/assets/images/blog/comment2.jpg" alt="#" />
                                            <div className="review-info">
                                                <h4>My husband love his new...
                                                    <span>Alex Jaza
                                                    </span>
                                                </h4>
                                                <ul className="stars">
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star"></i></li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor...</p>
                                            </div>
                                        </div>
                                        {/* End Single Review */}
                                        {/* Start Single Review */}
                                        <div className="single-review">
                                            <img src="/assets/images/blog/comment3.jpg" alt="#" />
                                            <div className="review-info">
                                                <h4>I love the built quality...
                                                    <span>Jacob Hammond
                                                    </span>
                                                </h4>
                                                <ul className="stars">
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                    <li><i className="lni lni-star-filled"></i></li>
                                                </ul>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                                    tempor...</p>
                                            </div>
                                        </div>
                                        {/* End Single Review */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* End Item Details */}

            {/* Review Modal */}
            <div className="modal fade review-modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Leave a Review</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="review-name">Your Name</label>
                                        <input className="form-control" type="text" id="review-name" required />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="review-email">Your Email</label>
                                        <input className="form-control" type="email" id="review-email" required />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="review-subject">Subject</label>
                                        <input className="form-control" type="text" id="review-subject" required />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label for="review-rating">Rating</label>
                                        <select className="form-control" id="review-rating">
                                            <option>5 Stars</option>
                                            <option>4 Stars</option>
                                            <option>3 Stars</option>
                                            <option>2 Stars</option>
                                            <option>1 Star</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <label for="review-message">Review</label>
                                <textarea className="form-control" id="review-message" rows="8" required></textarea>
                            </div>
                        </div>
                        <div className="modal-footer button">
                            <button type="button" className="btn">Submit Review</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Review Modal */}
        </div>
    )
}
