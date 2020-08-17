import { store } from "../../redux/store";
import { setPlaybackSpeed } from "../../redux/actions/vidSettingsActions";

const VidController = () => {
  const handlePlaybackSpeedChange = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const speed = parseFloat(e.currentTarget.innerHTML);
    console.log("Setting speed:", speed);
    store.dispatch(setPlaybackSpeed(speed));
  };

  return {
    handlePlaybackSpeedChange,
  };
};

const controller = VidController();
export default controller;
