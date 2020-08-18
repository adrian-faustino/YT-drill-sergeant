import { combineReducers } from "redux";
import sidebar from "./sidebarReducers";
import vidSettings from "./vidSettingsReducers";

const rootReducer = combineReducers({
  sidebar,
  vidSettings,
});

export default rootReducer;
