import React from 'react'
import moment from 'moment';

const Information = ({
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

export default Information