import React from "react";
import { Route } from "react-router-dom";
import { LoginForm } from "modules";
import "./Auth.scss";

const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <Route exact path="/" component={LoginForm} />
      {/* <Route path="/registration" component={RegistrationForm} /> */}
    </div>
  </section>
);

export default Auth;
