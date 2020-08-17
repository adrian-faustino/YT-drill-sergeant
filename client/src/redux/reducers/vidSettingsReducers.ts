import {
  SET_URL,
  SET_CURRENT_URL_INPUT,
  SET_PLAYBACK_SPEED,
  ts_InputChange,
} from "../../constants/actionTypes";

interface VidSettingsState {
  current_url_input: String;
  url: String;
  playbackSpeed: Number;
}

const initialState = {
  current_url_input: "",
  url: "",
  playbackSpeed: 25,
};

interface VidSettingsTypes {
  type: String;
  payload?: String | Number;
}

const vidSettingsReducers = (
  state: VidSettingsState = initialState,
  action: VidSettingsTypes
) => {
  switch (action.type) {
    case SET_CURRENT_URL_INPUT:
      return { ...state, current_url_input: action.payload };
    case SET_URL:
      return { ...state, url: action.payload };
    case SET_PLAYBACK_SPEED:
      return { ...state, playbackSpeed: action.payload };
    default:
      return state;
  }
};

export default vidSettingsReducers;
