import React from "react";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Block } from "components";

const RegistrationForm = () => {
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        <Form className="login-form" name="basic">
          <Form.Item>
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="E-mail"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Input.Password
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Ваше имя"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Пароль"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Повторите пароль"
              size="large"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" size="large">
              Зарегистрироваться
            </Button>
          </Form.Item>
          <Link className="auth__register-link" to="/login">
            Войти в аккаунт
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default RegistrationForm;
