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
import { UploadField } from "@navjobs/upload";
import { Picker } from "emoji-mart";

import "./ChatInput.scss";

const ChatInput = () => {
  const [value, setValue] = useState("");
  const [emojiPickerVisible, setEmojiPickerVisible] = useState("");

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        <div className="chat-input__emoji-picker">
          <Picker set="emojion" />
        </div>
        <Button
          onClick={toggleEmojiPicker}
          type="link"
          shape="circle"
          icon={<SmileOutlined />}
        />
      </div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        size="large"
        placeholder="Введите сообщение"
      />
      <div className="chat-input__actions">
        <UploadField
          onFiles={(files) => console.log(files)}
          containerProps={{
            className: "chat-input__actions-upload-btn",
          }}
          uploadProps={{
            accept: ".jpg,.png,.jpeg,.gif,.bmp",
            multiple: "multiple",
          }}
        >
          <Button type="link" shape="circle" icon={<CameraOutlined />} />
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
