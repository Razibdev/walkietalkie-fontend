"use client";
import React, { useState, useEffect } from "react";
import { getData } from "@/lib/getData";
import Link from "next/link";

export default function page() {
  const [products, setProducts] = useState(null);
  const [isSave, setVat] = useState(60);
  let sessionId = localStorage.getItem("sessionId");
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

  const handleQuantityChange = (index, newQuantity) => {
    const updatedProducts = { ...products };
    updatedProducts.items[index].quantity = newQuantity;
    setProducts(updatedProducts);

    // Optionally, send the update to your backend
    updateProductQuantity(updatedProducts._id, updatedProducts.items[index].product._id, newQuantity);
  };

  const updateProductQuantity = async (order_id, product_id, quantity) => {
    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/cart/"+order_id, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        product_id: product_id,
        quantity: quantity,
      })


    });
  }


  const handleRemoveProduct = async(index) => {
    const updatedProducts = { ...products };

    const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "/api/v1/cart/"+updatedProducts._id+"/"+updatedProducts.items[index]._id, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
    });
    updatedProducts.items?.splice(index, 1);
    setProducts(updatedProducts);

  }



  return (
    <div>
      {/* Start Breadcrumbs */}
      <div className="breadcrumbs">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="breadcrumbs-content">
                <h1 className="page-title">Cart</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                <li>
                  <a href="index-2.html">
                    <i className="lni lni-home"></i> Home
                  </a>
                </li>
                <li>
                  <a href="index-2.html">Shop</a>
                </li>
                <li>Cart</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumbs */}

      {/* Shopping Cart */}
      <div className="shopping-cart section">
        <div className="container">
          <div className="cart-list-head">
            {/* Cart List Title */}
            <div className="cart-list-title">
              <div className="row">
                <div className="col-lg-1 col-md-1 col-12"></div>
                <div className="col-lg-4 col-md-3 col-12">
                  <p>Product Name</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>Quantity</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>Subtotal</p>
                </div>
                <div className="col-lg-2 col-md-2 col-12">
                  <p>Discount</p>
                </div>
                <div className="col-lg-1 col-md-2 col-12">
                  <p>Remove</p>
                </div>
              </div>
            </div>
            {/* End Cart List Title */}

            {/* Cart Single List list */}
            {products?.items &&
              products?.items.map((product, i) => {
                return (
                  <div className="cart-single-list">
                    <div className="row align-items-center">
                      <div className="col-lg-1 col-md-1 col-12">
                        <a href={`/product/${product?.product?.product_slug}`}>
                          <img
                            src={product?.feature_image}
                            alt={product?.product?.product_name}
                          />
                        </a>
                      </div>
                      <div className="col-lg-4 col-md-3 col-12">
                        <h5 className="product-name">
                          <a
                            href={`/product/${product?.product?.product_slug}`}
                          >
                            {product?.product?.product_name}
                          </a>
                        </h5>
                        <p className="product-des">
                          <span>
                            <em>Type:</em> Mirrorless
                          </span>
                          <span>
                            <em>Color:</em> Black
                          </span>
                        </p>
                      </div>
                      <div className="col-lg-2 col-md-2 col-12">
                        <input
                          className="cartQty"
                          type="number"
                          value={product?.quantity}
                          onChange={(e) =>
                            handleQuantityChange(i, e.target.value)
                          }
                        />
                      </div>
                      <div className="col-lg-2 col-md-2 col-12">
                        <p>${product?.price ? product?.price : 0}</p>
                      </div>
                      <div className="col-lg-2 col-md-2 col-12">
                        <p>
                          $
                          {product?.price
                            ? product?.price * product?.quantity
                            : 0}
                        </p>
                      </div>
                      <div className="col-lg-1 col-md-2 col-12">
                        <a className="remove-item" href="javascript:void(0)" onClick={() => handleRemoveProduct(i)} >
                          <i className="lni lni-close"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}
            {/* End Single List list */}
          </div>
          <div className="row">
            <div className="col-12">
              {/* Total Amount */}
              <div className="total-amount">
                <div className="row">
                  <div className="col-lg-8 col-md-6 col-12">
                    <div className="left">
                      <div className="coupon">
                        <form action="#" target="_blank">
                          <input
                            name="Coupon"
                            placeholder="Enter Your Coupon"
                          />
                          <div className="button">
                            <button className="btn">Apply Coupon</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="right">
                      <ul>
                        <li>
                          Cart Subtotal<span>${products?.items?.reduce((total, item) => total + parseFloat(item.price) * parseInt(item.quantity), 0)}</span>
                        </li>
                        <li>
                          Shipping<span>Free</span>
                        </li>
                        <li>
                          You Save<span>${isSave}</span>
                        </li>
                        <li className="last">
                          You Pay<span>${products?.items?.reduce((total, item) => total + parseFloat(item.price) * parseInt(item.quantity), 0) - isSave}</span>
                        </li>
                      </ul>
                      <div className="button">
                        <a href="/checkout" className="btn">
                          Checkout
                        </a>
                        <a href="product-grids.html" className="btn btn-alt">
                          Continue shopping
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*/ End Total Amount */}
            </div>
          </div>
        </div>
      </div>
      {/*/ End Shopping Cart */}
    </div>
  );
}
