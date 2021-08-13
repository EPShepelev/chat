import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Messages as BaseMessages } from "components";
import { messagesActions } from "redux/actions";
import socket from "core/socket";

const Dialogs = ({ currentDialogId, fetchMessages, items, isLoading }) => {
  const messagesRef = useRef(null);

  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId]);

  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [items]);

  return (
    <BaseMessages blockRef={messagesRef} items={items} isLoading={isLoading} />
  );
};

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.item,
    isLoading: messages.isLoading,
  }),
  messagesActions
)(Dialogs);
