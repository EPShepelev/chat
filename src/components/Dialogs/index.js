import React from "react";
import classNames from "classnames";
import "./Dialogs.scss";
import { DialogItem } from "../";

const Dialogs = ({ items }) => (
  <div className="dialogs">
    {items.map((item) => (
      <DialogItem user={item.user} unread={999} />
    ))}
  </div>
);

export default Dialogs;
