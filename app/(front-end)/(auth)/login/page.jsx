"use client"
import React, { useState } from 'react';
import { useRouter } from "next/navigation";

export default function page() {
  const [email, setEmail] = useState('01896310715');
  const [password, setPassword] = useState('12345678');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const router = useRouter();
  const setData = (data) =>{
    localStorage.setItem("name", data.name);
    localStorage.setItem("email", data.email);
    localStorage.setItem("gender", data.gender);
    localStorage.setItem("role", data.role);
    localStorage.setItem("token", data.token);
    if(data){
      localStorage.setItem("isAuth", true);
    }
   }
  
    async function handleSubmit(event) {
      event.preventDefault();
     const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL+"/api/v1/users/auth/login",{
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        credentials: 'include',
        body: JSON.stringify({
          mobile: email,
          password: password
        })
      });
  
      const content = await response.json();
      setData(content);
      router.push('/dashboard');
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
                <h1 className="page-title">Login</h1>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <ul className="breadcrumb-nav">
                <li><a href="index-2.html"><i className="lni lni-home"></i> Home</a></li>
                <li>Login</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Breadcrumbs */}

      {/* Start Account Login Area */}
      <div className="account-login section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3 col-md-10 offset-md-1 col-12">
              <form className="card login-form" method="post" onSubmit={handleSubmit}>
                <div className="card-body">
                  <div className="title">
                    <h3>Login Now</h3>
                    <p>You can login using your social media account or email address.</p>
                  </div>
                  <div className="form-group input-group">
                    <label for="reg-fn">Email</label>
                    <input className="form-control" type="number" value={email} onChange={handleEmailChange} id="reg-email" required/>
                  </div>
                  <div className="form-group input-group">
                    <label for="reg-fn">Password</label>
                    <input className="form-control" type="password" value={password} onChange={handlePasswordChange} id="reg-pass" required/>
                  </div>
                  <div className="d-flex flex-wrap justify-content-between bottom-content">
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input width-auto" id="exampleCheck1"/>
                        <label className="form-check-label">Remember me</label>
                    </div>
                    <a className="lost-pass" href="account-password-recovery.html">Forgot password?</a>
                  </div>
                  <div className="button">
                    <button className="btn" type="submit">Login</button>
                  </div>
                  <p className="outer-link">Don't have an account? <a href="register.html">Register here </a>
                  </p>

                  <div className="alt-option">
                    <span>Or</span>
                  </div>
                  <div className="social-login">
                    <div className="row">
                      <div className="col-lg-4 col-md-4 col-12"><a className="btn facebook-btn"
                        href="javascript:void(0)"><i className="lni lni-facebook-filled"></i> Facebook
                        login</a></div>
                      <div className="col-lg-4 col-md-4 col-12"><a className="btn twitter-btn"
                        href="javascript:void(0)"><i className="lni lni-twitter-original"></i> Twitter
                        login</a></div>
                      <div className="col-lg-4 col-md-4 col-12"><a className="btn google-btn"
                        href="javascript:void(0)"><i className="lni lni-google"></i> Google login</a>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Account Login Area */}
    </div>
  )
}
