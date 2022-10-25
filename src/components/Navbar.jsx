import React from "react";
import { useState } from "react";
import { OffcanvasBody } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Offcanvas, OffcanvasHeader } from "reactstrap";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const openCanvas = () => setOpen(true);
  const close = () => setOpen(false);

  return (
    <>
      <nav>
        <div className="brand">
          <i className="fa-solid fa-sun"></i>
          <div onClick={() => navigate("/")}>
            <h5>BSISS</h5>
            <p>...knowledge is power</p>
          </div>
        </div>
        <div className="menu">
          <i className="fa-solid fa-bars" onClick={openCanvas}></i>
        </div>
        <div className="links">
          <ul>
            <li
              onClick={() => {
                navigate("/about");
                close();
              }}
            >
              <Link to="">About Us</Link>
            </li>
            <li
              onClick={() => {
                navigate("/contact");
                close();
              }}
            >
              <Link to="">Contact Us</Link>
            </li>
            <li
              onClick={() => {
                navigate("/admissions");
                close();
              }}
            >
              <Link to="">Admissions</Link>
            </li>
            <li
              onClick={() => {
                navigate("/login");
                close();
              }}
            >
              <Link to="">Student Login</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Offcanvas */}
      <Offcanvas isOpen={open} toggle={close}>
        <nav>
          <OffcanvasHeader>
            <div className="brand">
              <i className="fa-solid fa-sun"></i>
              <div onClick={() => navigate("/")}>
                <h5>BSISS</h5>
                <p>...knowledge is power</p>
              </div>
            </div>
            <i className="fa-solid fa-xmark" onClick={close}></i>
          </OffcanvasHeader>
          <OffcanvasBody>
            <div className="links">
              <ul>
                <li
                  onClick={() => {
                    navigate("/about");
                    close();
                  }}
                >
                  <Link to="">About Us</Link>
                </li>
                <li
                  onClick={() => {
                    navigate("/contact");
                    close();
                  }}
                >
                  <Link to="">Contact Us</Link>
                </li>
                <li
                  onClick={() => {
                    navigate("/admissions");
                    close();
                  }}
                >
                  <Link to="">Admissions</Link>
                </li>
                <li
                  onClick={() => {
                    navigate("/login");
                    close();
                  }}
                >
                  <Link to="">Student Login</Link>
                </li>
              </ul>
            </div>
          </OffcanvasBody>
        </nav>
      </Offcanvas>
    </>
  );
};

export default Navbar;
