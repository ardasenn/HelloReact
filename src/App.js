import { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import StudentForm from "./components/student/studentForm/StudentForm";
import StudentList from "./components/student/studentList/StudentList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [student, setStudent] = useState({
    name: "",
    lastName: "",
    age: "",
    instructor: "",
  });
  const [studentValidator, setStudentValidator] = useState({
    name: true,
    lastName: true,
    age: true,
    instructor: true,
  });
  const [studentList, setStudentList] = useState([]);
  // const [isRefreshPage,setIsRefreshPage]=useState(false);
  useEffect(() => {
    const getStudentsFromApi = async () => {
      const response = await axios.get("http://localhost:5000/students");
      setStudentList(response.data);
    };
    getStudentsFromApi();
  }, []);

  const handleClickAddButton = async (e) => {
    e.preventDefault();
    setStudentValidator({ ...student });

    if (Object.values(student).every((value) => value)) {
      setStudentList((prevStudentList) => [
        ...prevStudentList,
        { id: `${Math.trunc(Math.random() * 1000)}`, ...student },
      ]);
       
      // const createStudent= await axios.post("http://localhost:5000/students"+"/")
      const _student = { ...student };

      Object.keys(_student).forEach((key) => (_student[key] = ""));
      setStudent(_student);
    }
  };
  const handleClickDeleteButton = (id) => {
    setStudentList((before) => before.filter((obj) => obj.id !== id));
  };
  return (
    <div className="App">
      <StudentForm
        setStudent={setStudent}
        studentValidator={studentValidator}
        handleClickAddButton={handleClickAddButton}
        student={student}
      />
      {studentList.length ? (
        <StudentList
          studentList={studentList}
          handleClickDeleteButton={handleClickDeleteButton}
        />
      ) : (
        <FontAwesomeIcon className="loading" icon={faSpinner} />
      )}
    </div>
  );
}

export default App;
