import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";

import "./ChatInput.scss";

const ChatInput = () => {
  const [value, setValue] = useState("");
  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <Button type="link" shape="circle" icon={<SmileOutlined />} />
      </div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        size="large"
        placeholder="Введите сообщение"
      />
      <div className="chat-input__actions">
        <Button type="link" shape="circle" icon={<CameraOutlined />}/>
        
        <UploadField
    onFiles={files => //files object here}
    containerProps={{
      className: 'resume_import'
    }}
    uploadProps={{
      accept: '.pdf,.doc,.docx,.txt,.rtf',
    }}
  >
    <div>
      Click here to upload! This can be an image,
      or any component you can dream of.
    </div>
  </UploadField>

        {value ? (
          <Button type="link" shape="circle" icon={<SendOutlined />} />
        ) : (
          <Button type="link" shape="circle" icon={<AudioOutlined />} />
        )}
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;
