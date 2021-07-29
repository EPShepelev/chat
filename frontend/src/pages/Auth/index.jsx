import React from "react";
import { Route } from "react-router-dom";

import { LoginForm, RegistrationForm } from "modules";
import CheckInfo from "./components/Checkinfo";

import "./Auth.scss";

const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <Route exact path="/singin" component={LoginForm} />
      <Route path="/singup" component={RegistrationForm} />
      <Route path="/singup/check" component={CheckInfo} />
    </div>
  </section>
);

export default Auth;
