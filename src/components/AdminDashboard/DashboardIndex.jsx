import React, { useEffect } from "react";
import Greetings from "../ReusableComponents/Greetings";
import { useSelector, useDispatch } from "react-redux";
import { getStudents } from "../../app/adminReducer/actions";

const DashboardIndex = () => {
  const dispatch = useDispatch();
  const {students} = useSelector(state => state.admin)

  useEffect(() => {
    dispatch(getStudents());
  }, []);
  return (
    <div className="section__container">
      <Greetings name="Admin"></Greetings>
      <div className="statistics__cards">
        <div className="statistics__card students__stats">
          <h5>{students && students.length}</h5>
          <p>Students</p>
        </div>
        <div className="statistics__card teachers__stats">
          <h5>24</h5>
          <p>Teachers</p>
        </div>
        <div className="statistics__card term__stats">
          <h5>2nd</h5>
          <p>Term</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardIndex;
