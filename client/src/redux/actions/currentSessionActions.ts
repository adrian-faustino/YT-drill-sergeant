import {
  SET_IS_IN_SESSION,
  TOGGLE_IS_IN_SESSION,
  INCREMENT_LOOP_COUNT,
} from "../../constants/actionTypes";

export const setIsInSession = (bool: Boolean) => {
  return { type: SET_IS_IN_SESSION, payload: bool };
};

export const toggleIsInSession = () => {
  return { type: TOGGLE_IS_IN_SESSION };
};

export const incrementLoopCount = (amount: Number) => {
  return { type: INCREMENT_LOOP_COUNT, payload: amount };
};
