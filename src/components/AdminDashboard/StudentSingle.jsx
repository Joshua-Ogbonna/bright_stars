import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { backendLocal, backendURL } from "../../utils/links";
import { useEffect } from "react";
import Information from "./StudentComponents/Information";
import PostResults from "./StudentComponents/PostResults";
import "./StudentComponents/StudentComponents.css";

const StudentSingle = () => {
  const [loading, setLoading] = useState(false);
  const [student, setStudent] = useState({});
  const [error, setError] = useState({});
  const [activeTab, setActiveTab] = useState("Information");

  const { id } = useParams();

  const handleFetchSingleStudent = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${backendURL}/student/${id}`);
      console.log(response.data.data);
      setStudent(response.data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.response);
    }
  };

  const handleChangeActiveTab = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    handleFetchSingleStudent();
  }, []);

  return loading ? (
    <>"Loading Student"</>
  ) : (
    <div className="section__container">
      <div className="student__head">
        <i className="bx bxs-user"></i>
        <div>
          <h5>{student.name}</h5>
        </div>
      </div>

      <div className="activity__tab">
        <div onClick={() => handleChangeActiveTab("Information")}>
          Information
        </div>
        <div onClick={() => handleChangeActiveTab("Post Result")}>
          Post Result
        </div>
        <div onClick={() => handleChangeActiveTab("Edit Student")}>
          Edit Student
        </div>
      </div>

      {activeTab === "Information" && (
        <Information
          address={student.address}
          LGA={student.LGA}
          state={student.state}
          gender={student.gender}
          dateOfBirth={student.dateOfBirth}
          parents={student.nameOfParents}
          telephone={student.telephone}
          bloodGroup={student.bloodGroup}
        />
      )}
      {activeTab === "Post Result" && <PostResults id={student.regNo} />}
    </div>
  );
};

export default StudentSingle;
