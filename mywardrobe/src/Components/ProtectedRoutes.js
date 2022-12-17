import React from "react";
import { Navigate } from "react-router-dom";
import { useUserAuth } from "../Context/UserAuthContext";

const ProtectedRoutes = ({ children }) => {
  let {user} = useUserAuth;
  console.log(user)
  if (!user) {
    return <Navigate to="/" />;
  } 

  return children;
};

export default ProtectedRoutes;
