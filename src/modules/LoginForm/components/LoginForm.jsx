import React, { Component } from "react";
import { Form, Icon, Input } from "antd";
import { Link } from "react-router-dom";
import { Button } from "components";

export default class LoginForm extends Component {
  render() {
    return (
      <Form className="login-form" name="basic">
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: "rgba(0,0,0,0.25)" }} />}
            placeholder="Username"
            size="large"
          />
        </Form.Item>

        <Form.Item>
          <Input.Password
            prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,0.25)" }} />}
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
    );
  }
}
