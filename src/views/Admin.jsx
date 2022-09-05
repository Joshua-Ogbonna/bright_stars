import React from "react";
import Sidebar from "../components/AdminDashboard/Sidebar";
import Dashboard from "../components/AdminDashboard/Dashboard";

const Admin = () => {
  return (
    <div className="admin__dashboard">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="main__dashboard">
        <Dashboard />
      </div>
    </div>
  );
};

export default Admin;
