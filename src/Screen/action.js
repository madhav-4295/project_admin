import {
  STUDENT_LIST,
  COURSE_LIST,
  ERROR_MESSAGE,
  SUCCESS_MESSAGE,
  SUBJECT,
  ACTIVEID,
  DISPLAYFLAG,
  CURRENT_PAGE
} from "../../src/Redux/ActionTypes";
import axios from "axios";

//Fetching studentList
export const getStudentList = () => {
//   console.log("in action, getstudentlist");
  return (dispatch) => {
    try {
      axios({
        method: "GET",
        url: "http://localhost:5000/studentList",
      })
        .then((response) => {
        //   console.log(response, "axios action");

          dispatch({
            type: STUDENT_LIST,
            payload: response.data,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };
};
// Fetching Course List
export const getCourseList = () => {
//   console.log("in action, getcourselist");
  return (dispatch) => {
    try {
      axios({
        method: "GET",
        url: "http://localhost:5000/courseList",
      })
        .then((response) => {
        //   console.log(response, "axios action");

          dispatch({
            type: COURSE_LIST,
            payload: response.data.courseList,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };
};

//Updating Array of subjects of a student

export const updateSubject = (id, data) => {
//   console.log("update-->", data);
  return (dispatch) => {
    try {
      axios({
        method: "PUT",
        url: `http://localhost:5000/studentList/${id}`,
        data: data,
      })
        .then((response) => {
        //   console.log(response, "axios action");
          dispatch(setSuccessMessage("Subject added successfully."));
          dispatch(setErrorMessage(""));


          dispatch({
            type: STUDENT_LIST,
            payload: response.data,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.error(error);
    }
  };
};

//Setting Error Message
export const setErrorMessage = (text) => {
  return (dispatch) => {
    dispatch({
      type: ERROR_MESSAGE,
      payload: text,
    });
  };
};

//setting Success Message
export const setSuccessMessage = (text) => {
  return (dispatch) => {
    dispatch({
      type: SUCCESS_MESSAGE,
      payload: text,
    });
  };
};
// Setting Input Subject

export const setInputSubject = (text) => {
  return (dispatch) => {
    dispatch({
      type: SUBJECT,
      payload: text,
    });
  };
};
export const setActiveId = (value) => {
  return (dispatch) => {
    dispatch({
      type: ACTIVEID,
      payload: value,
    });
  };
};
export const setDisplayFlag = (value) => {
  return (dispatch) => {
    dispatch({
      type: DISPLAYFLAG,
      payload: value,
    });
  };
};

// Setting page number for pagination

export const setCurrentPage= (value) => {
  return (dispatch) => {
    dispatch({
      type: CURRENT_PAGE,
      payload: value,
    });
  };
};

