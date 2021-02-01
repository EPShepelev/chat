import React from "react";
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
        <Block>
          <Button type="primary" size="large">
            Click
          </Button>
        </Block>
      </div>
    </section>
  );
};

export default Auth;
