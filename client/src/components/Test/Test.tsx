import React from "react";
/* View */
import { View } from "./TestView";
/* Controller */
import { Controller } from "./TestController";

const Test = () => {
  return (
    <div>
      test component
      <button onClick={Controller.handleToggleVidSearch}>
        toggle vid search
      </button>
    </div>
  );
};

export default Test;
