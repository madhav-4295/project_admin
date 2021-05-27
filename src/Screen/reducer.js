import {
  STUDENT_LIST,
  COURSE_LIST,
  ERROR_MESSAGE,
  SUBJECT,
  ACTIVEID,
  DISPLAYFLAG,
} from "../../src/Redux/ActionTypes";

const initial_state = {
  data: {},
  courseOptions: [],
  error_message: "",
  subject: "",
  activeId: 0,
  displayFlag: false,
};

const adminReducer = (state = initial_state, action) => {
  console.log("redux-file", action.payload);
  switch (action.type) {
    case STUDENT_LIST:
      return {
        ...state,
        data: action.payload,
      };
    case COURSE_LIST:
      return {
        ...state,
        courseList: action.payload,
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        error_message: action.payload,
      };
    case SUBJECT:
      return {
        ...state,
        subject: action.payload,
      };
    case ACTIVEID:
      return {
        ...state,
        activeId: action.payload,
      };
    case DISPLAYFLAG:
      return {
        ...state,
        displayFlag: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default adminReducer;
