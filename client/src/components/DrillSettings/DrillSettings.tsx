import React from "react";
import SettingsInputs from "./SettingsInputs";
import "./DrillSettings.css";
import controller from "./DrillSettingsController";

const DrillSettings = () => {
  return (
    <div>
      <SettingsInputs />

      {/* Starts drill session */}
      <button onClick={controller.handleStartSession}>start session</button>
    </div>
  );
};

export default DrillSettings;
