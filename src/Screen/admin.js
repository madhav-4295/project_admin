import React, {useEffect } from "react";
// import { StudentList } from "../CommonData/dummyData";
import CommonList from "../Component/CommonList";
import CommonHeader from "../Component/CommonHeader";
import CommonButton from "../Component/CommonButton/index";
// import CommonInput from "../Component/CommonInput/index";
import CommonSelect from "../Component/CommonSelect/index";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import {
  getStudentList,
  getCourseList,
  updateSubject,
  setErrorMessage,
  setInputSubject,
  setActiveId,
  setDisplayFlag,
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
// import adminReducer from "./reducer";

const Admin = () => {
  // const [courseOptions, setCourseOption] = useState([]);
  // const [data, setData] = useState({});
  // const [displayDetailsFlag, setDisplayFlag] = useState(false);
  // const [subject, setSubject] = useState("");
  //  const [activeId, setActiveId] = useState(null);
  // const [errorMessage, setErrorMessage] = useState("");
  // console.log(courses)
  const dispatch = useDispatch();
  const {
    data,
    courseOptions,
    error_message,
    subject,
    activeId,
    displayFlag,
  } = useSelector((state) => ({
    data: state.adminReducer.data,
    courseOptions: state.adminReducer.courseList,
    error_message: state.adminReducer.error_message,
    subject: state.adminReducer.subject,
    activeId: state.adminReducer.activeId,
    displayFlag: state.adminReducer.displayFlag,
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

    dispatch(setDisplayFlag(evt.id === data[evt.id].id ? true : false));
    //setDisplayFlag(activeId !== null)
  };

  const AddSubject = () => {
    //validating if subject chosen by admin already exist in courselist of student

    const find = data[activeId].course.find((item) => {
      return item.toLowerCase() === subject.toLowerCase();
    });

    // Checking if subject has empty value
    // if(subject=="null"){
    //     setErrorMessage("Kindly choose a subject")
    //     return
    // }
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
    }
  };
  const handleChange = (e) => {
    dispatch(setInputSubject(e.target.value));
    console.log(e.target.value);
  };
  return (
    <div className="box">
      <div className="container">
        <div className="event-list">
          <CommonHeader text="Students List" customStyle={studentStyle} />
          <div className="evt-list">
            <CommonList
              options={Object.values(data)}
              fillData={fillData}
              id="studentList"
              customStyle={eventCodeStyle}
              size={17}
            />
          </div>
        </div>
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
                title={"Add Subjects"}
                customStyle={buttonStyle}
                AddSubject={AddSubject}
              />
            </div>
          </div>
        )}
        <div>{error_message}</div>
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
