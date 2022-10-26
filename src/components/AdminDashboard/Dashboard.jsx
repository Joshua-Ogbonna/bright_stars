import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";

import { toggleSidebar } from "../../app/sidebarReducer/actions";

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleOpen = () => dispatch(toggleSidebar(true));

  return (
    <div className="dashboard">
      <i className="fa-solid fa-bars open__icon" onClick={handleOpen}></i>
      <Outlet />
    </div>
  );
};

export default Dashboard;
