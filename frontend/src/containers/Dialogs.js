import React, { useState } from "react";
import { Dialogs as BaseDialogs } from "components";

const Dialogs = ({ items, userId }) => {
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
  return (
    <BaseDialogs
      uerId={userId}
      items={filtered}
      onSearch={onChangeInput}
      inputValue={inputValue}
    />
  );
};

export default Dialogs;
