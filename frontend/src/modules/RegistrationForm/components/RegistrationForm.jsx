import React from "react";
import { Form } from "antd";
import { Link } from "react-router-dom";

import { Button, Block, FormField } from "components";

import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

const sucsess = false;

const RegistrationForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
    isValid,
    isSubmitting,
    type,
  } = props;
  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!sucsess ? (
          <Form className="login-form" onSubmit={handleSubmit}>
            <FormField
              name="e-mail"
              prefix={<MailOutlined className="site-form-item-icon" />}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder="e-mail"
              values={values}
            />

            <FormField
              name="full_name"
              prefix={<UserOutlined className="site-form-item-icon" />}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder="Ваше имя"
              values={values}
            />

            <FormField
              name="password"
              prefix={<LockOutlined className="site-form-item-icon" />}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder="Пароль"
              values={values}
              type="password"
            />

            <FormField
              name="password_2"
              prefix={<LockOutlined className="site-form-item-icon" />}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              placeholder="Повторите пароль"
              values={values}
              type="password"
            />

            <Form.Item>
              {isSubmitting && !isValid && <span>Ошибка!</span>}
              <Button
                disabled={isSubmitting}
                onClick={handleSubmit}
                type="primary"
                size="large"
              >
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

export default RegistrationForm;
