import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRouteElement = ({ loggedIn, element: Component, ...props  }) => {
  return (
    loggedIn ? <Component {...props} /> : <Navigate to="/" replace/>
)}

export default ProtectedRouteElement;