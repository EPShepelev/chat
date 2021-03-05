import React from "react";
import "./Dialogs.scss";
import { DialogItem } from "../";
import orderBy from "lodash/orderBy";
import { isToday } from "date-fns";

const Dialogs = ({ items, userId }) => (
  <div className="dialogs">
    {orderBy(items, ["created_at"], ["desc"]).map((item) => (
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
