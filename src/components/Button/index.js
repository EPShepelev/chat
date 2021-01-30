import React from "react";
import { Button as BaseButton } from "antd";
import "./Button.scss";

export default function Button({ children }) {
  return <BaseButton>{children}</BaseButton>;
}
