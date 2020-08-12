// general types for actions/reducers
export type ts_InputChange = { type: String; payload: String };
export type ts_ToggleBool = { type: String; payload?: Boolean };

// sidebarReducers.ts
export const TOGGLE_VID_SEARCH: String = "TOGGLE_VID_SEARCH";
export const TOGGLE_MODE_SETTINGS: String = "TOGGLE_MODE_SETTINGS";

// vidSettingsReducers.ts
export const SET_CURRENT_URL_INPUT: String = "SET_CURRENT_URL_INPUT";
export const SET_URL: String = "SET_URL";
