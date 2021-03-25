import React, { useState } from "react";
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

const ChatInput = () => {
  const [value, setValue] = useState("");
  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <SmileOutlined />
      </div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        size="large"
        placeholder="Введите сообщение"
      />
      <div className="chat-input__actions">
        <CameraOutlined />
        {value ? <SendOutlined /> : <AudioOutlined />}
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;
