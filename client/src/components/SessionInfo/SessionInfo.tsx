import React from "react";
import controller from "./SessionInfoController";
import { useSelector, RootStateOrAny } from "react-redux";

const SessionInfo = () => {
  const store = useSelector((state: RootStateOrAny) => state);

  const { currentSpeed, currentLoopCount } = store.currentSession;
  const drillSettings = store.drillSettings;

  const currentLoopMax = drillSettings[currentSpeed].loops;

  return (
    <div>
      <h3>Drill mode:</h3>
      <p>Current speed: {currentSpeed}</p>
      <p>
        Loop: {currentLoopCount} of {currentLoopMax}
      </p>
      <p></p>
      <p></p>
    </div>
  );
};

export default SessionInfo;
