import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Messages as BaseMessages } from "components";
import { messagesActions } from "redux/actions";

const Dialogs = ({ currentDialogId, fetchMessages, items, isLoading }) => {
  useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }
  }, [currentDialogId]);

  return <BaseMessages items={items} isLoading={isLoading} />;
};

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.item,
    isLoading: messages.isLoading,
  }),
  messagesActions
)(Dialogs);
