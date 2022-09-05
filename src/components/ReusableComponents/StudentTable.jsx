import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { deleteStudent } from "../../app/adminReducer/actions";

const StudentTable = ({
  name,
  intendedClass,
  gender,
  index,
  studentID,
  id,
  _id
}) => {
  const dispatch = useDispatch();

  const saveToLocalStorage = (id) => {
    sessionStorage.setItem("save_id", id);
  };

  return (
    <tr>
      <td>{index + 1}</td>
      <td><Link to={`/admin/student/${_id}`}>{name}</Link></td>
      <td>{intendedClass}</td>
      <td>{gender}</td>
      <td>{studentID}</td>
      <td>
        <Link to="/admin/edit-student">
          <i
            className="fa-solid fa-user-pen edit__student"
            onClick={() => saveToLocalStorage(id)}
          ></i>{" "}
        </Link>
        <i
          className="fa-solid fa-trash-can delete__student"
          onClick={() => dispatch(deleteStudent(id))}
        ></i>
      </td>
    </tr>
  );
};

export default StudentTable;
