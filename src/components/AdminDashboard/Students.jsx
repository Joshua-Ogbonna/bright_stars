import React, { useEffect } from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getStudents } from "../../app/adminReducer/actions";
import StudentTable from "../ReusableComponents/StudentTable";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

const Students = () => {
  const dispatch = useDispatch();
  const { students } = useSelector((state) => state.admin);
  console.log(students);

  useEffect(() => {
    dispatch(getStudents());
  }, []);
  return (
    <div className="section__container">
      <h3>Bright Students 🧒</h3>

      <div className="student__lists">
        <div className="list__head">
          <h5 className="dashboard__h5">Students List</h5>
          <Link to="/admin/add-student">
            <button className="dashboard__button">Add New Student</button>
          </Link>
        </div>
        <div className="student__list">
          <Table>
            <thead>
              <tr>
                <th></th>
                <th>Student's Name</th>
                <th>Class</th>
                <th>Gender</th>
                <th>Student ID</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {students.length > 0
                ? students.map((student, index) => (
                    <StudentTable
                      key={index}
                      name={student.name}
                      intendedClass={student.intendedClass}
                      gender={student.gender}
                      index={index}
                      id={student._id}
                      studentID={student.regNo}
                      _id={student._id}
                    />
                  ))
                : "No student found."}
            </tbody>
          </Table>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Students;
