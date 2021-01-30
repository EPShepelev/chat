import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";
import { Button as BaseButton } from "antd";
import "./Button.scss";

export default function Button(props) {
  return (
    <BaseButton
      {...props}
      className={
        (classNames("button", props.className),
        { "button--large": props.size === "large" })
      }
    ></BaseButton>
  );
}

Button.propTypes = {
  className: propTypes.string,
};
