import React from "react";
import { Form, Input } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import { validateField } from "utils/helpers";

const FormField = ({
  name,
  placeholder,
  prefix,
  handleChange,
  handleBlur,
  touched,
  errors,
  values,
}) => {
  return (
    <Form.Item
      validateStatus={validateField(name, touched, errors)}
      hasFeedback
      help={!touched[name] ? "" : errors[name]}
    >
      <Input
        id={name}
        prefix={<MailOutlined className="site-form-item-icon" />}
        placeholder={placeholder}
        size="large"
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
      />
    </Form.Item>
  );
};

export default FormField;
