import React from "react";
import classNames from "classnames";
import "./DialogItem.scss";
import { IconRead } from "../";
import { format, isToday } from "date-fns";
import { Avatar } from "components";

const getMessageTime = (created_at) => {
  if (isToday(new Date(created_at))) {
    return format(new Date(created_at), "HH:mm");
  } else {
    return format(new Date(created_at), "dd.MM.yyyy");
  }
};

const DialogItem = ({
  _id,
  user,
  unread,
  created_at,
  isMe,
  text,
  onSelect,
}) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": user.isOnline,
    })}
    onClick={onSelect.bind(this, _id)}
  >
    <div className="dialogs__item-avatar">
      <Avatar user={user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>{getMessageTime(created_at)}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>
        {isMe && <IconRead isMe={true} isRead={true} />}
        {unread > 0 && (
          <div className="dialogs__item-info-bottom-count">
            {unread > 9 ? "+9" : unread}
          </div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;
