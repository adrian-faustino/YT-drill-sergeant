import { store } from "../../redux/store";
import { toggleVidSearch } from "../../redux/actions/sidebarActions";

const SidebarContainerController = () => {
  const handleToggleSearchField = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Toggled search container.");
    store.dispatch(toggleVidSearch());
  };

  const handleToggleMode = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Toggled mode container.");
  };

  return { handleToggleSearchField, handleToggleMode };
};

export const controller = SidebarContainerController();
