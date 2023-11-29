import React from "react";
import NavBar from "./NavBar";
import { Outlet, Navigate } from "react-router-dom";

const Container = () => {
  const shouldRedirectToKids = true;
  if (shouldRedirectToKids) {
    return <Navigate to="/kids" />;
  }

  return <div className="mainContainer">hi</div>;
};

export default Container;
