import { SET_LOOPS_AT_SPEED } from "../../constants/actionTypes";

interface LoopObj {
  speed: Number;
  loops: Number;
}

interface DrillSettingsState {
  0.25: LoopObj;
  0.5: LoopObj;
  0.75: LoopObj;
  1: LoopObj;
  1.25: LoopObj;
  1.5: LoopObj;
  1.75: LoopObj;
  2: LoopObj;
}

const initialState = {
  0.25: { speed: 0.25, loops: 1 },
  0.5: { speed: 0.5, loops: 1 },
  0.75: { speed: 0.75, loops: 1 },
  1: { speed: 1, loops: 1 },
  1.25: { speed: 1.25, loops: 1 },
  1.5: { speed: 1.5, loops: 1 },
  1.75: { speed: 1.75, loops: 1 },
  2: { speed: 2, loops: 1 },
};

const drillSettingsReducers = (
  state: DrillSettingsState = initialState,
  action: any
) => {
  switch (action.type) {
    case SET_LOOPS_AT_SPEED:
      // update the number of loops at this speed
      return { ...state, [action.payload.speed]: action.payload };
    default:
      return state;
  }
};

export default drillSettingsReducers;
