import { combineReducers } from "redux";
import tasks from "./tasks";

const rootReducer = combineReducers({
  state: tasks,
});

export default rootReducer;
