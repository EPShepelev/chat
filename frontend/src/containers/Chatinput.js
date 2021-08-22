import React, { Component, Fragment } from "react";
import { ChatInput } from "components";
import {connect} from 'react-redux';
import {messagesActions} from 'redux/actions';

const ChatInput = ({fetchSendMessage}) => {
  return <ChatInput onSendMessage={}/>;
};

export default connect(null, messagesActions)(ChatInput);
