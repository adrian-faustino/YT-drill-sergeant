import React from "react";
import ReactPlayer from "react-player";
import { useSelector, RootStateOrAny } from "react-redux";

const VidPlayer = () => {
  const vidSettings = useSelector((state: RootStateOrAny) => state.vidSettings);

  const playerConfig = {
    youtube: {
      playerVars: {
        controls: 1,
        start: 3,
        end: 3,
      },
    },
  };

  return (
    <div className="VidContainer__player">
      <ReactPlayer
        url={vidSettings.url}
        playbackRate={vidSettings.playbackSpeed}
        config={playerConfig}
        playing
        loop
      />
    </div>
  );
};

export default VidPlayer;
