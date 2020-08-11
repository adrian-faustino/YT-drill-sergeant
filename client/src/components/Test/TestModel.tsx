import React from "react";
/* View */
import View from "./TestView";
/* Controller */
import { Controller } from "./TestController";

const TestModel = () => {
  return (
    <div>
      test component
      <button onClick={Controller.toggleVidSearch}>toggle vid search</button>
    </div>
  );
};

export default TestModel;
