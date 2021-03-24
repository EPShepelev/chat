import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

import "./ChatInput.scss";

const ChatInput = () => (
  <div className="chat-input">
    <div className="chat-input__smile-btn">
      <SmileOutlined />
    </div>
    <Input size="large" placeholder="Поиск среди контактов" />
    <div className="chat-input__actions">
      <CameraOutlined />
      <AudioOutlined />
      <SendOutlined />
    </div>
  </div>
);

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;
