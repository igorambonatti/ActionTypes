import React from "react";

import Routes from "./routes/index";

import { Provider } from "react-redux";
import { Router } from "react-router-dom";

import store from "./store/index";
import history from "./history";

function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}

export default App;
