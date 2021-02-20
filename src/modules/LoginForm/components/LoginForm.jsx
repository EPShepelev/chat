import React from "react";
import { Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Block } from "components";

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block><Form className="login-form" onSubmit={handleSubmit}>
            <Form.Item
              validateStatus={
                !touched.email ? "" : errors.email ? "error" : "success"
              }
              hasFeedback
              help={!touched.email ? "" : errors.email}
            >
              <Input
                id="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-mail"
                size="large"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>

            <Form.Item
              validateStatus={
                !touched.password ? "" : errors.password ? "error" : "success"
              }
              hasFeedback
              help={!touched.password ? "" : errors.password}
            >
              <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Пароль"
                size="large"
                id="password"
                type="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
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
              {isSubmitting && !isValid && <span>Ошибка!</span>}
              <Button onClick={handleSubmit} type="primary" size="large">
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/login">
              Войти в аккаунт
            </Link>
          </Form>
        {!sucsess ? (
          
        ) : (
          <div className="auth__sucsess-block">
            <div>
              <ExclamationCircleOutlined style={{ fontSize: "50px" }} />
            </div>
            <h2>Подтвердите свой аккаунт</h2>
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

export default LoginForm;
