// general types for actions/reducers
export type ts_InputChange = { type: String; payload: String };
export type ts_ToggleBool = { type: String; payload?: Boolean };

// sidebarReducers.ts
export const TOGGLE_VID_SEARCH: String = "TOGGLE_VID_SEARCH";
export const TOGGLE_MODE_SETTINGS: String = "TOGGLE_MODE_SETTINGS";

// vidSettingsReducers.ts
export const SET_CURRENT_URL_INPUT: String = "SET_CURRENT_URL_INPUT";
export const SET_URL: String = "SET_URL";
export const SET_PLAYBACK_SPEED: String = "SET_PLAYBACK_SPEED";
export const SET_LOOP_START: String = "SET_LOOP_START";
export const SET_LOOP_END: String = "SET_LOOP_END";

// drillSettingsReducers.ts
export const SET_LOOPS_AT_SPEED: String = "SET_LOOPS_AT_SPEED";

// currentSessionReducers.ts
export const SET_IS_IN_SESSION: String = "SET_IS_IN_SESSION";
export const TOGGLE_IS_IN_SESSION: String = "TOGGLE_IS_IN_SESSION";
export const INCREMENT_LOOP_COUNT: String = "INCREMENT_LOOP_COUNT";
