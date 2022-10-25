import React, { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useToasts } from "react-toast-notifications";
import ReactLoading from "react-loading";

import { backendURL } from "../utils/links";

const AdminLogin = () => {
  const [admin, setAdmin] = useState({ adminID: "", password: "" });
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();

  const handleAdminLogin = async (e) => {
    e.preventDefault();
    if (!admin.adminID || !admin.password) {
      toast.error("Incomplete details");
      return;
    }
    setLoading(true);
    await axios
      .post(`${backendURL}/admin-login`, admin)
      .then((response) => {
        console.log(response.data);
        sessionStorage.setItem("status", "admin");
        sessionStorage.setItem("user", JSON.stringify(response.data));
        setLoading(false);
        window.location.reload();
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.data);
        addToast(err.response.data, { appearance: "error" });
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
              <button className="auth__button">
                {loading ? (
                  <ReactLoading
                    type="spin"
                    color="#fff"
                    width={30}
                    height={30}
                  />
                ) : (
                  "Login"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
