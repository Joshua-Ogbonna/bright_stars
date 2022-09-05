import axios from "axios";
import React, { useState } from "react";
import ReactLoading from "react-loading";
import { useNavigate } from "react-router-dom";

import { backendLocal, backendURL } from "../../../utils/links";

const allSubjects = [
  "English",
  "Mathematics",
  "Biology",
  "Commerce",
  "Civic Education",
  "Marketing",
  "Fishery",
  "Physics",
  "Chemistry",
  "Biology",
  "Economics",
  "Literature-in-English",
  "Commerce",
  "Igbo Language",
  "Government",
  "Agriculture",
  "Further Mathematics",
  "Christian Religious Knowledge",
  "Basic Technology",
  "Computer Studies",
  "Basic Science",
  "Basic Language",
  "Music"
];

const PostResults = ({ id }) => {
  const [classInformation, setClassInformation] = useState({
    teacher: "",
    term: "",
    academicYear: "",
    numOfStudents: "",
  });
  const [subject, setSubject] = useState({ subject: "", ca: "", exam: "" });
  const [resultInformation, setResultInformation] = useState({
    position: "",
    commentOne: "",
    commentTwo: "",
    commentThree: "",
    commentFour: "",
  });
  const [subjects, setSubjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAddSubjects = () => {
    if (!subject.subject || !subject.ca || !subject.exam) {
      alert("set subject details");
      return;
    }
    setSubjects((subjects) => [...subjects, subject]);
    setSubject({ subject: "", ca: "", exam: "" });
  };

  const handleSubmitResult = async () => {
    const data = {
      teacher: classInformation.teacher,
      term: classInformation.term,
      academicYear: classInformation.academicYear,
      numOfStudents: classInformation.numOfStudents,
      subjects,
      position: resultInformation.position,
      comment1: resultInformation.commentOne,
      comment2: resultInformation.commentTwo,
      comment3: resultInformation.commentThree,
      comment4: resultInformation.commentFour,
    };
    // console.log(data)
    setLoading(true);
    try {
      const response = await axios.post(`${backendURL}/result/${id}`, data);
      console.log(response.data);
      setLoading(false);
      navigate("/admin/students");
    } catch (error) {
      console.log(error.response);
      setLoading(false);
    }
  };

  return (
    <div className="tab__container">
      <div className="form">
        <div className="class__information">
          <div className="form__area">
            <label htmlFor="teacher">Teacher's Name</label>
            <input
              type="text"
              name="teacher's name"
              value={classInformation.teacher}
              onChange={(e) =>
                setClassInformation({
                  ...classInformation,
                  teacher: e.target.value,
                })
              }
            />
          </div>
          <div className="form__area">
            <label htmlFor="term">Term</label>
            <select
              name="term"
              value={classInformation.term}
              onChange={(e) =>
                setClassInformation({
                  ...classInformation,
                  term: e.target.value,
                })
              }
            >
              <option hidden selected>
                Select Term
              </option>
              <option value="First Term">First Term</option>
              <option value="Second Term">Second Term</option>
              <option value="Third Term">Third Term</option>
            </select>
          </div>
          <div className="form__area">
            <label htmlFor="academic year">Academic Year</label>
            <select
              name="academic year"
              value={classInformation.academicYear}
              onChange={(e) =>
                setClassInformation({
                  ...classInformation,
                  academicYear: e.target.value,
                })
              }
            >
              <option hidden selected>
                Select Academic Year
              </option>
              <option value="2021/2022">2021/2022</option>
              <option value="2022/2023">2022/2023</option>
              <option value="2023/2024">2023/2024</option>
            </select>
          </div>
          <div className="form__area">
            <label htmlFor="number of students">Number of Students</label>
            <input
              type="text"
              name="number of students"
              value={classInformation.numOfStudents}
              onChange={(e) =>
                setClassInformation({
                  ...classInformation,
                  numOfStudents: e.target.value,
                })
              }
            />
          </div>
        </div>
        <div className="subject__area">
          <div className="form__area">
            <label htmlFor="subject">Subject</label>
            <select
              name="subject"
              value={subject.subject}
              onChange={(e) =>
                setSubject({
                  ...subject,
                  subject: e.target.value,
                })
              }
            >
              <option hidden selected>
                Select Subject
              </option>
              {allSubjects.map((subject, idx) => (
                <option value={subject} key={idx}>
                  {subject}
                </option>
              ))}
            </select>
          </div>
          <div className="form__area">
            <label htmlFor="CA">Continuous Assessment</label>
            <input
              type="number"
              name="ca"
              id=""
              value={subject.ca}
              onChange={(e) =>
                setSubject({
                  ...subject,
                  ca: e.target.value,
                })
              }
            />
          </div>
          <div className="form__area">
            <label htmlFor="Exam">Exam</label>
            <input
              type="number"
              name="exam"
              id=""
              value={subject.exam}
              onChange={(e) =>
                setSubject({
                  ...subject,
                  exam: e.target.value,
                })
              }
            />
          </div>
          <div className="form__area">
            <button onClick={handleAddSubjects}>Add Subject</button>
          </div>
        </div>

        {/* Student Information */}
        <div className="student__information">
          <div className="form__area">
            <label htmlFor="Position">Position in Class</label>
            <input
              type="text"
              name="position"
              value={resultInformation.position}
              onChange={(e) =>
                setResultInformation({
                  ...resultInformation,
                  position: e.target.value,
                })
              }
            />
          </div>
        </div>

        {/* Teacher's Comments */}
        <div className="teachers__comments">
          <div className="form__area">
            <label htmlFor="comment one">Comment 1</label>
            <textarea
              name="comment"
              id=""
              cols="30"
              rows="10"
              value={resultInformation.commentOne}
              onChange={(e) =>
                setResultInformation({
                  ...resultInformation,
                  commentOne: e.target.value,
                })
              }
            ></textarea>
          </div>
          <div className="form__area">
            <label htmlFor="comment two">Comment 1</label>
            <textarea
              name="comment"
              id=""
              cols="30"
              rows="10"
              value={resultInformation.commentTwo}
              onChange={(e) =>
                setResultInformation({
                  ...resultInformation,
                  commentTwo: e.target.value,
                })
              }
            ></textarea>
          </div>
          <div className="form__area">
            <label htmlFor="comment three">Comment 1</label>
            <textarea
              name="comment"
              id=""
              cols="30"
              rows="10"
              value={resultInformation.commentThree}
              onChange={(e) =>
                setResultInformation({
                  ...resultInformation,
                  commentThree: e.target.value,
                })
              }
            ></textarea>
          </div>
          <div className="form__area">
            <label htmlFor="comment four">Comment 1</label>
            <textarea
              name="comment"
              id=""
              cols="30"
              rows="10"
              value={resultInformation.commentFour}
              onChange={(e) =>
                setResultInformation({
                  ...resultInformation,
                  commentFour: e.target.value,
                })
              }
            ></textarea>
          </div>
        </div>
        <div className="form__area">
          <button onClick={handleSubmitResult}>
            {loading ? (
              <ReactLoading type="spin" width={30} height={30} color="#000" />
            ) : (
              "Submit Result"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostResults;
