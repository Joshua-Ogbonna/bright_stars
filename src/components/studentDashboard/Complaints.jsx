import React from "react";

const Complaints = () => {
  return (
    <div className="section__container">
      <h3>Submit Complaints</h3>
      <div className="form__group row">
        <div className="col-md-6">
          <input type="text" name="complaint" placeholder="Type complaint" />
        </div>
        <div className="col-md-6">
            <button className="dashboard__button">Submit Complaint</button>    
        </div>
      </div>
    </div>
  );
};

export default Complaints;
