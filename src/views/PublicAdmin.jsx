import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicAdmin = () => {
  const status = sessionStorage.getItem("status");
  console.log(status)

  return status === "admin" ? (
    <Navigate to="/admin" />
  ) : (
    <Outlet />
  );
};

export default PublicAdmin;
