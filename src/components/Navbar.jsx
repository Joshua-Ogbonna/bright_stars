import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <i className="fa-solid fa-graduation-cap"></i>{" "}
            <div className="school__name">
              <h5>BrightStars</h5>
              <p>International School</p>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/about-us">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/contact-us">
                  Contact Us
                </Link>
              </li>
              <div className="second__layer">
                <li className="nav-item">
                  <Link
                    className="nav-link admissions__button"
                    aria-current="page"
                    to="/admissions"
                  >
                    Admissions
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link login__button"
                    aria-current="page"
                    to="/login"
                  >
                    Student Login
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
