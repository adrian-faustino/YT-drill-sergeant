import React from "react";
/* Styles */
import "./SidebarContainer.css";
/* Components */
import { VidSearchField, DrillSettings } from "../";
import { controller } from "./SidebarContainerController";
import { useSelector, RootStateOrAny } from "react-redux";

const SidebarContainer = () => {
  const store = useSelector((state: RootStateOrAny) => state);
  return (
    <div className="SidebarContainer">
      {/* Controls */}
      <div className="SidebarContainer__btns-container">
        <button onClick={controller.handleToggleSearchField}>
          toggle search
        </button>
        <button onClick={controller.handleToggleMode}>toggle mode</button>
      </div>

      {/* Components that are toggled by the controllers above */}
      {store.sidebar.vidSearchToggled && <VidSearchField />}
      {store.sidebar.modeSettingsToggled && <DrillSettings />}
    </div>
  );
};

export default SidebarContainer;
