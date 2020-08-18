import { SET_LOOPS_AT_SPEED } from "../../constants/actionTypes";

export const setLoopsAtSpeed = (loops: Number, speed: Number) => {
  return { type: SET_LOOPS_AT_SPEED, payload: { speed, loops } };
};
