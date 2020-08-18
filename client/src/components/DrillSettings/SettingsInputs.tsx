import React from "react";
import { PLAYBACK_SPEEDS } from "../../constants/appConfig";
import { useSelector, RootStateOrAny } from "react-redux";
import controller from "./DrillSettingsController";

const SettingsInputs = () => {
  /* State */

  const drillSettings = useSelector(
    (state: RootStateOrAny) => state.drillSettings
  );

  return (
    <div className="DrillSettings__inputs-container">
      {/* spread playback speeds to input how many times to loop at each speed */}
      {PLAYBACK_SPEEDS.map((speed) => (
        <div
          key={`${speed}-input`}
          className="DrillSettings__input-label-group"
        >
          <label>{speed}</label>
          <input
            name={speed.toString()}
            type="Number"
            onChange={controller.handleInputChange}
            value={drillSettings[speed.toString()].loops}
          />
          <span>times</span>
        </div>
      ))}
    </div>
  );
};

export default SettingsInputs;
