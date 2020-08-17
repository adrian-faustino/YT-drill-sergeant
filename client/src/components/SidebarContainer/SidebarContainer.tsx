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
      {/* Controls */}
      <div className="SidebarContainer__btns-container">
        <button onClick={controller.handleToggleSearchField}>
          toggle search
        </button>
        <button onClick={controller.handleToggleMode}>toggle mode</button>
      </div>

      {/* Toggle to open components */}
      {store.sidebar.vidSearchToggled && <VidSearchField />}
    </div>
  );
};

export default SidebarContainer;
