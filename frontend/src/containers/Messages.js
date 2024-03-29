import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Empty } from "antd";

import { messagesActions } from "redux/actions";
import socket from "core/socket";

const Dialogs = ({
  currentDialogId,
  fetchMessages,
  adMessage,
  items,
  user,
  isLoading,
  removeMessageById,
}) => {
  if (!currentDialogId) {
    return <Empty description="Откройте диалог" />;
  }

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

return (
  <BaseMessages
    user={user}
    blockRef={messagesRef}
    items={items}
    isLoading={isLoading && !user}
    onRemoveMessage={removeMessageById}
  />
);

export default connect(
  ({ dialogs, messages, user }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.item,
    isLoading: messages.isLoading,
    user: user.data,
  }),
  messagesActions
)(Dialogs);
