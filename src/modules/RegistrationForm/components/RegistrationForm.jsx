import React from "react";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Block } from "components";

const RegistrationForm = () => {
  return (
    <div>
      <div className="auth__top">
        <RegistrationForm />
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form className="login-form" name="basic">
          <Form.Item>
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
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
};

export default RegistrationForm;
