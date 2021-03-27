import React, { useState } from "react";
import { Dialogs as BaseDialogs } from "components";

const Dialogs = ({ items }) => {
  const [inputValue, setInputValue] = useState("");
  let filtred = Array.from(items);

  const onChangeInput = (e) => {
    const value = e.target.value;
    filtred = filtered.filter(
      (dialog) => dialog.user.fullname.indexOf(value) >= 0
    );
    setInputValue(e.target.value);
  };
  return (
    <BaseDialogs
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
    />
  );
};

export default Dialogs;
