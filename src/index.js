import React from "react";
import { render } from "react-dom";

import { Provider } from "redux-zero/react";
import store from "./store";

import App from "./App";

const Boot = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

render(<Boot />, document.getElementById("root"));
