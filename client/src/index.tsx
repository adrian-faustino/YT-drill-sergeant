import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

/* Redux */
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
