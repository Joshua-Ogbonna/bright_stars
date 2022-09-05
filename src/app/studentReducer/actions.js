import { backendURL } from "../../utils/links";
import axios from 'axios'

export const getStudent = (id) => {
  return (dispatch) => {
    axios.get(`${backendURL}/student/${id}`).then(response => {
      console.log(response.data)
      dispatch({ type: "SET_STUDENTS", payload: response.data.data });
    }).catch(err => {
      console.log(err.response)
    })
  };
};
