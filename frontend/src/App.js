import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

import { Auth, Home } from "pages";

const App = () => {
  return (
    <div className="wrapper">
      <Route exact path={["/", "/login", "/registration"]} component={Auth} />
      <Route exact path="/im" component={Home} />
    </div>
  );
};

export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
