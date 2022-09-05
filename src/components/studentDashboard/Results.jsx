import React from "react";

const Results = () => {
  return (
    <div className="section__container">
      <h3>Check Results</h3>
      <div className="form__group row">
        <div className="col-md-6">
          <select name="term">
            <option hidden>Select Term</option>
            <option value="First Term">First Term</option>
            <option value="Second Term">Second Term</option>
            <option value="Third Term">Third Term</option>
          </select>
        </div>
        <div className="col-md-6">
          <select name="acaddemic year">
            <option hidden>Select Academic Year</option>
            <option value="2021/2022">2021/2022</option>
            <option value="2022/2023">2022/2023</option>
            <option value="2023/2024">2023/2024</option>  
          </select>  
        </div> 
      </div>
    </div>
  );
};

export default Results;
