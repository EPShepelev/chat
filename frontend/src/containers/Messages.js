import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Messages as BaseMessages } from "components";
import { messagesActions } from "redux/actions";
import socket from "core/socket";

const Dialogs = ({ currentDialogId, fetchMessages, items, isLoading }) => {
  const messagesRef = useRef(null);
  const onNewMessage = () => {
    fetchMessages(currentDialogId);
  };

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
    socket.on("SERVER:NEW_MESSAGE", onNewMessage);
    return () => {
      socket.removeListener("SERVER:NEW_MESSAGE", onNewMessage);
    };
  }, [currentDialogId]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [items]);

  return (
    <BaseMessages blockRef={messagesRef} items={items} isLoading={isLoading} />
  );
};

class Dialogs extends React.Component {}

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.item,
    isLoading: messages.isLoading,
  }),
  messagesActions
)(Dialogs);
