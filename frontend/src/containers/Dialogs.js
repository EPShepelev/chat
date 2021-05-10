import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Dialogs as BaseDialogs } from "components";
import { dialogsActions } from "redux/actions";

const Dialogs = ({ fetchDialogs, items, userId }) => {
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
    }
  }, []);

  return (
    <BaseDialogs
      uerId={userId}
      items={filtered}
      onSearch={onChangeInput}
      inputValue={inputValue}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
