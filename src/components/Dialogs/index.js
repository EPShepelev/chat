import React from "react";
import "./Dialogs.scss";
import { DialogItem } from "../";

const Dialogs = ({ items, userId }) => (
  <div className="dialogs">
    {items.map((item) => (
      <DialogItem
        key={item._id}
        user={item.user}
        message={item.message}
        unread={0}
        isMe={item.user._id === userId}
      />
    ))}
  </div>
);

export default Dialogs;
