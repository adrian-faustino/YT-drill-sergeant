import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";
import VidPlayer from "./VidPlayer";

const VidContainer = () => {
  const vidSettings = useSelector((state: RootStateOrAny) => state.vidSettings);

  return (
    <div>
      <h3>from vid container</h3>
      <p>URL: {vidSettings.url}</p>
      {vidSettings.url && <VidPlayer />}
    </div>
  );
};

export default VidContainer;
