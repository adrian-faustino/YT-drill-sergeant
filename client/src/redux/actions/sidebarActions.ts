import {
  TOGGLE_VID_SEARCH,
  TOGGLE_MODE_SETTINGS,
} from "../../constants/actionTypes";

export const toggleVidSearch = () => {
  return { type: TOGGLE_VID_SEARCH };
};

export const toggleModeSettings = () => {
  return { type: TOGGLE_MODE_SETTINGS };
};
