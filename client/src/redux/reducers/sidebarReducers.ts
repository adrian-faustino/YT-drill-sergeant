import {
  TOGGLE_VID_SEARCH,
  TOGGLE_MODE_SETTINGS,
  ts_ToggleBool,
} from "../../constants/actionTypes";

interface SidebarState {
  vidSearchToggled: boolean;
  modeSettingsToggled: boolean;
}

const initialState = {
  vidSearchToggled: false,
  modeSettingsToggled: false,
};

const sidebarReducers = (
  state: SidebarState = initialState,
  action: ts_ToggleBool
) => {
  switch (action.type) {
    case TOGGLE_VID_SEARCH:
      return { ...state, vidSearchToggled: !state.vidSearchToggled };
    default:
      return state;
  }
};

export default sidebarReducers;
