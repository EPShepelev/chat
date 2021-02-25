import React from "react";
import classNames from "classnames";
import "./DialogItem.scss";

const DialogItem = ({ user, message }) => (
  <div className="dialogs__item">
    <div className="dialogs__item-avatar">
      <img src={user.avatar} alt={`${user.fullname} avatar`} />
    </div>
  </div>
);

export default DialogItem;
