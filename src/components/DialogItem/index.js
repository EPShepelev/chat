import React from "react";
import classNames from "classnames";
import "./DialogItem.scss";
import { Time, IconRead } from "../";

const getAvatar = (avatar) => {
  if (avatar) {
    return avatar;
  } else {
    // make avatar
  }
};

const DialogItem = ({ user, message, isMe, isRead }) => (
  <div className="dialogs__item">
    <div className="dialogs__item-avatar">
      {/* <img src={user.avatar} alt={`${user.fullname} avatar`} /> */}
      <img src="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"></img>
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Усатый Прибалт</b>
        <span>
          <Time date={new Date()} />
        </span>
      </div>
      <div className="dialogs__item-info-buttom">
        <p>
          Вот мы все тут собрались... По легенде, всякие депутаты и руководители
          в СССР использовали в своих выступлениях заготовленный набор
          совмещающихся между собой словосочетаний, что позволяло нести
          псевдоумную ахинею часами. Что-то вроде дорвеев для политсобраний.
        </p>
        <IconRead isMe={isMe} isRead={isRead} />
      </div>
    </div>
  </div>
);

export default DialogItem;
