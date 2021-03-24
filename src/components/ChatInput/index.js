import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./ChatInput.scss";

const ChatInput = (props) => (
  <div
    {...props}
    className={classNames("button", props.className, {
      "button--large": props.size === "large",
    })}
  />
);

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;
