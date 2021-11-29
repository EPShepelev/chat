import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { filesApi } from "utils/api";

import { ChatInput as ChatInputBase } from "components";
import { messagesActions } from "redux/actions";

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {
  if (!currentDialogId) {
    return null;
  }

  const [value, setValue] = useState("");
  const [attachments, setAttachments] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  const handleOutsideClick = (el, e) => {
    if (el && !el.contains(e.target)) {
      setEmojiPickerVisible(false);
    }
  };

  const addEmoji = ({ colons }) => {
    setValue(value + " " + colons.trim());
  };

  const sendMessage = () => {
    fetchSendMessage(value, currentDialogId);
    setValue("");
  };

  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  };

  const onUpload = (uploaded, file) => {
    filesApi.upload(file.file).then(({ data }) => {
      uploaded = [
        ...uploaded,
        {
          uid: data.file._id,
          name: data.file.name,
          status: "uploading",
        },
      ];
    });
  };

  const onSelectFiles = async (files) => {
    let uploaded = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const uid = Math.round(Math.random() * 1000);
      uploaded = [
        ...uploaded,
        {
          uid,
          file,
          name: file.name,
          status: "uploading",
        },
      ];
      await onUpload(file).then(({data})=> {
         setAttachments(uploaded);
      });
    }
  };

  useEffect(() => {
    attachments.forEach((file) => {
      onUpload(file);
    });
  }, [attachments]);

  useEffect(() => {
    const el = document.querySelector(".chat-input__smile-btn");
    document.addEventListener("click", handleOutsideClick.bind(this, el));
    return () => {
      document.removeEventListener("click", handleOutsideClick.bind(this, el));
    };
  }, []);

  return (
    <ChatInputBase
      value={value}
      setValue={setValue}
      emojiPickerVisible={emojiPickerVisible}
      toggleEmojiPicker={toggleEmojiPicker}
      addEmoji={addEmoji}
      handleSendMessage={handleSendMessage}
      sendMessage={sendMessage}
      attachments={attachments}
      onSelectFiles={onSelectFiles}
    />
  );
};

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput);
