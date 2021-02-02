import React from "react";
import { Form, Input } from "antd";
import { Button, Block } from "components";
import "./Auth.scss";

const Auth = () => {
  return (
    <section className="auth">
      <div className="auth__content">
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block></Block>
      </div>
    </section>
  );
};

export default Auth;
