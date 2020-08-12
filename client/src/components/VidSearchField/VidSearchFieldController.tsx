import { store } from "../../redux/store";
import { setCurrentURLInput } from "../../redux/actions/vidSettingsActions";

const VidSearchFieldController = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(setCurrentURLInput(e.target.value));
  };

  const handleSubmitVidURL = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitting");
  };

  return { handleInputChange, handleSubmitVidURL };
};

export const controller = VidSearchFieldController();
