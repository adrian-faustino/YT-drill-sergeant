import React from "react";
import { useSelector, RootStateOrAny } from "react-redux";

const VidPlayer = () => {
  const vidSettings = useSelector((state: RootStateOrAny) => state.vidSettings);

  // return regular YT URL to embed url
  const getEmbedURL = (url: String): string => {
    const [baseURL, vidID] = url.split("watch?v=");
    console.log(baseURL + "embed/" + vidID);
    return baseURL + "embed/" + vidID;
  };

  const embedURL = getEmbedURL(vidSettings.url);

  return (
    <div>
      <h3>from vidplayer</h3>
      <p>URL: {vidSettings.url}</p>
      <iframe src={embedURL}></iframe>
    </div>
  );
};

export default VidPlayer;
