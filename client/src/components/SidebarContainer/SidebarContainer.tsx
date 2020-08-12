import React from "react";
/* Styles */
import "./SidebarContainer.css";
/* Components */
import { VidSearchField } from "../";
import { controller } from "./SidebarContainerController";
import { useSelector, RootStateOrAny } from "react-redux";

const SidebarContainer = () => {
  const store = useSelector((state: RootStateOrAny) => state);
  return (
    <div className="SidebarContainer">
      <h1>sidebar container</h1>

      <button onClick={controller.handleToggleSearchField}>
        toggle search
      </button>
      {store.sidebar.vidSearchToggled && <VidSearchField />}

      <button onClick={controller.handleToggleMode}>toggle mode</button>
    </div>
  );
};

export default SidebarContainer;
