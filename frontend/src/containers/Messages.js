import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Messages as MessagesDialogs } from "components";
import { MessagesActions } from "redux/actions";

const Dialogs = ({ fetchDialogs, setCurrentDialog, items, userId }) => {
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

  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFilteredItems(items);
    }
  }, [items]);

  return (
    <BaseDialogs
      uerId={userId}
      items={filtered}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialog}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
