import {
  SET_IS_IN_SESSION,
  TOGGLE_IS_IN_SESSION,
} from "../../constants/actionTypes";

interface CurrentSessionState {
  isInSession: Boolean;
  currentSpeed: Number;
  currentLoopCount: Number;
}

const initialState = {
  isInSession: false,
  currentSpeed: 0.25,
  currentLoopCount: 1,
};

const currentSessionReducers = (
  state: CurrentSessionState = initialState,
  action: any
) => {
  switch (action.type) {
    case SET_IS_IN_SESSION:
      return { ...state, isInSession: action.payload };
    case TOGGLE_IS_IN_SESSION:
      return { ...state, isInSession: !state.isInSession };
    default:
      return state;
  }
};

export default currentSessionReducers;
