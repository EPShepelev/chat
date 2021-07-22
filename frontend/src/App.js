import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";

import { Auth, Home } from "pages";

const App = (props) => {
  const { isAuth } = props;
  return (
    <div className="wrapper">
      <Route exact path={["/login", "/registration"]} component={Auth} />

      <Route
        exact
        path="/"
        render={() => {
          {
            isAuth ? <Home /> : <Redirect to="/login" />;
          }
        }}
      />
    </div>
  );
};
export default connect(({ user }) => ({ isAuth: user.isAuth }))(App);
