import React, { useState } from "react";
import { connect } from "react-redux";

import { ChatInput as ChatInputBase } from "components";
import { messagesActions } from "redux/actions";

const ChatInput = ({ fetchSendMessage, currentDialogId, onSendMessage }) => {
  const [value, setValue] = useState("");
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);

  const toggleEmojiPicker = () => {
    setEmojiPickerVisible(!emojiPickerVisible);
  };

  
  const handleOutsideClick = (el, e) => {
    if (el && !el.contains(e.target)) {
      setEmojiPickerVisible(false);
    }
  }

  const addEmoji = ({ colons }) => {
    setValue(value + " " + colons.trim());
  };

  useEffect(() => {
    const el = document.querySelector('.chat-input__smile-btn');
    document.addEventListener("click", handleOutsideClick.bind(this, el));
    return () => {
     document.removeEventListener("click", handleOutsideClick.bind(this, el));
   };
   }, [])

  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      onSendMessage(value, currentDialogId);
      setValue("");
    }
  };

  if (!currentDialogId) {
    return null;
  return (
    <ChatInputBase
      value={value}
      setValue={ setValue }
      emojiPickerVisible={ emojiPickerVisible }
      handleOutsideClick={ handleOutsideClick }
      toggleEmojiPicker={ toggleEmojiPicker }
      addEmoji={ addEmoji }
      handleSendMessage = { handleSendMessage }
      onSendMessage={fetchSendMessage}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput);
