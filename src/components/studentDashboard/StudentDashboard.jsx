import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../AdminDashboard/Sidebar";

const StudentDashboard = () => {
  return (
    <div className="admin__dashboard">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main__dashboard">
        <Outlet/>
      </div>
    </div>
  );
};

export default StudentDashboard;
