import { store } from "../../redux/store";
import { toggleVidSearch } from "../../redux/actions/sidebarActions";

const SidebarContainerController = () => {
  const handleToggleSearchField = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    store.dispatch(toggleVidSearch());
  };
  return { handleToggleSearchField };
};

export default SidebarContainerController;
