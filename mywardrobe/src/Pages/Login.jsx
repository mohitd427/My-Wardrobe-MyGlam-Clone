import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import './Login.css';
import { useState } from "react";

const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const handleGoogleSignIn = () => {};

  const handleSubmit = () => {};

  const handleChange = () => {};
  return (
    <div>
      <div id="logreg-form">
        <form className="form-sihn-in" onSubmit={handleSubmit}>
          
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ testAlign: "center" }}
          >
            Sign In
          </h1>         
          
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={state.email}
            required
          />
            <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={state.password}
            required
          />
          <button className="btn btn-secondary btn-block" type="submit"> Sign In</button>

          <p style={{ textAlign: "center" }}>
            OR
          </p>

          <div className="social-login">
            <button
              className="btn google-btn social-btn"
              type="button"
              onClick={handleGoogleSignIn}
            >
              <span>
                Sign In with google
                <FcGoogle />
              </span>
            </button>
            <button className="btn facebook-btn social-btn">
              <span>
                Sign In with facebook
                <FaFacebookSquare />
              </span>
            </button>
          </div>
          <hr />
          <p>Don't Have An Account</p>
          <Link to='/register'>
          <button className="btn btn-primary btn-block" type="button" id='btn-signup'> Sign Up New Account</button>
          </Link>


        </form>
      </div>
    </div>
  );
};

export default Login;
