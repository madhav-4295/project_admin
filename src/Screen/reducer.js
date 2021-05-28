import { act } from "react-dom/test-utils";
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

const initial_state = {
  data: {},
  courseOptions: [],
  error_message: "",
  success_message:"",
  subject: "",
  activeId: 0,
  displayFlag: false,
  studentPerPage:2,
  currentPage:1
  
};

const adminReducer = (state = initial_state, action) => {
//   console.log("redux-file", action.payload);
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
      case SUCCESS_MESSAGE:
      return {
        ...state,
        success_message: action.payload,
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

    case CURRENT_PAGE:
      return{
        ...state,
        currentPage: action.payload
      }

    default:
      return {
        ...state,
      };
  }
};

export default adminReducer;
