import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Messages as BaseMessages } from "components";
import { messagesActions } from "redux/actions";
import socket from "core/socket";

const Dialogs = ({
  currentDialogId,
  fetchMessages,
  adMessage,
  items,
  isLoading,
  user,
  removeMessageById,
}) => {
  const messagesRef = useRef(null);

  const onNewMessage = (data) => {
    addMessage(data);
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
};

return currentDialogId ? (
  <BaseMessages
    user={user}
    blockRef={messagesRef}
    items={items}
    isLoading={isLoading && !user}
    onRemoveMessage={removeMessageById}
  />
) : null;

export default connect(
  ({ dialogs, messages, user }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.item,
    isLoading: messages.isLoading,
    user: user.data,
  }),
  messagesActions
)(Dialogs);
