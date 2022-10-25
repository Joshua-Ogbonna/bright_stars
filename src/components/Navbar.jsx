import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="brand">
        <i className="fa-solid fa-sun"></i>
        <div onClick={() => navigate("/")}>
          <h5>BSISS</h5>
          <p>...knowledge is power</p>
        </div>
      </div>
      <div className="links">
        <ul>
          <li onClick={() => navigate("/about")}>
            <Link to="">About Us</Link>
          </li>
          <li onClick={() => navigate("/contact")}>
            <Link to="">Contact Us</Link>
          </li>
          <li onClick={() => navigate("/admissions")}>
            <Link to="">Admissions</Link>
          </li>
          <li onClick={() => navigate("/login")}>
            <Link to="">Student Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
