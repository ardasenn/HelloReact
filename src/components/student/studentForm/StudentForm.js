import React from 'react'

const StudentForm = ({setStudent,studentValidator,handleClickAddButton,student}) => {
  return (
    <form className="student-form" action="">
        <h1>New Student</h1>
        <input
          onChange={(e) =>
            setStudent((prevStudent) => ({
              ...prevStudent,
              name: e.target.value,
            }))
          }
          className="first-name"
          type="text"
          placeholder="First Name"
          value={student.name}
        />
        {!studentValidator.name && <span>Name cant be empty</span>}

        <input
          onChange={(e) =>
            setStudent((prevStudent) => ({
              ...prevStudent,
              lastName: e.target.value,
            }))
          }
          className="last-name"
          type="text"
          placeholder="Last Name"
          value={student.lastName}
        />
        {!studentValidator.lastName && <span>LastName cant be empty</span>}
        <input
          onChange={(e) =>
            setStudent((prevStudent) => ({
              ...prevStudent,
              age: e.target.value,
            }))
          }
          className="age"
          type="number"
          placeholder="Age"
          value={student.age}
        />
        {!studentValidator.age && <span>age cant be empty</span>}
        <input
          onChange={(e) =>
            setStudent((prevStudent) => ({
              ...prevStudent,
              instructor: e.target.value,
            }))
          }
          className="instructor"
          type="text"
          placeholder="Instructor"
          value={student.instructor}
        />
        {!studentValidator.instructor && <span>instructor cant be empty</span>}

        <button onClick={handleClickAddButton} className="add-btn">
          Add
        </button>
      </form>
  )
}

export default StudentForm