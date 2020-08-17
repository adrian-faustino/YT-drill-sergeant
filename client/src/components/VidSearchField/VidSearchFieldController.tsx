import { store } from "../../redux/store";
import {
  setCurrentURLInput,
  setURL,
} from "../../redux/actions/vidSettingsActions";

const VidSearchFieldController = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    store.dispatch(setCurrentURLInput(e.target.value));
  };

  const handleSubmitVidURL = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Note: if we use vidSettings.current_url_input we get a type "never" error... no idea why
    const url = store.getState().vidSettings["current_url_input"];

    if (url) {
      console.log("Setting session URL to:", url);
      store.dispatch(setURL(url));
    }
  };

  return { handleInputChange, handleSubmitVidURL };
};

export const controller = VidSearchFieldController();
