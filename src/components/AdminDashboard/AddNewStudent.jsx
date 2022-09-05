import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import ReactLoading from "react-loading";
import { backendURL } from "../../utils/links";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getStudents } from "../../app/adminReducer/actions";
import {useNavigate} from 'react-router-dom'

const AddNewStudent = () => {
  const [student, setStudent] = useState({
    name: "",
    gender: "",
    address: "",
    dateOfBirth: "",
    LGA: "",
    state: "",
    bloodGroup: "",
    nationality: "",
    nameOfParents: "",
    addressOfParents: "",
    telephone: "",
    intendedClass: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (
      !student.name ||
      !student.address ||
      !student.addressOfParents ||
      !student.bloodGroup ||
      !student.dateOfBirth ||
      !student.gender ||
      !student.nameOfParents ||
      !student.nationality ||
      !student.state ||
      !student.telephone ||
      !student.intendedClass
    ) {
      toast.error("Incomplete student details");
      return;
    }
    setLoading(true);
    await axios
      .post(`${backendURL}/student`, student)
      .then((response) => {
        dispatch(getStudents());
        console.log(response.data);
        setLoading(false);
        toast.success("Student added successfully 😇")
        navigate("/admin/students")
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div className="section__container">
      <h3>Add New Student</h3>
      <form
        onSubmit={handleFormSubmit}
        className="new__studentForm shadow bg-body p-3"
      >
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <div className="form__group">
              <label htmlFor="Student's Name">Student's Name</label>
              <input
                type="text"
                name="name"
                placeholder="Student's Name"
                value={student.name}
                onChange={(e) =>
                  setStudent({ ...student, name: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form__group">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                id=""
                value={student.gender}
                onChange={(e) =>
                  setStudent({ ...student, gender: e.target.value })
                }
              >
                <option hidden>Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form__group">
              <label htmlFor="Address">Address</label>
              <input
                type="text"
                name="Address"
                placeholder="Address"
                value={student.address}
                onChange={(e) =>
                  setStudent({ ...student, address: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form__group">
              <label htmlFor="date of birth">Date of Birth</label>
              <input
                type="date"
                name="date of birth"
                value={student.dateOfBirth}
                onChange={(e) =>
                  setStudent({ ...student, dateOfBirth: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form__group">
              <label htmlFor="LGA">Local Government</label>
              <input
                type="text"
                name="LGA"
                placeholder="Local Government Area"
                value={student.LGA}
                onChange={(e) =>
                  setStudent({ ...student, LGA: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form__group">
              <label htmlFor="State">State of Origin</label>
              <input
                type="text"
                name="State"
                placeholder="State of Origin"
                value={student.state}
                onChange={(e) =>
                  setStudent({ ...student, state: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form__group">
              <label htmlFor="blood group">Blood Group</label>
              <select
                name="blood group"
                value={student.bloodGroup}
                onChange={(e) =>
                  setStudent({ ...student, bloodGroup: e.target.value })
                }
              >
                <option hidden>Select Blood Group</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="O">O</option>
                <option value="AB">AB</option>
              </select>
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form__group">
              <label htmlFor="Nationality">Nationality</label>
              <input
                type="text"
                name="Nationality"
                placeholder="Nationality"
                value={student.nationality}
                onChange={(e) =>
                  setStudent({ ...student, nationality: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form__group">
              <label htmlFor="Name of Parents">Name of Parents</label>
              <input
                type="text"
                name="Name of Parents"
                placeholder="Name of Parents"
                value={student.nameOfParents}
                onChange={(e) =>
                  setStudent({ ...student, nameOfParents: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form__group">
              <label htmlFor="Address of Parents">Address of Parents</label>
              <input
                type="text"
                name="Address of Parents"
                placeholder="Address of Parents"
                value={student.addressOfParents}
                onChange={(e) =>
                  setStudent({ ...student, addressOfParents: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form__group">
              <label htmlFor="telephone">Telephone of Parents</label>
              <input
                type="text"
                name="telephone"
                placeholder="Telephone"
                value={student.telephone}
                onChange={(e) =>
                  setStudent({ ...student, telephone: e.target.value })
                }
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-6">
            <div className="form__group">
              <label htmlFor="Intended Class">Intended Class</label>
              <select
                name="Intended Class"
                value={student.intendedClass}
                onChange={(e) =>
                  setStudent({ ...student, intendedClass: e.target.value })
                }
              >
                <option hidden>Intended Class</option>
                <option value="JSS 1">JSS 1</option>
                <option value="JSS 2">JSS 2</option>
                <option value="JSS 3">JSS 3</option>
                <option value="SS 1">SS 1</option>
                <option value="SS 2">SS 2</option>
                <option value="SS 3">SS 3</option>
              </select>
            </div>
          </div>
        </div>
        <button className="auth__button">
          {loading ? (
            <ReactLoading type="spin" color="#fff" width={30} height={30} />
          ) : (
            "Add Student"
          )}
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddNewStudent;
