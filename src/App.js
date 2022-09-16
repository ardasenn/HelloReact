import { useState } from "react";
import "./App.css";

function App() {
  const [studentName, setStudentName] = useState("Berk");
  const [studentLastName, setStudentLastName] = useState("Basdemir");
  const [studentAge, setStudentAge] = useState("30");
  const [studentInstructor, setStudentInstructor] = useState("Orkun Durmaz");
  const [studentList, setStudentList] = useState([]);

  const handleClickAddButton = (e) => {
    e.preventDefault();
    // const student = {
    //   name: studentName,
    //   lastname: studentLastName,
    //   age: studentAge,
    //   instructor: studentInstructor,
    // };
    setStudentList((prevStudentList) => [
      ...prevStudentList,
      { studentName, studentLastName, studentAge, studentInstructor },
    ]);
    setStudentName(""); //value'ye bağlamazsan bu çaışmaz
    setStudentLastName("");
    setStudentAge("");
    setStudentInstructor("");
  };

  return (
    <div className="App">
      <form className="student-form" action="">
        <h1>New Student</h1>
        <input
          onChange={(e) => setStudentName(e.target.value)}
          className="first-name"
          type="text"
          placeholder="First Name"
          value={studentName}
        />
        <input
          onChange={(e) => setStudentLastName(e.target.value)}
          className="last-name"
          type="text"
          placeholder="Last Name"
          value={studentLastName}
        />
        <input
          onChange={(e) => setStudentAge(e.target.value)}
          className="age"
          type="text"
          placeholder="Age"
          value={studentAge}
        />
        <input
          onChange={(e) => setStudentInstructor(e.target.value)}
          className="instructor"
          type="text"
          placeholder="Instructor"
          value={studentInstructor}
        />

        <button onClick={handleClickAddButton} className="add-btn">
          Add
        </button>
      </form>
      <div className="student-list">
        <h3>Student List</h3>
        <div className="student-container">
          {studentList.map((student) => {
            return (
              <div className="student-card">
                <div className="card-row">
                  <span>Name</span>
                  <p>{student.studentName}</p>
                </div>
                <div className="card-row">
                  <span>LastName</span>
                  <p>{student.studentLastName}</p>
                </div>
                <div className="card-row">
                  <span>Age</span>
                  <p>{student.studentAge}</p>
                </div>
                <div className="card-row">
                  <span>Instructor</span>
                  <p>{student.studentInstructor}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
