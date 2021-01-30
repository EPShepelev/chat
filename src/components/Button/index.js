import React from "react";
import propTypes from "prop-types";
import classNames from "classnames";
import { Button as BaseButton } from "antd";
import "./Button.scss";

export default function Button(props) {
  return (
    <BaseButton
      {...props}
      type="primary"
      className={classNames("button", props.className)}
    ></BaseButton>
  );
}

Button.propTypes = {
  className: propTypes.string,
};
