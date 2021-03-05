import React from "react";
import "./Dialogs.scss";
import { DialogItem } from "../";
import orderBy from "lodash/orderBy";

const Dialogs = ({ items, userId }) => (
  <div className="dialogs">
    {items.map((item) => (
      <DialogItem
        key={item._id}
        user={item.user}
        message={item}
        unread={0}
        isMe={item.user._id === userId}
      />
    ))}
  </div>
);

export default Dialogs;
