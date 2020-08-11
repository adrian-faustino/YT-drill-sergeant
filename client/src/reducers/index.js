import { combineReducers } from "redux";
import sidebar from "./sidebarReducers";

const rootReducer = combineReducers({
  sidebar,
});

export default rootReducer;
