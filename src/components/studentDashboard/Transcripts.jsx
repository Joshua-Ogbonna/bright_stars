import React from "react";

const Transcripts = () => {
  return (
    <div className="section__container">
      <h3>Transcripts</h3>
      <div className="apply__transcript">
        <h5>Apply for transcripts</h5>
        <div className="form__group row">
          <div className="col-md-6">
            <label htmlFor="reason">Reason for transcript</label>
            <input type="text" placeholder="Reason" />
          </div>
          <div className="col-md-6">
            <label htmlFor="destination">Transcript Destination</label>
            <input type="text" name="destination" placeholder="Destination" />
          </div>
        </div>
        <div className="form__group mt-3">
            <button className="dashboard__button">Apply</button></div>
      </div>
    </div>
  );
};

export default Transcripts;
