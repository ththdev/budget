import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import TestStore from "stores/TestStore";

const testStore = new TestStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider testStore={testStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
