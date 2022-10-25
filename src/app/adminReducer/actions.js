import axios from "axios";
import { backendURL } from "../../utils/links";
import { toast } from "react-toastify";

export const getStudents = () => {
  return (dispatch) => {
    axios
      .get(`/students`)
      .then((response) => {
        // console.log(response.data.data);
        dispatch({ type: "SET_STUDENTS", payload: response.data.data });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

// Get teachers
export const getTeachers = () => {
  return (dispatch) => {
    axios
      .get(`/teacher`)
      .then((response) => {
        // console.log(response.data)
        dispatch({ type: "SET_TEACHERS", payload: response.data });
      })
      .catch((err) => console.log(err.response));
  };
};

// Delete student
export const deleteStudent = (id) => {
  return (dispatch) => {
    axios
      .delete(`/student/${id}`)
      .then((response) => {
        dispatch({ type: "DELETE_STUDENT" });
        toast.success(response.data);
        // console.log(response.data);
        dispatch(getStudents());
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
};

// Logout and clear sessionStorage
export const logout = () => {
  return (dispatch) => {
    sessionStorage.clear();
    window.location.reload();
  };
};
