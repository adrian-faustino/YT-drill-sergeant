import React from "react";
import ReactPlayer from "react-player";
import { useSelector, RootStateOrAny } from "react-redux";

const VidPlayer = () => {
  const vidSettings = useSelector((state: RootStateOrAny) => state.vidSettings);

  console.log("rerendered again", vidSettings.playbackSpeed);

  return (
    <div>
      <h3>from vidplayer</h3>
      <p>URL: {vidSettings.url}</p>
      <ReactPlayer
        url={vidSettings.url}
        playbackRate={vidSettings.playbackSpeed}
      />
    </div>
  );
};

export default VidPlayer;
