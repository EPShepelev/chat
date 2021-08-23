import React, { Component, Fragment } from "react";
import { ChatInput as ChatInputBase } from "components";
import { connect } from "react-redux";
import { messagesActions } from "redux/actions";

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {
  return <ChatInputBase onSendMessage={fetchSendMessage} />;
};

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput);
