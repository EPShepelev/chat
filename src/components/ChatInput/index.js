import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { SmileOutlined } from "@ant-design/icons";
import { Input } from "antd";

import "./ChatInput.scss";

const ChatInput = () => (
  <div className="chat-input">
    <SmileOutlined />
    <Input.Search placeholder="Поиск среди контактов" />
  </div>
);

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;
