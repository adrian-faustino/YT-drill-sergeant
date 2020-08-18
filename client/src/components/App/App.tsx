import React from "react";
/* Styles */
import "./App.css";
/* Components */
import { Test, SidebarContainer, VidContainer, SessionInfo } from "..";
/* Redux */
import { useSelector, RootStateOrAny } from "react-redux";

function App() {
  const store = useSelector((state: RootStateOrAny) => state);

  return (
    <div className="App">
      {/* <Test /> */}
      <SidebarContainer />
      <VidContainer />

      {store.currentSession.isInSession && <SessionInfo />}
    </div>
  );
}

export default App;
