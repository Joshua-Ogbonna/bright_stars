import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import StudentDashboard from "../components/studentDashboard/StudentDashboard";
// import Login from './Login'

const PublicUser = () => {
  const status = sessionStorage.getItem("status");
  return status === "student" ? (
    <Navigate to="/dashboard" />
  ) : status === "admin" ? (
    <Navigate to="/admin" />
  ) : (
    <Outlet />
  );
};

export default PublicUser;
