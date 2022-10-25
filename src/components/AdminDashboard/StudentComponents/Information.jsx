import React from "react";
import moment from "moment";

import styles from "../../../styles/forms.module.css";

const classes = ["JSS 1", "JSS 2", "JSS 3", "SS 1", "SS 2", "SS 3"]

const Information = ({ student, editForm }) => {
  return (
    <div className="student__information row">
      <div className="col-md-4">
        <p>Registration Number</p>
        <input type="text" name="regNo" value={student.regNo} disabed={!editForm} />
      </div>
      <div className="col-md-4">
        <p>Gender</p>
        <input
          type="text"
          disabled={!editForm}
          name="gender"
          className={styles.input}
          value={student.gender}
        />
      </div>
      <div className="col-md-4">
        <p>Date of Birth</p>
        {!editForm ? (
          <h5>{moment(student.dateOfBirth).format("MMMM Do YYYY")}</h5>
        ) : (
          <input type="date" className={styles.input} />
        )}
      </div>
      <div className="col-md-4">
        <p>Blood Group</p>
        <input type="text" name="bloodGroup" value={student.bloodGroup} disabled={!editForm} />
      </div>
      <div className="col-md-4">
        <p>Name of Parents</p>
        <input type="text" name="nameOfParents" value={student.nameOfParents} disabled={!editForm} />
      </div>
      <div className="col-md-4">
        <p>Telephone</p>
        <input type="text" name="telephone" value={student.telephone} disabled={!editForm} />
      </div>
      <div className="col-md-4">
        <p>Student Address</p>
        <input type="text" name="addressOfParents" value={student.addressOfParents} disabled={!editForm} />
      </div>
      <div className="col-md-4">
        <p>Nationality</p>
        <input type="text" name="nationality" value={student.nationality} disabled={!editForm} />
      </div>
      <div className="col-md-4">
        <p>State of Origin</p>
        <input type="text" name="state" value={student.state} disabled={!editForm} />
      </div>
      <div className="col-md-4">
        <p>Local Government Area</p>
        <input type="text" name="LGA" value={student.LGA} disabled={!editForm} />
      </div>
      <div className="col-md-4">
        <p>Class</p>
        <select name="intendedClass" className={styles.input} disabled={!editForm}>
          <option selected>{student.intendedClass}</option>
          {classes.map((nextClass, idx) => <option value={nextClass} key={idx}>{nextClass}</option>)}
        </select>
      </div>
      <div className="col-md-4">
        <p>School Fees Status</p>
        <select name="paidFees" disabled={!editForm}>
          <option selected>{student.paidFees ? "Paid" : "Not Paid"}</option>
          <option value={true}>Paid</option>
          <option value={false}>Not Paid</option>
        </select>
      </div>
      <div className="col-md-4">
        {editForm ? <button className="casual__button">Submit</button> : ""}
      </div>
    </div>
  );
};

export default Information;
