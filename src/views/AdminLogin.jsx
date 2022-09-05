import React, { useState } from "react";
import axios from "axios";
import { backendURL } from "../utils/links";
import { toast, ToastContainer } from "react-toastify";

const AdminLogin = () => {
  const [admin, setAdmin] = useState({ adminID: "", password: "" });

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    if (!admin.adminID || !admin.password) {
      toast.error("Incomplete details");
      return;
    }

    await axios
      .post(`${backendURL}/admin-login`, admin)
      .then((response) => {
        console.log(response.data);
        sessionStorage.setItem("status", "admin")
        window.location.reload()
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  return (
    <div>
      <div className="auth__section">
        <div className="admin__side">
          {/* <i className="fa-solid fa-graduation-cap"></i>{" "}
      <h3>Journey to Greatness</h3> */}
          {/* <img src={Student} alt="Student avatar" /> */}
        </div>
        <div className="form__section">
          <form onSubmit={handleAdminLogin} action="" className="login__form">
            <h3>Login to Admin Portal</h3>
            <p>Welcome back. Sign in to continue!</p>
            <div className="form__group">
              <label htmlFor="student id">Admin ID</label>
              <input
                type="text"
                name="admin id"
                placeholder="Enter Admin ID"
                className="form__control"
                value={admin.admin}
                onChange={(e) =>
                  setAdmin({ ...admin, adminID: e.target.value })
                }
              />
            </div>
            <div className="form__group">
              <label htmlFor="Passcode">Passcode</label>
              <input
                type="password"
                placeholder="Enter Your Passcode"
                name="Passcode"
                value={admin.password}
                onChange={(e) =>
                  setAdmin({ ...admin, password: e.target.value })
                }
              />
            </div>
            <div className="form__group">
              <button className="auth__button">Login</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
