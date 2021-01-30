import React from "react";
import propTypes from "prop-types";
import { Button as BaseButton } from "antd";
import "./Button.scss";

export default function Button(props) {
  return <BaseButton className="button" {...props}></BaseButton>;
}

Button.propTypes = {
  className: propTypes.string,
};
