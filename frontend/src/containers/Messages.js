import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Messages as BaseMessages } from "components";
import { MessagesActions } from "redux/actions";

const Dialogs = ({ fetchDialogs, setCurrentDialog, items, userId }) => {
  const [filtered, setFilteredItems] = useState(Array.from(items));

  useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFilteredItems(items);
    }
  }, [items]);

  return (
    <BaseMessages
      uerId={userId}
      items={filtered}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialog}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
