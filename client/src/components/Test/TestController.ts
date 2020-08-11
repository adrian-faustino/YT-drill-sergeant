import { store } from "../../redux/store";
import { toggleVidSearch } from "../../redux/actions/sidebarActions";

const TestController = () => {
  const handleToggleVidSearch = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.preventDefault();
    store.dispatch(toggleVidSearch());
  };

  return { handleToggleVidSearch };
};

export const Controller = TestController();
