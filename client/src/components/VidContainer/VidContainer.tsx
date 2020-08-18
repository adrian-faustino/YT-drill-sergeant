import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import VidPlayer from "./VidPlayer";
/* Constants */
import { PLAYBACK_SPEEDS } from "../../constants/appConfig";
/* Controller */
import controller from "./VidController";
/* Styles */
import "./VidContainer.css";

const VidContainer = () => {
  const vidSettings = useSelector((state: RootStateOrAny) => state.vidSettings);

  // todo validate url and then show player ?

  return (
    <div>
      {vidSettings.url && <VidPlayer />}

      {/* Playback speed buttons */}
      {vidSettings.url &&
        PLAYBACK_SPEEDS.map((speed) => (
          <button
            key={`${speed}-btn`}
            onClick={controller.handlePlaybackSpeedChange}
          >
            {speed}
          </button>
        ))}

      {/* Loop start and end input */}
      <form onSubmit={controller.handleSubmit}>
        <input
          type="number"
          value={vidSettings.loop_start}
          onChange={controller.handleLoopStart}
          placeholder="start"
        />
        <input
          type="number"
          value={vidSettings.loop_end}
          onChange={controller.handleLoopEnd}
          placeholder="end"
        />
        <button type="submit">set</button>
      </form>
    </div>
  );
};

export default VidContainer;
