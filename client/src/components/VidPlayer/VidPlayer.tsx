import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";

const VidPlayer = () => {
  const vidSettings = useSelector((state: RootStateOrAny) => state.vidSettings);

  return (
    <div>
      <h3>from vid player</h3>
      <p>URL: {vidSettings.url}</p>
    </div>
  );
};

export default VidPlayer;
