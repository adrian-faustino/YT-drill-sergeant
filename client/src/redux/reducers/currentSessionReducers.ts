import {
  SET_IS_IN_SESSION,
  TOGGLE_IS_IN_SESSION,
} from "../../constants/actionTypes";

interface CurrentSessionState {
  isInSession: Boolean;
}

const initialState = {
  isInSession: false,
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
