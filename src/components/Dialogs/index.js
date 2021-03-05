import React from "react";
import "./Dialogs.scss";
import { DialogItem } from "../";
import sortBy from "lodash/sortBy";
import { isToday } from "date-fns";

const Dialogs = ({ items, userId }) => (
  <div className="dialogs">
    {sortBy(items, (dialog) => isToday(dialog.created_at)).map((item) => (
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
