import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/* Redux */
import { createStore } from "redux";
import rootReducer from "./reducers";
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
