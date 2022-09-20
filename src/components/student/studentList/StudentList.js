import { text } from '@fortawesome/fontawesome-svg-core';
import React from 'react'
import { useState } from "react";
import StudentCard from "../studentCard/StudentCard";

const StudentList = ({studentList,handleClickDeleteButton}) => {
  const [searchResult,setSearchResult]=useState([])

  const handleSearch=e=>{
    const searchTerm=e.target.value
    searchTerm.trim() ?setSearchResult(studentList.filter((student)=>student.name.trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))):setSearchResult([])
  }
  return (
    <div className="student-list">
        <h3>Student List</h3>
         <input className='btn-search' placeholder='type for search' type="text" onChange={handleSearch}/>
        {searchResult.length?searchResult.map((student) => (
            <StudentCard key={student.id} student={student} handleClickDeleteButton={handleClickDeleteButton} />
          ) ):        
        studentList.map(
          (student) => (
            <StudentCard key={student.id} student={student} handleClickDeleteButton={handleClickDeleteButton} />
          ) 
        )}
      </div>
  )
}

export default StudentList