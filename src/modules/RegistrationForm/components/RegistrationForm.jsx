import React from "react";
import { Form, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Block } from "components";

const RegistrationForm = () => {
  const sucsess = true;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!sucsess ? (
          <Form className="login-form" name="basic">
            <Form.Item>
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
                size="large"
              />
            </Form.Item>

            <Form.Item>
              <Input
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
        ) : (
          <div className="auth__sucsess-block">
            <div>
              <ExclamationCircleOutlined style={{ fontSize: "50px" }} />
            </div>
            <h3>Подтвердите свой аккаунт</h3>
            <p>
              На вашу почту отправлено письмо со ссылкой на подтверждение
              аккаунта.
            </p>
          </div>
        )}
      </Block>
    </div>
  );
};

export default RegistrationForm;
