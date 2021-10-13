import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import { WithRouter } from "react-router";

import { LoginForm, RegistrationForm } from "modules";
import CheckInfo from "./components/CheckEmailInfo";

import "./Auth.scss";

const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <Route exact path="/signin" component={LoginForm} />
      <Route path="/signup" component={RegistrationForm} />
      <Route path="/signup/verify" component={CheckEmailInfo} />
    </div>
  </section>
);

export default Auth;
