import { combineReducers } from "redux";
import sidebar from "./sidebarReducers";
import drillSettings from "./drillSettingsReducers";
import vidSettings from "./vidSettingsReducers";

const rootReducer = combineReducers({
  sidebar,
  drillSettings,
  vidSettings,
});

export default rootReducer;
