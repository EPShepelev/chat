import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Messages as BaseMessages } from "components";
import { MessagesActions } from "redux/actions";

const Dialogs = ({ currentDialogId, items }) => {
  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFilteredItems(items);
    }
  }, [items]);

  return <BaseMessages items={items} />;
};

export default connect(({ messages }) => messages, MessagesActions)(Messages);
