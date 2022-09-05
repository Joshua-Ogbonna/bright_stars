import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateAdmin = () => {
  const status = sessionStorage.getItem("status");

  return status !== "admin" ? (
    <Navigate to="/admin-login" />
  ) : (
    <Outlet />
  );
};

export default PrivateAdmin;
