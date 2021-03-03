import React from "react";
import "./Dialogs.scss";
import { DialogItem } from "../";

const Dialogs = ({ items }) => (
  <div className="dialogs">
    {items.map((item) => (
      <DialogItem user={item.user} message={item.lastMessage} unread={0} />
    ))}
  </div>
);

export default Dialogs;
