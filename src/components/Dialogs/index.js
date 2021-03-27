import React from "react";
import "./Dialogs.scss";
import { DialogItem } from "../";
import orderBy from "lodash/orderBy";

const Dialogs = ({ items, userId, onSearch }) => (
  <div className="dialogs">
    {orderBy(items, ["created_at"], ["desc"]).map((item) => (
      <DialogItem key={item._id} isMe={item.user._id === userId} {...item} />
    ))}
  </div>
);

export default Dialogs;
