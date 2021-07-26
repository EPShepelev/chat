import React from "react";
import { Form, Input } from "antd";

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
  type,
}) => {
  return (
    <Form.Item
      validateStatus={validateField(name, touched, errors)}
      hasFeedback
      help={!touched[name] ? "" : errors[name]}
    >
      <Input
        id={name}
        prefix={prefix}
        placeholder={placeholder}
        size="large"
        value={values[name]}
        onChange={handleChange}
        onBlur={handleBlur}
        type={type}
      />
    </Form.Item>
  );
};

export default FormField;
