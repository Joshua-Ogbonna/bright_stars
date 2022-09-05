import React, { useState, useEffect } from "react";
// import Student from "../images/student.svg";
import { backendLocal, backendURL } from "../utils/links";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import ReactLoading from "react-loading";
import { getStudent } from "../app/studentReducer/actions";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [student, setStudent] = useState({
    regNo: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const state = useSelector(state => state.student)
  console.log(state.student)

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    if (!student.regNo || !student.password) {
      toast.error("Incomplete login details");
      return;
    }

    setLoading(true);
    await axios
      .post(`${backendLocal}/student/login`, student)
      .then((response) => {
        if (response.data.success) {
          console.log(response.data.student._id);
          setLoading(false);
          sessionStorage.setItem("student", response.data.student._id)
          sessionStorage.setItem("status", "student")
          window.location.reload()
          dispatch(getStudent(response.data.data))
          setStudent({regNo: "", password: ""})
        } else {
          toast.error(response.data.message);
          console.log(response.data);
          setLoading(false);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.message);
        toast.error(err.response.message);
      });
  };

  // Useffect
  // useEffect(() => {
  //   if (state.student) {
  //     navigate("/dashboard")
  //   }
  // }, [state.student])
  return (
    <div className="auth__section">
      <div className="side__auth">
        {/* <i className="fa-solid fa-graduation-cap"></i>{" "}
        <h3>Journey to Greatness</h3> */}
        {/* <img src={Student} alt="Student avatar" /> */}
      </div>
      <div className="form__section">
        <form onSubmit={handleSubmitForm} className="login__form">
          <h3>Login to your Student Portal</h3>
          <p>Welcome back. Sign in to continue!</p>
          <div className="form__group">
            <label htmlFor="student id">Student ID</label>
            <input
              type="text"
              name="student id"
              placeholder="Enter Your Student ID"
              className="form__control"
              value={student.regNo}
              onChange={(e) =>
                setStudent({ ...student, regNo: e.target.value })
              }
            />
          </div>
          <div className="form__group">
            <label htmlFor="Passcode">Passcode</label>
            <input
              type="password"
              placeholder="Enter Your Passcode"
              name="Passcode"
              value={student.password}
              onChange={(e) =>
                setStudent({ ...student, password: e.target.value })
              }
            />
          </div>
          <div className="form__group">
            <button className="auth__button">
              {loading ? (
                <ReactLoading type="spin" color="#fff" with={30} height={30} />
              ) : (
                "Login"
              )}
            </button>
          </div>
          <div className="forgot__passcode">
            <p>Forgot Passcode? Click here to reset</p>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
