import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";
import { Button as BaseButton } from "antd";
import "./Button.scss";

export default function Button(props) {
  return (
    <BaseButton
      className={classNames("button", props.className)}
      {...props}
    ></BaseButton>
  );
}

Button.propTypes = {
  className: propTypes.string,
};
