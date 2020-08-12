import React from "react";
/* Styles */
import "./SidebarContainer.css";
/* Components */
import { VidSearchField } from "../";

const SidebarContainer = () => {
  return (
    <div className="SidebarContainer">
      <h1>sidebar container</h1>
      <VidSearchField />
    </div>
  );
};

export default SidebarContainer;
