import React, { useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import {UploadFiles} from 'components';
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

const { TextArea } = Input;

const ChatInput = (props) => {

  const { onSendMessage, currentDialogId, handleOutsideClick, emojiPickerVisible, value, setValue, addEmoji } = props;

  useEffect(() => {
   const el = document.querySelector('.chat-input__smile-btn');
   document.addEventListener("click", handleOutsideClick.bind(this, el));
   return () => {
    document.removeEventListener("click", handleOutsideClick.bind(this, el));
  };
  }, [])
 

  return (
    <Fragment>
    <div className="chat-input">
     <div>
     <div className="chat-input__smile-btn">
      <div className="chat-input__emoji-picker">
        {emojiPickerVisible && (  
            <Picker ref={} onSelect={(emojiTag) => addEmoji(emojiTag)} set="apple" /> 
        )}
        </div>
        <Button
          onClick={toggleEmojiPicker}
          type="link"
          shape="circle"
          icon={<SmileOutlined />}
        />
      </div>
      <TextArea
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleSendMessage}
        size="large"
        placeholder="Введите сообщение"
        value={value}
        autosize={{ minRows: 1, maxRows: 6 }}
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
      <div className="chat-input__attachment">
     <UploadFiles/>
     </div>
    </div>
     </Fragment>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;
