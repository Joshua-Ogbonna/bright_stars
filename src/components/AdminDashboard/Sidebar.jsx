import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Offcanvas } from "reactstrap";

import { logout } from "../../app/adminReducer/actions";
import { toggleSidebar } from "../../app/sidebarReducer/actions";

const Sidebar = () => {
  const [activeLink, setActiveLink] = useState("Dashboard");
  const status = sessionStorage.getItem("status");
  const { isOpen } = useSelector((state) => state.sidebar);
  const dispatch = useDispatch();

  const handleActiveLink = (link) => {
    setActiveLink(link);
    dispatch(toggleSidebar(false))
  };

  const handleLinkClass = (link) => {
    if (link === activeLink) {
      return `sidebar__item active__item`;
    } else {
      return `sidebar__item`;
    }
  };
  return (
    <>
      <div className="sidebar__section shadow bg-body">
        {/* Sidebar heading */}
        <Link to="/">
          <div className="sidebar__heading">
            <i className="fa-solid fa-graduation-cap"></i>{" "}
            <div className="school__name">
              <h5>Bright Stars</h5>
              <p>International School</p>
            </div>
          </div>
        </Link>

        {/* Sidebar links */}
        <div className="sidebar__links">
          <ul className="sidebar__menu">
            <Link to={status === "student" ? "/dashboard" : "/admin"}>
              <li
                className={handleLinkClass("Dashboard")}
                onClick={() => handleActiveLink("Dashboard")}
              >
                <i className="fa-solid fa-house-user"></i> Dashboard
              </li>
            </Link>
            {status !== "student" && (
              <>
                <Link to="/admin/students">
                  <li
                    className={handleLinkClass("Students")}
                    onClick={() => handleActiveLink("Students")}
                  >
                    <i className="fa-solid fa-users"></i> Students
                  </li>
                </Link>
                <Link to="/admin/teachers">
                  <li
                    className={handleLinkClass("Teachers")}
                    onClick={() => handleActiveLink("Teachers")}
                  >
                    <i className="fa-solid fa-chalkboard-user"></i> Teachers
                  </li>
                </Link>
                <Link to="/admin/requests">
                  <li
                    className={handleLinkClass("Requests")}
                    onClick={() => handleActiveLink("Requests")}
                  >
                    <i className="fa-solid fa-gear"></i> Requests
                  </li>
                </Link>
                <li
                  className={handleLinkClass("")}
                  onClick={() => dispatch(logout())}
                >
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                  Logout
                </li>
              </>
            )}
            {status === "student" && (
              <>
                <Link to="/dashboard/results">
                  <li
                    className={handleLinkClass("Results")}
                    onClick={() => handleActiveLink("Results")}
                  >
                    <i className="fa-solid fa-square-poll-horizontal"></i>{" "}
                    Results
                  </li>
                </Link>
                <Link to="/dashboard/transcripts">
                  <li
                    className={handleLinkClass("Transcripts")}
                    onClick={() => handleActiveLink("Transcripts")}
                  >
                    <i className="fa-solid fa-list-ul"></i> Transcripts
                  </li>
                </Link>
                <Link to="/dashboard/complaints">
                  <li
                    className={handleLinkClass("Complaints")}
                    onClick={() => handleActiveLink("Complaints")}
                  >
                    <i className="fa-solid fa-flag"></i> Complaints
                  </li>
                </Link>
                <li
                  className={handleLinkClass("")}
                  onClick={() => dispatch(logout())}
                >
                  <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                  Logout
                </li>
              </>
            )}
          </ul>
        </div>
      </div>

      {/* Offcanvas */}
      <Offcanvas isOpen={isOpen}>
        <div className="sidebar__section shadow bg-body">
          {/* Sidebar heading */}
          <Link to="/">
            <div className="sidebar__heading">
              <i className="fa-solid fa-graduation-cap"></i>{" "}
              <div className="school__name">
                <h5>Bright Stars</h5>
                <p>International School</p>
              </div>
            </div>
          </Link>

          {/* Sidebar links */}
          <div className="sidebar__links">
            <ul className="sidebar__menu">
              <Link to={status === "student" ? "/dashboard" : "/admin"}>
                <li
                  className={handleLinkClass("Dashboard")}
                  onClick={() => handleActiveLink("Dashboard")}
                >
                  <i className="fa-solid fa-house-user"></i> Dashboard
                </li>
              </Link>
              {status !== "student" && (
                <>
                  <Link to="/admin/students">
                    <li
                      className={handleLinkClass("Students")}
                      onClick={() => handleActiveLink("Students")}
                    >
                      <i className="fa-solid fa-users"></i> Students
                    </li>
                  </Link>
                  <Link to="/admin/teachers">
                    <li
                      className={handleLinkClass("Teachers")}
                      onClick={() => handleActiveLink("Teachers")}
                    >
                      <i className="fa-solid fa-chalkboard-user"></i> Teachers
                    </li>
                  </Link>
                  <Link to="/admin/requests">
                    <li
                      className={handleLinkClass("Requests")}
                      onClick={() => handleActiveLink("Requests")}
                    >
                      <i className="fa-solid fa-gear"></i> Requests
                    </li>
                  </Link>
                  <li
                    className={handleLinkClass("")}
                    onClick={() => dispatch(logout())}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                    Logout
                  </li>
                </>
              )}
              {status === "student" && (
                <>
                  <Link to="/dashboard/results">
                    <li
                      className={handleLinkClass("Results")}
                      onClick={() => handleActiveLink("Results")}
                    >
                      <i className="fa-solid fa-square-poll-horizontal"></i>{" "}
                      Results
                    </li>
                  </Link>
                  <Link to="/dashboard/transcripts">
                    <li
                      className={handleLinkClass("Transcripts")}
                      onClick={() => handleActiveLink("Transcripts")}
                    >
                      <i className="fa-solid fa-list-ul"></i> Transcripts
                    </li>
                  </Link>
                  <Link to="/dashboard/complaints">
                    <li
                      className={handleLinkClass("Complaints")}
                      onClick={() => handleActiveLink("Complaints")}
                    >
                      <i className="fa-solid fa-flag"></i> Complaints
                    </li>
                  </Link>
                  <li
                    className={handleLinkClass("")}
                    onClick={() => dispatch(logout())}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>{" "}
                    Logout
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
