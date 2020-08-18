import { combineReducers } from "redux";
import sidebar from "./sidebarReducers";
import drillSettings from "./drillSettingsReducers";
import vidSettings from "./vidSettingsReducers";
import currentSession from "./currentSessionReducers";

const rootReducer = combineReducers({
  sidebar,
  drillSettings,
  vidSettings,
  currentSession,
});

export default rootReducer;
