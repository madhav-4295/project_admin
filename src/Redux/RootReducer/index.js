import { combineReducers } from "redux";
import adminReducer from "../../Screen/reducer";

const rootReducer = combineReducers({
  adminReducer: adminReducer,
});
export default rootReducer;
