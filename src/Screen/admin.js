import React, { useEffect, useState } from "react";
import CommonList from "../Component/CommonList";
import CommonHeader from "../Component/CommonHeader";
import CommonButton from "../Component/CommonButton/index";
import CommonSelect from "../Component/CommonSelect/index";
import Pagination from "./Pagination/index";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Alert from "@material-ui/lab/Alert";
import {
  getStudentList,
  getCourseList,
  updateSubject,
  setErrorMessage,
  setSuccessMessage,
  setInputSubject,
  setActiveId,
  setDisplayFlag,
  setCurrentPage,
} from "./action";
// import axios from "axios";
import "./admin.css";
import {
  studentStyle,
  eventCodeStyle,
  studentNameHeader,
  CourseStyle,
  buttonStyle,
  inputStyle,
} from "../styles/index";

const Admin = () => {
  // const [courseOptions, setCourseOption] = useState([]);
  // const [data, setData] = useState({});
  // const [displayDetailsFlag, setDisplayFlag] = useState(false);
  // const [subject, setSubject] = useState("");
  //  const [activeId, setActiveId] = useState(null);
  // const [errorMessage, setErrorMessage] = useState("");
  // console.log(courses)
  // const [studentPerPage] = useState(2);
  // const [currentPage, setCurrentPage]=useState(1)
  const dispatch = useDispatch();
  const {
    data,
    courseOptions,
    error_message,
    success_message,
    subject,
    activeId,
    displayFlag,
    studentPerPage,
    currentPage,
  } = useSelector((state) => ({
    data: state.adminReducer.data,
    courseOptions: state.adminReducer.courseList,
    error_message: state.adminReducer.error_message,
    success_message: state.adminReducer.success_message,
    subject: state.adminReducer.subject,
    activeId: state.adminReducer.activeId,
    displayFlag: state.adminReducer.displayFlag,
    studentPerPage: state.adminReducer.studentPerPage,
    currentPage: state.adminReducer.currentPage,
  }));

  // const getData = () => {
  //   //redux
  //   //Fetching Student List from backend
  //   axios
  //     .get("http://localhost:5000/studentList")
  //     .then((res) => {
  //       // console.log(res.data.studentList,"axios")
  //       setData(res.data)
  //     })
  //     .catch((err) => console.log(err));

  //   //Fetching Course List from backend
  //   axios
  //     .get("http://localhost:5000/courseList")
  //     .then((res) => {
  //       // console.log("courseList-->",res.data.courseList)
  //       setCourseOption(res.data.courseList);
  //     })
  //     .catch((err) => console.log(err));
  // };
  useEffect(() => {
    dispatch(getStudentList());
    dispatch(getCourseList());
    // setSubject("null")
    dispatch(setInputSubject("null"));
  }, []);

  const fillData = (evt) => {
    console.log("filldata", evt);
    // setStudentName(evt.name);
    // setCourses(evt.course);

    //  setActiveId(evt.id);
    dispatch(setActiveId(evt.id));
    dispatch(setErrorMessage(""));
    dispatch(setSuccessMessage(""));

    dispatch(setInputSubject("null"));

    dispatch(setDisplayFlag(evt.id === data[evt.id].id ? true : false));
    //setDisplayFlag(activeId !== null)
  };

  const AddSubject = () => {
    //validating if subject chosen by admin already exist in courselist of student

    const find = data[activeId].course.find((item) => {
      return item.toLowerCase() === subject.toLowerCase();
    });

    // Checking if subject has empty value
    if (subject == "null") {
      dispatch(setErrorMessage("Please select a subject."));
      dispatch(setSuccessMessage(""));

      return;
    }
    if (!find) {
      const data_1 = {
        ...data[activeId],
        course: [...data[activeId].course, subject],
      };
      dispatch(updateSubject(activeId, data_1));
      // setSubject("null")
      dispatch(setInputSubject("null"));

      // axios.put(`http://localhost:5000/studentList/${ActiveId}`, {
      //   ... data[ActiveId],
      //     course: [...data[ActiveId].course, subject],
      //   })
      //   .then((res) => {
      //     console.log(res.status);
      //     if (res.status === 200) {
      //       // console.log(res.status,"updated successfully")
      //       setErrorMessage("");
      //       // window.location.reload();
      //       //  setData(res.data)
      //       // getData()
      //     }
      //   })
      //   .catch((err) => console.log(err));
    } else {
      // setErrorMessage(
      //   "Subject already exist. Choose another subject"
      // );
      dispatch(setErrorMessage("Subject already exists."));
      dispatch(setSuccessMessage(""));

    }
  };
  const handleChange = (e) => {
    dispatch(setInputSubject(e.target.value));
    console.log(e.target.value);
  };

  //pagination
  const data1 = Object.values(data);
  const indexofLastStudent = currentPage * studentPerPage;
  const indexOfFirstStudent = indexofLastStudent - studentPerPage;
  const currentStudent = data1.slice(indexOfFirstStudent, indexofLastStudent);
  console.log(currentStudent);

  const paginate = (number) => {
    // setCurrentPage(number)
    dispatch(setCurrentPage(number));
    dispatch(setErrorMessage(""));
    dispatch(setInputSubject("null"));
    dispatch(setDisplayFlag(false));
  };
  return (
    <div className="box">
      <div className="container">
        <div className="event-list">
          <CommonHeader text="Students List" customStyle={studentStyle} />
          <div className="evt-list">
            <CommonList
              // options={Object.values(data)}
              options={currentStudent}
              fillData={fillData}
              id="studentList"
              customStyle={eventCodeStyle}
              size={17}
            />
            <Pagination
              studentPerPage={studentPerPage}
              totalPost={data1.length}
              paginate={paginate}
            />
          </div>
          <div className="page-list"></div>
        </div>
        <div className="page-list"></div>

        {/* 1. if displayFLag is True component is rendered else nothing is rendered.
         */}
        {displayFlag == !true ? null : (
          <div className="event-details">
            <CommonHeader text="Student name" customStyle={studentNameHeader} />
            <p>{data[activeId].name}</p>
            <CommonHeader text="Courses" customStyle={CourseStyle} />
            <div className="evt-list">
              <CommonList
                options={data[activeId].course}
                id="studentSubjectList"
                customStyle={eventCodeStyle}
              />
            </div>

            <div className="displayblock2">
              <CommonSelect
                selectedData={subject}
                changeHandler={handleChange}
                options={courseOptions}
                customStyle={inputStyle}
              />

              <CommonButton
                title={"Add Subject"}
                customStyle={buttonStyle}
                AddSubject={AddSubject}
              />
              
            </div>
            <div>
          {error_message ? (
            <Alert severity="error">{error_message}</Alert>
          ) : null}
          {success_message?(
            <Alert severity="success">{success_message}</Alert>
          ):null}
        </div>
          </div>
        )}
        
      </div>
    </div>
  );
};
Screen.PropTypes = {
  data1: PropTypes.array,
};
Admin.defaultProps = {
  data1: [],
};

export default Admin;
