import React, { useState, useEffect } from "react";
import axios from "axios";
import { backendURL } from "../../utils/links";
import { Table } from "react-bootstrap";

const Teachers = () => {
  const [teacherForm, setTeacherForm] = useState(false);
  const [teacherList, setTeachers] = useState([]);
  const [teacherData, setTeacherData] = useState({
    name: "",
    dateJoined: Date.now(),
    dateOfBirth: "",
    address: "",
    phoneNumber: "",
    emailAddress: "",
    stateOfOrigin: "",
    picture: "",
    class: "",
    designation: "",
    section: "",
    subject: "",
  });

  const handleSetTeacherForm = () => {
    setTeacherForm(!teacherForm);
  };

  const handleGetTeacher = () => {
    axios
      .get(`${backendURL}/teacher`)
      .then((response) => {
        console.log(response.data);
        setTeachers(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    handleGetTeacher();
  }, []);
  return (
    <div className="section__container">
      <h3>Bright Teachers</h3>
      {!teacherForm && (
        <button className="casual__button" onClick={handleSetTeacherForm}>
          Add Teacher
        </button>
      )}
      {teacherForm && (
        <>
          <div className="form__group row">
            <div className="col-lg-6">
              <label htmlFor="teacher's name">Teacher's Name</label>
              <input
                type="text"
                name="teacher's name"
                placeholder="John Doe"
                value={teacherData.name}
                onChange={(e) =>
                  setTeacherData({ ...teacherData, name: e.target.value })
                }
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="Date of birth">Date of Birth</label>
              <input
                type="date"
                name="date of birth"
                value={teacherData.dateOfBirth}
                onChange={(e) =>
                  setTeacherData({
                    ...teacherData,
                    dateOfBirth: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                name="address"
                placeholder="Owerri Imo State"
                value={teacherData.address}
                onChange={(e) =>
                  setTeacherData({ ...teacherData, address: e.target.value })
                }
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="phone number">Phone Number</label>
              <input
                type="text"
                name="phone number"
                placeholder="08112345678"
                value={teacherData.phoneNumber}
                onChange={(e) =>
                  setTeacherData({
                    ...teacherData,
                    phoneNumber: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="email address">Email Address</label>
              <input
                type="email"
                name="email address"
                placeholder="teacher@bright.com"
                value={teacherData.emailAddress}
                onChange={(e) =>
                  setTeacherData({
                    ...teacherData,
                    emailAddress: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="state of origin">State of Origin</label>
              <input
                type="text"
                name="state of origin"
                placeholder="e.g Imo State"
                value={teacherData.stateOfOrigin}
                onChange={(e) =>
                  setTeacherData({
                    ...teacherData,
                    stateOfOrigin: e.target.value,
                  })
                }
              />
            </div>
            <div className="col-lg-6">
              <label htmlFor="class">Class (If primary section)</label>
              <select
                name="class"
                value={teacherData.class}
                onChange={(e) =>
                  setTeacherData({ ...teacherData, class: e.target.value })
                }
              >
                <option hidden>Choose Class</option>
                <option value="Primary 1">Primary 1</option>
                <option value="Primary 2">Primary 2</option>
                <option value="Primary 3">Primary 3</option>
                <option value="Primary 4">Primary 4</option>
                <option value="Primary 5">Primary 5</option>
                <option value="Primary 6">Primary 6</option>
              </select>
            </div>
            <div className="col-lg-6">
              <label
                htmlFor="designation"
                value={teacherData.designation}
                onChange={(e) =>
                  setTeacherData({
                    ...teacherData,
                    designation: e.target.value,
                  })
                }
              >
                Designation
              </label>
              <select name="designation">
                <option hidden>Choose a Designation</option>
                <option value="Class Teacher">Class Teacher</option>
                <option value="Headmistress">Headmistress</option>
                <option value="Headmaster">Headmaster</option>
                <option value="Principal">Principal</option>
              </select>
            </div>
            <div className="col-lg-6">
              <label htmlFor="section">Section</label>
              <select
                name="section"
                value={teacherData.section}
                onChange={(e) =>
                  setTeacherData({ ...teacherData, section: e.target.value })
                }
              >
                <option hidden>Choose a Section</option>
                <option value="Secondary">Secondary</option>
                <option value="Primary">Primary</option>
                <option value="Nursery">Nursery</option>
              </select>
            </div>
            <div className="col-lg-6">
              <label htmlFor="Subject">
                Subject Specialisation (For staff in secondary)
              </label>
              <input
                type="text"
                name="subjects"
                placeholder="User a comma if handling more than 1 subject"
                value={teacherData.subject}
                onChange={(e) =>
                  setTeacherData({ ...teacherData, subject: e.target.value })
                }
              />
            </div>
          </div>
          <div className="form__group mt-3">
            <button className="casual__button" onClick={handleSetTeacherForm}>
              Save Teacher
            </button>
          </div>
        </>
      )}

      {!teacherForm && teacherList.length > 0 ? (
        <>
          <Table className="mt-4">
            <thead>
              <tr>
                <th></th>
                <th>Teacher's Name</th>
                <th>Date Joined</th>
                <th>Date of Birth</th>
                <th>Designation</th>
                <th>Class</th>
                <th>Specialization</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {teacherList.map((teacher, index) => (
                <tr key={teacher._id}>
                  <td>{index + 1}</td>
                  <td>{teacher.name}</td>
                  <td>{teacher.dateJoined}</td>
                  <td>{teacher.dateOfBirth}</td>
                  <td>{teacher.designation}</td>
                  <td>{teacher.class}</td>
                  <td>{teacher.subject}</td>
                  <td></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default Teachers;
