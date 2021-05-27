import React, { useState } from "react";
import { StudentList } from "../CommonData/dummyData";
import CommonList from "../Component/CommonList";
import CommonHeader from "../Component/CommonHeader";
import CommonButton from "../Component/CommonButton/index";
import CommonInput from "../Component/CommonInput/index";
import CommonSelect from "../Component/CommonSelect/index";
import { useEffect } from "react";
import axios from "axios";
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
  const [courseOptions, setCourseOption] = useState([]);
  const [data, setData] = useState({});
  const [displayDetailsFlag, setDisplayFlag] = useState(false);
  const [subject, setSubject] = useState("");
  const [ActiveId, setActiveId] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  // console.log(courses)

  const getData = () => {
    //Fetching Student List from backend
    axios
      .get("http://localhost:5000/studentList")
      .then((res) => {
        // console.log(res.data.studentList,"axios")
        setData(res.data)
      })
      .catch((err) => console.log(err));

    //Fetching Course List from backend
    axios
      .get("http://localhost:5000/courseList")
      .then((res) => {
        // console.log("courseList-->",res.data.courseList)
        setCourseOption(res.data.courseList);
      })
      .catch((err) => console.log(err));
  };
  React.useEffect(() => {
    getData();
  },[]);

  const fillData = (evt) => {
    console.log("filldata", evt)
    // setStudentName(evt.name);
    // setCourses(evt.course);

    setActiveId(evt.id);

    setDisplayFlag(ActiveId !== null)

  };

  const AddSubject = () => {
    // const course_list= [...courses,subject]?
    //validating if subject chosen by admin already exist in courselist of student
    const find = data[ActiveId].course.find((item) => {
      return item.toLowerCase() === subject.toLowerCase();
    });
    // Checking if subject has empty value
    // if(subject==="null"){
    //     setErrorMessage("Kindly choose a subject")
    //     return
    // }
    console.log(subject, "addsubject");
    console.log(find, "find----");
    if (!find) {
      axios.put(`http://localhost:5000/studentList/${ActiveId}`, {
        ... data[ActiveId],
          course: [...data[ActiveId].course, subject],
        })
        .then((res) => {
          console.log(res.status);
          if (res.status === 200) {
            // console.log(res.status,"updated successfully")
            setErrorMessage("");
            // window.location.reload();
             setData(res.data)
            // getData()
          }
        })
        .catch((err) => console.log(err));
    } else {
      setErrorMessage(
        "Subject is already chosen by the student. Choose another subject"
      );
      console.log("subject alredy exist");
    }
  };
  const handleChange = (e) => {
    setSubject(e.target.value);
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
        {/* 1. if displayDetailsFLag is True component is rendered else nothing is rendered. 
                    2.  Upon clicking the same item in the list displayDetailsFlag state will toggle from true to false
                    3. If different list item is clicked displayDetailFLag remains true
                 */}
        {displayDetailsFlag !== true ? null : (
          <div className="event-details">
            <CommonHeader text="Student name" customStyle={studentNameHeader} />
            <p>{data[ActiveId].name}</p>
            <CommonHeader text="Courses" customStyle={CourseStyle} />
            <div className="evt-list">
              <CommonList
                options={data[ActiveId].course}
                id="studentSubjectList"
                customStyle={eventCodeStyle}
              />
            </div>

            <div className="displayblock2">
              {/* <CommonInput 
            type="text"
            name="Subject"
            value={subject}
            changeHandler={handleChange}
            customStyle={inputStyle}
            /> */}

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
        <div>{errorMessage}</div>
      </div>
    </div>
  );
};

export default Admin;
