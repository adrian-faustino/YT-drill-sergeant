import React from "react";
import ReactPlayer from "react-player";
import { useSelector, RootStateOrAny } from "react-redux";
import controller from "./VidController";

const VidPlayer = () => {
  const vidSettings = useSelector((state: RootStateOrAny) => state.vidSettings);

  return (
    <div className="VidContainer__player">
      <ReactPlayer
        url={vidSettings.url}
        playbackRate={vidSettings.playbackSpeed}
        controls
        playing
        loop
        onBuffer={controller.handleLoopComplete}
      />
    </div>
  );
};

export default VidPlayer;
