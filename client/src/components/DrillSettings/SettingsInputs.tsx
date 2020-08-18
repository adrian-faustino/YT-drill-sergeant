import React from "react";
import { PLAYBACK_SPEEDS } from "../../constants/appConfig";

const SettingsInputs = () => {
  return (
    <div className="DrillSettings__inputs-container">
      {/* spread playback speeds to input how many times to loop at each speed */}
      {PLAYBACK_SPEEDS.map((speed) => (
        <div className="DrillSettings__input-label-group">
          <label>{speed}</label>
          <input />
          <span>times</span>
        </div>
      ))}
    </div>
  );
};

export default SettingsInputs;
