import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const Student = () => {
  const { student } = useSelector((state) => state.student);
  console.log(student);
  return student ? <Outlet /> : <Navigate to="/login" />;
};

export default Student;
