import React, { Component } from "react";

export default class LoginForm extends Component {
  render() {
    return (
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Username" size="large" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password placeholder="Password" size="large" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" size="large">
            Войти в аккаунт
          </Button>
        </Form.Item>
        <a className="auth__register-link" href="#">
          Зарегистрироваться
        </a>
      </Form>
    );
  }
}
