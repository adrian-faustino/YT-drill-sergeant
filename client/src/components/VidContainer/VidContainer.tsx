import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import VidPlayer from "./VidPlayer";
/* Controller */
import controller from "./VidController";

const VidContainer = () => {
  const vidSettings = useSelector((state: RootStateOrAny) => state.vidSettings);

  // todo validate url and then show player ?

  return (
    <div>
      <h3>from vid container</h3>
      <p>URL: {vidSettings.url}</p>
      {vidSettings.url && <VidPlayer />}

      <button onClick={controller.handlePlaybackSpeedChange}>0.5</button>
    </div>
  );
};

export default VidContainer;
