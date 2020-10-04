import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import TestStore from "stores/TestStore";
import { ThemeProvider } from "styled-components";
import theme from "lib/styles/theme";
import GlobalStyle from "lib/styles/globalStyle";
import { RecoilRoot } from "recoil";

const testStore = new TestStore();

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <Provider testStore={testStore}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </Provider>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
