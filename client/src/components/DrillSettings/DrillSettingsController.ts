import { store } from "../../redux/store";
import { setLoopsAtSpeed } from "../../redux/actions/drillSettingsActions";

const DrillSettingsController = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    const loops = parseInt(value);
    const speed = parseFloat(name);

    console.log(
      `Updating drill setting for speed ${speed} to ${loops} time(s).`
    );
    store.dispatch(setLoopsAtSpeed(loops, speed));
  };

  const handleStartSession = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // set "isInSession" to true (if isInSession is true, vidPlayer will track and update current loop count)

    // bring current video back to start of loop

    // STRETCH: trigger countdown to prepare user to dance/play with video
  };

  return { handleInputChange, handleStartSession };
};

const controller = DrillSettingsController();
export default controller;
