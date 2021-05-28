import React, { useEffect } from "react";
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

  useEffect(() => {
    dispatch(getStudentList());
    dispatch(getCourseList());
    dispatch(setInputSubject("null"));
  }, []);

  const fillData = (evt) => {
    dispatch(setActiveId(evt.id));
    dispatch(setErrorMessage(""));
    dispatch(setSuccessMessage(""));
    dispatch(setInputSubject("null"));
    dispatch(setDisplayFlag(evt.id === data[evt.id].id ? true : false));
  };

  //Adding a new subject for the student
  const AddSubject = () => {
    //validating if subject chosen by admin already exist in courselist of student

    const find = data[activeId].course.find((item) => {
      return item.toLowerCase() === subject.toLowerCase();
    });

    // Validating if subject has empty value
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
      dispatch(setInputSubject("null"));

    }else{
      dispatch(setErrorMessage("Subject already exists."));
      dispatch(setSuccessMessage(""));
  
    }

  };
  const handleChange = (e) => {
    dispatch(setInputSubject(e.target.value));
  };

  //pagination
  const data1 = Object.values(data);
  const indexofLastStudent = currentPage * studentPerPage;
  const indexOfFirstStudent = indexofLastStudent - studentPerPage;
  const currentStudent = data1.slice(indexOfFirstStudent, indexofLastStudent);

  const paginate = (number) => {
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
              options={currentStudent}
              fillData={fillData}
              id="studentList"
              customStyle={eventCodeStyle}
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

        {/* if displayFLag is True component is rendered else nothing is rendered.
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
              {/* Displaying success or error message */}
              {error_message ? (
                <Alert severity="error">{error_message}</Alert>
              ) : null}
              {success_message ? (
                <Alert severity="success">{success_message}</Alert>
              ) : null}
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
