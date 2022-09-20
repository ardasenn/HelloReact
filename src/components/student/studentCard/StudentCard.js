import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDeleteLeft,faSubway,faStar}  from '@fortawesome/free-solid-svg-icons';
const StudentCard = ({ student, handleClickDeleteButton }) => {
  const [icon, setIcon] = useState(faDeleteLeft);
  return (
    <div key={student.id} className="student-card">
      <FontAwesomeIcon icon={icon} className="btn" onClick={() => setIcon(faSubway)}/>
      {/* <button className="btn" onClick={() => handleClickDeleteButton(student.id)}>X</button> */}
      <div className="card-row">
        <span>Name</span>
        <p>{student.name}</p>
      </div>
      <div className="card-row">
        <span>LastName</span>
        <p>{student.lastName}</p>
      </div>
      <div className="card-row">
        <span>Age</span>
        <p>{student.age}</p>
      </div>
      <div className="card-row">
        <span>Instructor</span>
        <p>{student.instructor}</p>
      </div>
    </div>
  );
};

export default StudentCard;
