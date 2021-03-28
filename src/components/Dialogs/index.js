import React from "react";
import "./Dialogs.scss";
import { DialogItem } from "../";
import orderBy from "lodash/orderBy";
import { Input } from "antd";

const Dialogs = ({ items, userId, onSearch }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Input.Search
        placeholder="Поиск среди контактов"
        onSearch={(value) => console.log(value)}
      />
    </div>
    {orderBy(items, ["created_at"], ["desc"]).map((item) => (
      <DialogItem key={item._id} isMe={item.user._id === userId} {...item} />
    ))}
  </div>
);

export default Dialogs;
