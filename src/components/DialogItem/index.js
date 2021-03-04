import React from "react";
import classNames from "classnames";
import "./DialogItem.scss";
import { IconRead } from "../";
import { format, isToday } from "date-fns";

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, "HH:mm");
  } else {
    return format(created_at, "DD:MM:YYYY");
  }
};

const getAvatar = (avatar) => {
  if (avatar) {
    return (
      <img src="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"></img>
    );
  } else {
    // make avatar
  }
};

const DialogItem = ({ user, message, unread, isMe, isRead }) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": user.isOnline,
    })}
  >
    <div className="dialogs__item-avatar">
      {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
      {getAvatar(
        "https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
      )}
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Усатый Прибалт</b>
        <span>{getMessageTime(message.created_at)}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{message.text}</p>
        <IconRead isMe={true} isRead={true} />
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
