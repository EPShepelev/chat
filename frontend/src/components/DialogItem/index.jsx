import React from "react";
import classNames from "classnames";
import "./DialogItem.scss";
import { IconRead } from "..";
import { format, isToday } from "date-fns";
import { Avatar } from "components";
import { Link } from "react-router-dom";

const getMessageTime = (created_at) => {
  if (isToday(new Date(created_at))) {
    return format(new Date(created_at), "HH:mm");
  } else {
    return format(new Date(created_at), "dd.MM.yyyy");
  }
};

const DialogItem = ({
  _id,
  read,
  created_at,
  isMe,
  text,
  currentDialogId,
  lastMessage,
}) => (
  <Link to={`/dialog/${_id}`}>
    <div
      className={classNames("dialogs__item", {
        "dialogs__item--online": lastMessage.user.isOnline,
        "dialogs__item--selected": currentDialogId === _id,
      })}
    >
      <div className="dialogs__item-avatar">
        <Avatar user={lastMessage.user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{lastMessage.user.fullname}</b>
          <span>{getMessageTime(lastMessage.created_at)}</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{lastMessage.text}</p>
          {isMe && <IconRead isMe={isMe} isRead={lastMessage.read} />}
          {lastMessage.unread > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {lastMessage.read > 9 ? "+9" : lastMessage.read}
            </div>
          )}
        </div>
      </div>
    </div>
  </Link>
);

export default DialogItem;
