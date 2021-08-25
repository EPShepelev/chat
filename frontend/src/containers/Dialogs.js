import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dialogs as BaseDialogs } from "components";
import { dialogsActions } from "redux/actions";
import socket from "core/socket";

const Dialogs = ({
  fetchDialogs,
  currentDialogId,
  setCurrentDialogId,
  items,
  userId,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filtered, setFilteredItems] = useState(Array.from(items));

  const onChangeInput = (value) => {
    setFilteredItems(
      items.filter(
        (dialog) =>
          dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0
      )
    );
    setInputValue(value);
  };

  const onNewDialog = () => {
    fetchDialogs();
  };

  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFilteredItems(items);
    }
    socket.on("SERVER:DIALOG_CREATED", onNewDialog);
    return () => socket.removeListener("SERVER:DIALOG_CREATED", onNewDialog);
  }, []);

  return (
    <BaseDialogs
      uerId={userId}
      items={filtered}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
