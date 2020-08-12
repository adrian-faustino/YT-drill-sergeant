import { SET_CURRENT_URL_INPUT, SET_URL } from "../../constants/actionTypes";

export const setCurrentURLInput = (url: String) => {
  return {
    type: SET_CURRENT_URL_INPUT,
    payload: url,
  };
};

export const setURL = (url: String) => {
  return { type: SET_URL, payload: url };
};
