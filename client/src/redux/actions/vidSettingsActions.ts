import {
  SET_CURRENT_URL_INPUT,
  SET_URL,
  SET_PLAYBACK_SPEED,
  SET_LOOP_START,
  SET_LOOP_END,
} from "../../constants/actionTypes";

export const setCurrentURLInput = (url: String) => {
  return {
    type: SET_CURRENT_URL_INPUT,
    payload: url,
  };
};

export const setURL = (url: String) => {
  return { type: SET_URL, payload: url };
};

export const setPlaybackSpeed = (speed: Number) => {
  return { type: SET_PLAYBACK_SPEED, payload: speed };
};

export const setLoopStart = (seconds: Number) => {
  return { type: SET_LOOP_START, payload: seconds };
};

export const setLoopEnd = (seconds: Number) => {
  return { type: SET_LOOP_END, payload: seconds };
};
