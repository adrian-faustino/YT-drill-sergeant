import { store } from "../../redux/store";
import {
  setPlaybackSpeed,
  setURL,
} from "../../redux/actions/vidSettingsActions";
import {
  setLoopStart,
  setLoopEnd,
} from "../../redux/actions/vidSettingsActions";

const VidController = () => {
  const handlePlaybackSpeedChange = (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const speed = parseFloat(e.currentTarget.innerHTML);
    store.dispatch(setPlaybackSpeed(speed));
  };

  const handleLoopStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seconds = parseInt(e.target.value);
    store.dispatch(setLoopStart(seconds));
  };

  const handleLoopEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seconds = parseInt(e.target.value);
    store.dispatch(setLoopEnd(seconds));
  };

  // set url start and end => ".com/urlID?start=START&end=END"
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const vidSettings = store.getState().vidSettings;
    // split with start in the case where loop start and end were set already
    const baseURL = new String(vidSettings["url"]).split("start")[0];
    const start = vidSettings["loop_start"];
    const end = vidSettings["loop_end"];
    const url = `${baseURL}?start=${start}&end=${end}`;

    console.log("Updating URL with time:", url);
    store.dispatch(setURL(url));
  };

  return {
    handlePlaybackSpeedChange,
    handleLoopStart,
    handleLoopEnd,
    handleSubmit,
  };
};

const controller = VidController();
export default controller;
