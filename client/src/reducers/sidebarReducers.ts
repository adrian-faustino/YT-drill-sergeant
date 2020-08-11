import { TOGGLE_VID_SEARCH, TOGGLE_MODE_SETTINGS } from "../constants/types";

const initialState = {
  vidSearchToggled: false,
  modeSettingsTOggled: false,
};

const sidebarReducers = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_VID_SEARCH:
      return { ...state, vidSearchToggled: !state.vidSearchToggled };
    default:
      return state;
  }
};
