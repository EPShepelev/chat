import React from "react";
import classNames from "classnames";
import "./DialogItem.scss";
import { Time, IconRead } from "../";
import classNames from "classnames";

const getAvatar = (avatar) => {
  if (avatar) {
    return (
      <img src="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"></img>
    );
  } else {
    // make avatar
  }
};

const DialogItem = ({ user, message, isMe, isRead }) => (
  <div
    className={classNames("dialogs__item", {
      "dialogs__item--online": isOnline,
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
        <span>
          {/* <Time date={new Date()} /> */}
          13:07
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>
          Вот мы все тут собрались... По легенде, всякие депутаты и руководители
          в СССР использовали в своих выступлениях заготовленный набор
          совмещающихся между собой словосочетаний, что позволяло нести
          псевдоумную ахинею часами. Что-то вроде дорвеев для политсобраний.
        </p>
        {/* <IconRead isMe={isMe} isRead={isRead} /> */}
        <div className="dialogs__item-info-bottom-count">3</div>
      </div>
    </div>
  </div>
);

export default DialogItem;
