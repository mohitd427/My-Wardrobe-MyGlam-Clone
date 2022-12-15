import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, useLocation } from "react-router-dom";
import { BsArrowLeftCircleFill } from "react-icons/bs";
import './Register.css';
import { useState } from "react";
import { useEffect } from "react";
import { registerInitiate } from "../Redux/Auth/authAction";

const Register = () => {
  const [state, setState] = useState({
    displayName:'',
    email: "",
    password: "",
    confirmPassword:""
  });
const {currentUser} = useSelector((state) => state.user)
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(()=>{
    if(currentUser){

    }
  },[currentUser])

  const {email,password,displayName,confirmPassword} = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password !== confirmPassword){
      return;
    }
    dispatch(registerInitiate(email, password, displayName))
    setState({email:'', diaplayName:'', password:"", confirmPassword:""})
  };

  const handleChange = (e) => {
    e.preventDefault();
    let {name,value} = e.target;
    setState({...state, [name]:value})
  };


  return (
    <div>
      <div id="register-form">
        <form className="form-signup" onSubmit={handleSubmit}>
          
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ testAlign: "center", marginLeft:"160px" }}
          >
            Sign Up
          </h1>         
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
          
          <button className="btn btn-secondary btn-block" 
          type="submit"> Sign Up</button>

          <Link to='/login' style={{display:'flex'}}>
           <BsArrowLeftCircleFill/> Back To Login
          </Link>

         


        </form>
      </div>
    </div>
  );
};

export default Register;
