import React from "react";
import { Form, Input } from "antd";

import { validateField } from "utils/helpers";

const FormField = ({ name, placeholder, icon, touched, errors, values }) => {
  return (
    <Form.Item
      validateStatus={validateField("email", touched, errors)}
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
  );
};

export default FormField;
