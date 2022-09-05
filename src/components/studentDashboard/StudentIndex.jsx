import React, { useEffect } from "react";
import Greetings from "../ReusableComponents/Greetings";
import { useDispatch, useSelector } from "react-redux";
import { getStudent } from "../../app/studentReducer/actions";

const StudentIndex = () => {
  const student = sessionStorage.getItem("student");
  const dispatch = useDispatch();
  const {profile} = useSelector(state => state.student)

  useEffect(() => {
    if (student) {
      dispatch(getStudent(student));
    }
  }, [student]);
  return (
    <div className="section__container">
      <Greetings name={profile.name} />
      <div className="container__hero shadow p-5">
          <h5>2nd</h5>
          <p>Term</p>
      </div>
    </div>
  );
};

export default StudentIndex;
