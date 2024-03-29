import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "redux/store";
import { userActions } from "redux/actions";

import App from "./App";
import "./styles/index.scss";
import "emoji-mart/css/emoji-mart.css";

store.dispatch(userActions.fetchUserData());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
