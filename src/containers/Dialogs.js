import React, { useState } from "react";
import { Dialogs as BaseDialogs } from "components";

const Dialogs = ({ items, userId }) => {
  const [inputValue, setInputValue] = useState("");
  let filtered = Array.from(items);

  const onChangeInput = (value) => {
    filtered = filtered.filter(
      (dialog) => dialog.user.fullname.indexOf(value) >= 0
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
