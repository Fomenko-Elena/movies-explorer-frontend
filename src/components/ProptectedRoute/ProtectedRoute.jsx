import React from 'react';
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ component: Component, accessible, navigateTo = "/", ...props  }) => {
  return (
    accessible ? <Component {...props}/> : <Navigate to={navigateTo} replace/>
)}

export default ProtectedRoute;