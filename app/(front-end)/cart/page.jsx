import React from 'react'

export default function page() {
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
                                <li><a href="index-2.html"><i className="lni lni-home"></i> Home</a></li>
                                <li><a href="index-2.html">Shop</a></li>
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
                                <div className="col-lg-1 col-md-1 col-12">

                                </div>
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
                        <div className="cart-single-list">
                            <div className="row align-items-center">
                                <div className="col-lg-1 col-md-1 col-12">
                                    <a href="product-details.html"><img src="/assets/images/cart/01.jpg" alt="#"/></a>
                                </div>
                                <div className="col-lg-4 col-md-3 col-12">
                                    <h5 className="product-name"><a href="product-details.html">
                                        Canon EOS M50 Mirrorless Camera</a></h5>
                                    <p className="product-des">
                                        <span><em>Type:</em> Mirrorless</span>
                                        <span><em>Color:</em> Black</span>
                                    </p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <div className="count-input">
                                        <select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>$910.00</p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>$29.00</p>
                                </div>
                                <div className="col-lg-1 col-md-2 col-12">
                                    <a className="remove-item" href="javascript:void(0)"><i className="lni lni-close"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* End Single List list */}
                        {/* Cart Single List list */}
                        <div className="cart-single-list">
                            <div className="row align-items-center">
                                <div className="col-lg-1 col-md-1 col-12">
                                    <a href="product-details.html"><img src="/assets/images/cart/02.jpg" alt="#"/></a>
                                </div>
                                <div className="col-lg-4 col-md-3 col-12">
                                    <h5 className="product-name"><a href="product-details.html">
                                        Apple iPhone X 256 GB Space Gray</a></h5>
                                    <p className="product-des">
                                        <span><em>Memory:</em> 256 GB</span>
                                        <span><em>Color:</em> Space Gray</span>
                                    </p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <div className="count-input">
                                        <select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>$1100.00</p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>—</p>
                                </div>
                                <div className="col-lg-1 col-md-2 col-12">
                                    <a className="remove-item" href="javascript:void(0)"><i className="lni lni-close"></i></a>
                                </div>
                            </div>
                        </div>
                        {/* End Single List list */}
                        {/* Cart Single List list */}
                        <div className="cart-single-list">
                            <div className="row align-items-center">
                                <div className="col-lg-1 col-md-1 col-12">
                                    <a href="product-details.html"><img src="/assets/images/cart/03.jpg" alt="#"/></a>
                                </div>
                                <div className="col-lg-4 col-md-3 col-12">
                                    <h5 className="product-name"><a href="product-details.html">HP LaserJet Pro Laser Printer</a></h5>
                                    <p className="product-des">
                                        <span><em>Type:</em> Laser</span>
                                        <span><em>Color:</em> White</span>
                                    </p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <div className="count-input">
                                        <select className="form-control">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                            <option>4</option>
                                            <option>5</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>$550.00</p>
                                </div>
                                <div className="col-lg-2 col-md-2 col-12">
                                    <p>—</p>
                                </div>
                                <div className="col-lg-1 col-md-2 col-12">
                                    <a className="remove-item" href="javascript:void(0)"><i className="lni lni-close"></i></a>
                                </div>
                            </div>
                        </div>
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
                                                    <input name="Coupon" placeholder="Enter Your Coupon"/>
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
                                                <li>Cart Subtotal<span>$2560.00</span></li>
                                                <li>Shipping<span>Free</span></li>
                                                <li>You Save<span>$29.00</span></li>
                                                <li className="last">You Pay<span>$2531.00</span></li>
                                            </ul>
                                            <div className="button">
                                                <a href="checkout.html" className="btn">Checkout</a>
                                                <a href="product-grids.html" className="btn btn-alt">Continue shopping</a>
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
    )
}
