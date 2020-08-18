import {
  SET_URL,
  SET_CURRENT_URL_INPUT,
  SET_PLAYBACK_SPEED,
  SET_LOOP_START,
  SET_LOOP_END,
  ts_InputChange,
} from "../../constants/actionTypes";

interface VidSettingsState {
  current_url_input: String;
  url: String;
  playbackSpeed: Number;
  loop_start: Number;
  loop_end: Number;
}

interface VidSettingsTypes {
  type: String;
  payload?: String | Number;
}

const initialState = {
  current_url_input: "",
  url: "https://www.youtube.com/watch?v=0b_L1CzZTwI",
  playbackSpeed: 1,
  loop_start: 2,
  loop_end: 4,
};

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
    case SET_LOOP_START:
      return { ...state, loop_start: action.payload };
    case SET_LOOP_END:
      return { ...state, loop_end: action.payload };
    default:
      return state;
  }
};

export default vidSettingsReducers;
