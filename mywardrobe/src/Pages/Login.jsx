import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
} from "@chakra-ui/react";
import { useUserAuth } from "../Context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const navigate = useNavigate();
  const { logIn, googleSignIn } = useUserAuth();

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (err) {
      setErr(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setErr(error.message);
    }
  };

  return (
    <div>
      <div id="logreg-forms">
        <form className="form-sign-in" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ testAlign: "center", marginLeft: "160px" }}
          >
            Login In
          </h1>
          {err && (
            <Alert status="error">
              <AlertIcon />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{err}</AlertDescription>
            </Alert>
          )}

          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn btn-secondary btn-block" type="submit">
            {" "}
            Sign In
          </button>

          <p style={{ textAlign: "center" }}>OR</p>

          <div className="social-login">
            <GoogleButton size='2px' onClick={handleGoogleSignIn} />
            
          </div>
          <hr />
          <p>Don't Have An Account</p>
          <Link to="/register">
            <button
              className="btn btn-primary btn-block"
              type="button"
              id="btn-signup"
            >
              {" "}
              Sign Up New Account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
