import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { BsArrowDownCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import "./Register.css";
import { useState } from "react";
import { useEffect } from "react";
import { registerInitiate } from "../Redux/Auth/authAction";
import { useUserAuth } from "../Context/UserAuthContext";
import { Alert, AlertDescription, AlertIcon, AlertTitle, space, Spacer } from "@chakra-ui/react";

const Register = () => {
  const [text, setText] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [err , setErr] = useState("");
  
  // const { currentUser } = useSelector((state) => state.user);
  // console.log(currentUser)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //context Api
  const { signUp } = useUserAuth();

  // useEffect(() => {
  //   if (currentUser) {
      
  //   }
  // }, [currentUser]);

  const { email, password, displayName, confirmPassword } = text;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr('')
    try {
      await signUp(email,password,displayName)
      navigate("/");
    } catch (error) {
      setErr(error.message)

    }
    
    setText({ email: "", displayName: "", password: "", confirmPassword: "" });
  };

  const handleChange = (e) => {
    // e.preventDefault();
    let input = {[e.target.name] : e.target.value}
    console.log(e.target.value)
    setText({ ...text, ...input });
  };

  return (
    <div>
      <div id="register-form">
        <form className="form-signup" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ testAlign: "center", marginLeft: "160px" }}
          >
            Sign Up
          </h1>
          {err && <Alert status='error'>
  <AlertIcon />
  <AlertTitle>Error Occured</AlertTitle>
  <AlertDescription>{err}</AlertDescription>
</Alert>}
          <input
            type="text"
            id="displayName"
            className="form-control"
            placeholder="Full Name"
            name="displayName"
            onChange={handleChange}
            value={displayName}
            required
          />

          <input
            type="email"
            id="user-email"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={password}
            required
          />
          <input
            type="password"
            id="inputRePassword"
            className="form-control"
            placeholder="Repeat Password"
            name="confirmPassword"
            onChange={handleChange}
            value={confirmPassword}
            required
          />

          <button className="btn btn-secondary btn-block" type="submit">
            {" "}
            Sign Up
          </button>
          <p style={{ display: "flex" }}>Have An Account :  <BsArrowDownCircleFill /></p>

          <Link to="/login" style={{ display: "flex" }}>
          <BsArrowLeftCircleFill /> Back To Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
