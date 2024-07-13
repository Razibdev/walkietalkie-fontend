"use client";
import React, { useState, useEffect } from "react";
import { getData } from "@/lib/getData";
import Link from 'next/link';
import { useRouter } from "next/navigation";

export default function page() {
    const [products, setProducts] = useState(null);
    const router = useRouter()

    const [isSave, setVat] = useState(60);
    const [isShipping, setShipping] = useState(100);

    const [sessionId, setSessionId] = useState(null);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
      // Check if localStorage is available
      if (typeof window !== "undefined") {
        const sessionId = localStorage.getItem("sessionId");
        const userId = localStorage.getItem("_id");

        setSessionId(sessionId);
        setUserId(userId);
      }
    }, []);

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




    const [name, setName] = useState('Dip');
    const [email, setEmail] = useState('example@gmail.com');
    const [mobile, setMobile] = useState('01741571104');
    const [address, setAddress] = useState('Dhaka, Bangladesh');
    const [district_id, setDistrictId] = useState('801df458rg64sd1');

    const [amount, setAmount] = useState((products?.total_amount + isShipping) - isSave > 0 ? (products?.total_amount + isShipping) - isSave : 0);
    const [payment_method, setPaymentMethod] = useState('bKash');
    const [payment_status, setPaymentstatus] = useState('paid');

    const handleNameChange = (event) => {
        setName(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };
    const handleMobileChange = (event) => {
        setMobile(event.target.value);
    };
    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };
    const handleDistrictChange = (event) => {
        setDistrictId(event.target.value);
    };
    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };
    const handlePaymentMethodChange = (event) => {
        setPaymentMethod(event.target.value);
    };
    const handlePaymentstatusChange = (event) => {
        setPaymentstatus(event.target.value);
    };


    async function handleSubmit(event) {
        event.preventDefault();
       const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"/api/v1/order",{
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          credentials: 'include',
          body: JSON.stringify({
            session_id: sessionId,
            user_id: userId,
            name: name,
            email: email,
            mobile: mobile,
            address: address,
            district_id: district_id,
            amount: amount,
            payment_method: payment_method,
            payment_status: payment_status,
          })
        });
        router.push('/success');
        // if(content?.role == 'admin'){
        // }else{
        //   router.push('/');
        // }
      }

    return (
        <div>
            {/* Start Breadcrumbs */}
            <div className="breadcrumbs">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="breadcrumbs-content">
                                <h1 className="page-title">checkout</h1>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12">
                            <ul className="breadcrumb-nav">
                                <li><a href="index-2.html"><i className="lni lni-home"></i> Home</a></li>
                                <li><a href="index-2.html">Shop</a></li>
                                <li>checkout</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Breadcrumbs */}

            {/*====== Checkout Form Steps Part Start ======*/}
            <section className="checkout-wrapper section checkout-steps-form-style-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="row checkout-steps-form-content">
                                <div className="col-md-12">
                                    <div className="single-form form-default">
                                        <label>User Name</label>
                                        <div className="row">
                                            <div className="col-md-12 form-input form">
                                                <input type="text" value={name} onChange={handleNameChange} placeholder="First Name" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Email Address</label>
                                        <div className="form-input form">
                                            <input type="text" value={email} onChange={handleEmailChange} placeholder="Email Address" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Phone Number</label>
                                        <div className="form-input form">
                                            <input type="text" value={mobile} onChange={handleMobileChange} placeholder="Phone Number" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="single-form form-default">
                                        <label>Address</label>
                                        <div className="form-input form">
                                            <input type="text" value={address} onChange={handleAddressChange} placeholder="Address" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>District</label>
                                        <div className="form-input form">
                                            <input type="text" value={district_id} onChange={handleDistrictChange} placeholder="City" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Post Code</label>
                                        <div className="form-input form">
                                            <input type="text" placeholder="Post Code" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Country</label>
                                        <div className="form-input form">
                                            <input type="text" placeholder="Country" />
                                        </div>
                                    </div>
                                </div>
                                {/*
                                <div className="col-md-6">
                                    <div className="single-form form-default">
                                        <label>Region/State</label>
                                        <div className="select-items">
                                            <select className="form-control">
                                                <option value="0">select</option>
                                                <option value="1">select option 01</option>
                                                <option value="2">select option 02</option>
                                                <option value="3">select option 03</option>
                                                <option value="4">select option 04</option>
                                                <option value="5">select option 05</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                */}
                                <div className="col-md-12">
                                    <div className="single-checkbox checkbox-style-3">
                                        <input type="checkbox" id="checkbox-3" />
                                        <label for="checkbox-3"><span></span></label>
                                        <p>My delivery and mailing addresses are the same.</p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="single-form button">
                                        <button className="btn" data-bs-toggle="collapse"
                                            data-bs-target="#collapseFour" aria-expanded="false"
                                            aria-controls="collapseFour">next
                                            step</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="checkout-sidebar">
                                <div className="checkout-sidebar-coupon">
                                    <p>Appy Coupon to get discount!</p>
                                    <form action="#">
                                        <div className="single-form form-default">
                                            <div className="form-input form">
                                                <input type="text" placeholder="Coupon Code" />
                                            </div>
                                            <div className="button">
                                                <button className="btn">apply</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="checkout-sidebar-price-table mt-30">
                                    <h5 className="title">Pricing Table</h5>

                                    <div className="sub-total-price">
                                        <div className="total-price">
                                            <p className="value">Subotal Price:</p>
                                            <p className="price">${products?.total_amount}</p>
                                        </div>
                                        <div className="total-price shipping">
                                            <p className="value">Shipping Price:</p>
                                            <p className="price">${isShipping}</p>
                                        </div>
                                        <div className="total-price discount">
                                            <p className="value">Save Price:</p>
                                            <p className="price">${isSave}</p>
                                        </div>
                                    </div>

                                    <div className="total-payable">
                                        <div className="payable-price">
                                            <p className="value">Total Price:</p>
                                            <p className="price">${(products?.total_amount + isShipping) - isSave}</p>
                                        </div>
                                    </div>
                                    <div className="price-table-btn button">
                                        <button type="button" onClick={handleSubmit} className="btn btn-alt">Checkout</button>
                                    </div>
                                </div>
                                <div className="checkout-sidebar-banner mt-30">
                                    <a href="product-grids.html">
                                        <img src="/assets/images/banner/banner.jpg" alt="#" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*====== Checkout Form Steps Part Ends ======*/}
        </div>
    )
}
