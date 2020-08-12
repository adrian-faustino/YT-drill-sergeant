import {
  SET_CURRENT_URL_INPUT,
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

const vidSettingsReducers = (
  state: VidSettingsState = initialState,
  action: ts_InputChange
) => {
  switch (action.type) {
    case SET_CURRENT_URL_INPUT:
  }
};
