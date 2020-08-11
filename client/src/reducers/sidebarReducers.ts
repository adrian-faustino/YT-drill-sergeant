import {
  TOGGLE_VID_SEARCH,
  TOGGLE_MODE_SETTINGS,
} from "../constants/actionTypes";

interface sidebarState {
  vidSearchToggled: boolean;
  modeSettingsToggled: boolean;
}

const initialState = {
  vidSearchToggled: false,
  modeSettingsToggled: false,
};

type ToggleVidSearch = { type: String; payload?: boolean };

const sidebarReducers = (state = initialState, action: ToggleVidSearch) => {
  switch (action.type) {
    case TOGGLE_VID_SEARCH:
      return { ...state, vidSearchToggled: !state.vidSearchToggled };
    default:
      return state;
  }
};

export default sidebarReducers;
