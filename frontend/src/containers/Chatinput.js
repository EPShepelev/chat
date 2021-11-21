import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { filesApi } from "utils/api";

import { ChatInput as ChatInputBase } from "components";
import { messagesActions } from "redux/actions";

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {
  if (!currentDialogId) {
    return null;
  }
  const [attachments, setAttachments] = useState([]);
  const [value, setValue] = useState("");
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

  const onUpload = (file, uid) => {
    filesApi.upload(file).then(({ data }) => {
      setAttachments(
        attachments.map((item) => {
          if (item.uid === uid) {
            item = {
              uid: data.file._id,
              name: data.file.filename,
              status: "done",
              url: data.file.url,
            };
          }
          return item;
        })
      );
    });
  };

  const onSelectFiles = (files) => {
    let uploaded = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const uid = Math.round(Math.random() * 1000);
      uploaded = [
        ...uploaded,
        {
          uid,
          name: file.name,
          status: "uploading",
          file,
        },
      ];
    }
    setAttachments(uploaded);
  };

  useEffect(() => {
    attachments.forEach((item) => {
      onUpload(item.file, item.uid);
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
