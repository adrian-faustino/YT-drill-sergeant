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

  return { handleInputChange };
};

const controller = DrillSettingsController();
export default controller;
