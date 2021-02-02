import React from "react";
import { LoginForm } from "modules";
import "./Auth.scss";

const Auth = () => (
  <section className="auth">
    <div className="auth__content">
      <LoginForm />
    </div>
  </section>
);

export default Auth;
