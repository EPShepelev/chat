import React, { Fragment } from "react";
import PropTypes from "prop-types";
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

const { emojiPickerVisible, value, setValue, addEmoji, handleSendMessage, toggleEmojiPicker, sendMessage, attachment, onSelectFiles, isRecoriding, handleStartRecording } = props;

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
      { isRecoriding ? ( <div className="chat-input__record-status">
                <i></i>
                Recording...
              </div>
      ) : ( <TextArea
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleSendMessage}
        size="large"
        placeholder="Введите сообщение"
        value={value}
        autosize={{ minRows: 1, maxRows: 6 }}
      />)}
      <div className="chat-input__actions">
        <UploadField
          onFiles={onSelectFiles}
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

        {isRecoriding || value ? (
          <Button onClick={sendMessage} type="link" shape="circle" icon={<SendOutlined />} />
        ) : (
          <div className="chat-input__record-btn">
            <Button type="link" shape="circle" onClick={handleStartRecording} icon={<AudioOutlined /> } />
          </div>
        )}
      </div>
     </div>
      <div className="chat-input__attachment">
     <UploadFiles attachment={attachment}/>
     </div>
    </div>
     </Fragment>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;
