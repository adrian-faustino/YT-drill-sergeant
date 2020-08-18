import {
  SET_IS_IN_SESSION,
  TOGGLE_IS_IN_SESSION,
} from "../../constants/actionTypes";

export const setIsInSession = (bool: Boolean) => {
  return { type: SET_IS_IN_SESSION, payload: bool };
};

export const toggleIsInSession = () => {
  return { type: TOGGLE_IS_IN_SESSION };
};
