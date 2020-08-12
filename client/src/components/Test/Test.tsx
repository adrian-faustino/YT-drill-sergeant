import React, { useEffect } from "react";
/* View */
import { View } from "./TestView";
/* Controller */
import { Controller } from "./TestController";
import { useSelector, RootStateOrAny } from "react-redux";

const Test = () => {
  const store = useSelector((state: RootStateOrAny) => state);
  const { vidSettings } = store;

  useEffect(() => {
    console.log("Test.tsx mounting...");
  }, [vidSettings.url]);

  return (
    <div>
      test component
      <button onClick={Controller.handleToggleVidSearch}>
        toggle vid search
      </button>
      <div>URL: {vidSettings.url}</div>
    </div>
  );
};

export default Test;
