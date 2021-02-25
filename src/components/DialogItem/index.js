import React from "react";
import classNames from "classnames";
import "./DialogItem.scss";
import { Time } from "../";

const DialogItem = ({ user, message }) => (
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
    </div>
  </div>
);

export default DialogItem;
