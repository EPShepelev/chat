import React, { useState } from "react";
import { connect } from "react-redux";

import { ChatInput as ChatInputBase } from "components";
import { messagesActions } from "redux/actions";

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {
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

  if (!currentDialogId) {
    return null;
  return (
    <ChatInputBase
      value={value}
      setValue={ setValue }
      emojiPickerVisible={ emojiPickerVisible }
      handleOutsideClick={ handleOutsideClick }
      toggleEmojiPicker={ toggleEmojiPicker }
      onSendMessage={fetchSendMessage}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput);
