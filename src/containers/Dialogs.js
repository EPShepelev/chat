import React, { useState } from "react";
import { Dialogs } from "components";

const Dialogs = ({ items }) => {
  const [value, setValue] = useState("");
  const onChangeInput = (e) => {
    setValue(e.target.value);
  };
  return <Dialogs items={items} onSearch={onChangeInput} inputValue={value} />;
};

export default Dialogs;
