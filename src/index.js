import React from "react";
import { render } from "react-dom";
import "./index.css";
import { Provider } from "react-redux";
import App from "./components/App/App";
import configureStore from "./redux/configureStore";
import * as serviceWorker from "./serviceWorker";

const store = configureStore();

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("app-root")
  );

// if (process.env.NOTE_ENV !== "production" && module.hot) {
//   module.hot.accept("./components/App/App", renderApp);
// }
renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
