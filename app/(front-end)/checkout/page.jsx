"use client";
import React, { useState, useEffect } from "react";
import { getData } from "@/lib/getData";
import Link from 'next/link';

export default function page() {
    const [products, setProducts] = useState(null);
    const [isSave, setVat] = useState(60);
    const [isShipping, setShipping] = useState(100);
    let sessionId = localStorage.getItem('sessionId');
    let userId = localStorage.getItem('_id');
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
            <section className="checkout-wrapper section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <div className="row">
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
                            <div className="checkout-steps-form-style-1">
                                <ul id="accordionExample">
                                    <li>
                                        <h6 className="title" data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                            aria-expanded="true" aria-controls="collapseThree">Your Personal Details </h6>
                                        <section className="checkout-steps-form-content collapse show" id="collapseThree"
                                            aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="single-form form-default">
                                                        <label>User Name</label>
                                                        <div className="row">
                                                            <div className="col-md-6 form-input form">
                                                                <input type="text" placeholder="First Name" />
                                                            </div>
                                                            <div className="col-md-6 form-input form">
                                                                <input type="text" placeholder="Last Name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>Email Address</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Email Address" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>Phone Number</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Phone Number" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="single-form form-default">
                                                        <label>Mailing Address</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Mailing Address" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>City</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="City" />
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
                                        </section>
                                    </li>
                                    <li>
                                        <h6 className="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                            aria-expanded="false" aria-controls="collapseFour">Shipping Address</h6>
                                        <section className="checkout-steps-form-content collapse" id="collapseFour"
                                            aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                            <div className="row">
                                                <div className="col-md-12">
                                                    <div className="single-form form-default">
                                                        <label>User Name</label>
                                                        <div className="row">
                                                            <div className="col-md-6 form-input form">
                                                                <input type="text" placeholder="First Name" />
                                                            </div>
                                                            <div className="col-md-6 form-input form">
                                                                <input type="text" placeholder="Last Name" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>Email Address</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Email Address" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>Phone Number</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Phone Number" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="single-form form-default">
                                                        <label>Mailing Address</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="Mailing Address" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="single-form form-default">
                                                        <label>City</label>
                                                        <div className="form-input form">
                                                            <input type="text" placeholder="City" />
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
                                                <div className="col-md-12">
                                                    <div className="checkout-payment-option">
                                                        <h6 className="heading-6 font-weight-400 payment-title">Select Delivery
                                                            Option</h6>
                                                        <div className="payment-option-wrapper">
                                                            <div className="single-payment-option">
                                                                <input type="radio" name="shipping" checked id="shipping-1" />
                                                                <label for="shipping-1">
                                                                    <img src="/assets/images/shipping/shipping-1.png"
                                                                        alt="Sipping" />
                                                                    <p>Standerd Shipping</p>
                                                                    <span className="price">$10.50</span>
                                                                </label>
                                                            </div>
                                                            <div className="single-payment-option">
                                                                <input type="radio" name="shipping" id="shipping-2" />
                                                                <label for="shipping-2">
                                                                    <img src="/assets/images/shipping/shipping-2.png"
                                                                        alt="Sipping" />
                                                                    <p>Standerd Shipping</p>
                                                                    <span className="price">$10.50</span>
                                                                </label>
                                                            </div>
                                                            <div className="single-payment-option">
                                                                <input type="radio" name="shipping" id="shipping-3" />
                                                                <label for="shipping-3">
                                                                    <img src="/assets/images/shipping/shipping-3.png"
                                                                        alt="Sipping" />
                                                                    <p>Standerd Shipping</p>
                                                                    <span className="price">$10.50</span>
                                                                </label>
                                                            </div>
                                                            <div className="single-payment-option">
                                                                <input type="radio" name="shipping" id="shipping-4" />
                                                                <label for="shipping-4">
                                                                    <img src="/assets/images/shipping/shipping-4.png"
                                                                        alt="Sipping" />
                                                                    <p>Standerd Shipping</p>
                                                                    <span className="price">$10.50</span>
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-12">
                                                    <div className="steps-form-btn button">
                                                        <button className="btn" data-bs-toggle="collapse"
                                                            data-bs-target="#collapseThree" aria-expanded="false"
                                                            aria-controls="collapseThree">previous</button>
                                                        <a href="javascript:void(0)" className="btn btn-alt">Save & Continue</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </li>
                                    <li>
                                        <h6 className="title collapsed" data-bs-toggle="collapse" data-bs-target="#collapsefive"
                                            aria-expanded="false" aria-controls="collapsefive">Payment Info</h6>
                                        <section className="checkout-steps-form-content collapse" id="collapsefive"
                                            aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                                            <div className="row">
                                                <div className="col-12">
                                                    <div className="checkout-payment-form">
                                                        <div className="single-form form-default">
                                                            <label>Cardholder Name</label>
                                                            <div className="form-input form">
                                                                <input type="text" placeholder="Cardholder Name" />
                                                            </div>
                                                        </div>
                                                        <div className="single-form form-default">
                                                            <label>Card Number</label>
                                                            <div className="form-input form">
                                                                <input id="credit-input" type="text"
                                                                    placeholder="0000 0000 0000 0000" />
                                                                <img src="/assets/images/payment/card.png" alt="card" />
                                                            </div>
                                                        </div>
                                                        <div className="payment-card-info">
                                                            <div className="single-form form-default mm-yy">
                                                                <label>Expiration</label>
                                                                <div className="expiration d-flex">
                                                                    <div className="form-input form">
                                                                        <input type="text" placeholder="MM" />
                                                                    </div>
                                                                    <div className="form-input form">
                                                                        <input type="text" placeholder="YYYY" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="single-form form-default">
                                                                <label>CVC/CVV <span><i
                                                                    className="mdi mdi-alert-circle"></i></span></label>
                                                                <div className="form-input form">
                                                                    <input type="text" placeholder="***" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="single-form form-default button">
                                                            <button className="btn">pay now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    </li>
                                </ul>
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
