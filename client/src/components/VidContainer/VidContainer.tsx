import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import VidPlayer from "./VidPlayer";
/* Constants */
import { PLAYBACK_SPEEDS } from "../../constants/appConfig";
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

      {/* Playback speed buttons */}
      {PLAYBACK_SPEEDS.map((speed) => (
        <button onClick={controller.handlePlaybackSpeedChange}>{speed}</button>
      ))}
    </div>
  );
};

export default VidContainer;
