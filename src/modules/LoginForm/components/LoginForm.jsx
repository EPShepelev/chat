import React, { Component } from "react";
import { Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";
import { Button, Block } from "components";

export default class LoginForm extends Component {
  render() {
    return (
      <div>
        <div className="auth__top">
          <LoginForm />
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form className="login-form" name="basic">
            <Form.Item>
              <Input
                // prefix={
                //   <Icon type="user" style={{ color: "rgba(0,0,0,0.25)" }} />
                // }
                placeholder="Username"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Input.Password
                // prefix={
                //   <Icon type="lock" style={{ color: "rgba(0,0,0,0.25)" }} />
                // }
                placeholder="Password"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Button type="primary" size="large">
                Войти в аккаунт
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/registration">
              Зарегистрироваться
            </Link>
          </Form>
        </Block>
      </div>
    );
  }
}
