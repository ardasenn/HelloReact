import { useState } from "react";
import "./App.scss";

function App() {
  const [student, setStudent] = useState({name:"",lastName:"",age:"",instructor:""});
  const [studentValidator, setStudentValidator] = useState({name:true,lastName:true,age:true,instructor:true});
  const [studentList, setStudentList] = useState([]);

  const handleClickAddButton = (e) => {
    e.preventDefault();
    setStudentValidator({...student});
   
    if(Object.values(student).every(value=>value)){
      setStudentList(prevStudentList=>[...prevStudentList,student])
      
      const _student={...student}
      
     Object.keys(_student).forEach(key=>_student[key]="")
      setStudent(_student)
    }    
  };

  return (
    <div className="App">
      <form className="student-form" action="">
        <h1>New Student</h1>
        <input
          onChange={e=>setStudent(prevStudent=>({...prevStudent,name:e.target.value}))}
          className="first-name"
          type="text"
          placeholder="First Name"
          value={student.name}
        />
        {!studentValidator.name && <span>Name cant be empty</span>}

        <input
          onChange={e=>setStudent(prevStudent=>({...prevStudent,lastName:e.target.value}))}
          className="last-name"
          type="text"
          placeholder="Last Name"
          value={student.lastName}
        />
        {!studentValidator.lastName && <span>LastName cant be empty</span> }
        <input
          onChange={e=>setStudent(prevStudent=>({...prevStudent,age:e.target.value}))}
          className="age"
          type="number"
          placeholder="Age"
          value={student.age}
        />
        {!studentValidator.age && <span>age cant be empty</span> }
        <input
          onChange={e=>setStudent(prevStudent=>({...prevStudent,instructor:e.target.value}))}
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
      <div className="student-list">
        <h3>Student List</h3>
        <div className="student-container">
          {studentList.map((student) => {
            return (
              <div className="student-card">
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
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
