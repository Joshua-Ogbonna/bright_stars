import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../../app/studentReducer/actions";
import { Button } from "react-bootstrap";
import moment from "moment";
import { toast, ToastContainer } from "react-toastify";
import { backendURL } from "../../utils/links";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const subjects = [
  "English",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Biology",
  "Government",
  "Civic Education",
  "Marketing",
];

const ResultForm = ({ regNo }) => {
  const [result, setResult] = useState({
    teacher: "",
    term: "",
    academicYear: "",
    numOfStudents: "",
    subjects: [],
    position: "",
    comment1: "",
    comment2: "",
    comment3: "",
    comment4: "",
  });

  const [grade, setGrade] = useState({ subject: "", ca: "", exam: "" });
  const navigate = useNavigate();

  const handleAddResult = () => {
    if (!grade.subject || !grade.ca || !grade.exam) {
      toast.error("Incomplete grade details");
      return;
    }

    result.subjects.push(grade);
    setGrade({ ...grade, subject: "", ca: "", exam: "" });
  };

  const handleSubmitResult = () => {
    if (
      !result.teacher ||
      !result.term ||
      !result.academicYear ||
      !result.numOfStudents ||
      !result.position ||
      !result.comment1 ||
      !result.comment2 ||
      !result.comment3 ||
      !result.comment4
    ) {
      toast.error("Incomplete result details");
      return;
    }

    axios
      .post(`${backendURL}/result/${regNo}`, result)
      .then((response) => {
        console.log(response.data);
        if (response.data.success) {
          toast.success("Result posted successfully");
          navigate("/admin/students");
        } else {
            toast.error("An error occured.")
        }
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <div className="result__form mt-5">
      <div className="row">
        <div className="col-md-6 form__group">
          <label htmlFor="Teacher's Name">Teacher's Name</label>
          <input
            type="text"
            name="Teacher's Name"
            placeholder="Teacher's Name"
            value={result.teacher}
            onChange={(e) => setResult({ ...result, teacher: e.target.value })}
          />
        </div>
        <div className="col-md-6 form__group">
          <label htmlFor="Academic Term">Academic Term</label>
          <select
            name="term"
            value={result.term}
            onChange={(e) => setResult({ ...result, term: e.target.value })}
          >
            <option hidden>Select Term</option>
            <option value="First Term">First Term</option>
            <option value="Second Term">Second Term</option>
            <option value="Third Term">Third Term</option>
          </select>
        </div>
        <div className="col-md-6 form__group">
          <label htmlFor="Academic Year">Academic Year</label>
          <select
            name="year"
            value={result.academicYear}
            onChange={(e) =>
              setResult({ ...result, academicYear: e.target.value })
            }
          >
            <option hidden>Select Academic Year</option>
            <option value="2021/2022">2021/2022</option>
            <option value="2022/2023">2022/2023</option>
            <option value="2023/2024">2023/2024</option>
          </select>
        </div>
        <div className="col-md-6 form__group">
          <label htmlFor="Number of students in class">
            Number of students in class
          </label>
          <input
            type="number"
            name="Number of students in class"
            value={result.numOfStudents}
            onChange={(e) =>
              setResult({ ...result, numOfStudents: e.target.value })
            }
          />
        </div>
        <div className="col-md-6 form__group">
          <label htmlFor="Position">Position in class</label>
          <input
            type="number"
            name="Position"
            value={result.position}
            onChange={(e) => setResult({ ...result, position: e.target.value })}
          />
        </div>
        <div className="col-md-6 form__group">
          <label htmlFor="Comment">Comment One</label>
          <input
            type="text"
            name="Comment"
            placeholder="Comment"
            value={result.comment1}
            onChange={(e) => setResult({ ...result, comment1: e.target.value })}
          />
        </div>
        <div className="col-md-6 form__group">
          <label htmlFor="Comment">Comment Two</label>
          <input
            type="text"
            name="Comment"
            placeholder="Comment"
            value={result.comment2}
            onChange={(e) => setResult({ ...result, comment2: e.target.value })}
          />
        </div>
        <div className="col-md-6 form__group">
          <label htmlFor="Comment">Comment Three</label>
          <input
            type="text"
            name="Comment"
            placeholder="Comment"
            value={result.comment3}
            onChange={(e) => setResult({ ...result, comment3: e.target.value })}
          />
        </div>
        <div className="col-md-6 form__group">
          <label htmlFor="Comment">Comment Four</label>
          <input
            type="text"
            name="Comment"
            placeholder="Comment"
            value={result.comment4}
            onChange={(e) => setResult({ ...result, comment4: e.target.value })}
          />
        </div>
        <div className="col-md-12 form__group">
          <div className="row">
            <div className="col-md-3">
              <label htmlFor="grades">Subjects and Grades</label>
              <select
                name="grades"
                value={grade.subject}
                onChange={(e) =>
                  setGrade({ ...grade, subject: e.target.value })
                }
              >
                <option hidden>Select Subject</option>
                {subjects.map((subject, index) => (
                  <option value={subject} key={index}>
                    {subject}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-md-3">
              <label htmlFor="grades">Continous Assessment</label>
              <input
                type="number"
                name="grade"
                value={grade.ca}
                onChange={(e) => setGrade({ ...grade, ca: e.target.value })}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="grades">Examination Grade</label>
              <input
                type="number"
                name="grade"
                value={grade.exam}
                onChange={(e) => setGrade({ ...grade, exam: e.target.value })}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor=""></label>
              <button className="auth__button" onClick={handleAddResult}>
                Add Grade
              </button>
            </div>
          </div>
        </div>
        <div className="form__group">
          <button className="auth__button" onClick={handleSubmitResult}>
            Submit Result
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

const StudentInformation = ({
  address,
  LGA,
  state,
  gender,
  dateOfBirth,
  parents,
  telephone,
  bloodGroup,
}) => {
  return (
    <div className="student__information row">
      <div className="col-md-4">
        <p>Gender</p>
        <h5>{gender}</h5>
      </div>
      <div className="col-md-4">
        <p>Date of Birth</p>
        <h5>{moment(dateOfBirth).format("MMMM Do YYYY")}</h5>
      </div>
      <div className="col-md-4">
        <p>Blood Group</p>
        <h5>{bloodGroup}</h5>
      </div>
      <div className="col-md-4">
        <p>Name of Parents</p>
        <h5>{parents}</h5>
      </div>
      <div className="col-md-4">
        <p>Telephone</p>
        <h5>{telephone}</h5>
      </div>
      <div className="col-md-4">
        <p>Student Address</p>
        <h5>{address}</h5>
      </div>
      <div className="col-md-4">
        <p>State of Origin</p>
        <h5>{state}</h5>
      </div>
    </div>
  );
};

const AdminResults = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.student);
  const [showProfile, setShowProfile] = useState(false);
  const [showResultForm, setShowResultForm] = useState(true);
  console.log(profile);

  useEffect(() => {
    dispatch(getStudent(sessionStorage.getItem("save_id")));
  }, []);
  return (
    <div className="section__container">
      <h3>Student's Information</h3>
      <div className="container__hero shadow p-5">
        <h5>{profile.name}</h5>
        <p>
          {profile.intendedClass} | {profile.regNo}
        </p>
        <Button className="me-3">Edit Student's Information</Button>
        <Button>Post Result</Button>
      </div>
      {/* Components */}
      {showProfile && (
        <StudentInformation
          address={profile.address}
          LGA={profile.LGA}
          state={profile.state}
          gender={profile.gender}
          dateOfBirth={profile.dateOfBirth}
          bloodGroup={profile.bloodGroup}
          parents={profile.nameOfParents}
          telephone={profile.telephone}
        />
      )}
      {showResultForm && <ResultForm regNo={profile.regNo} />}
    </div>
  );
};

export default AdminResults;
