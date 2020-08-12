import { SET_CURRENT_URL_INPUT } from "../../constants/actionTypes";

export const setCurrentURLInput = (url: String) => {
  return {
    type: SET_CURRENT_URL_INPUT,
    payload: url,
  };
};
