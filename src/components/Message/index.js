import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";
import "./Message.scss";
import readSvg from "assets/img/read.svg";
import noReadSvg from "assets/img/noread.svg";

const Message = ({ avatar, user, text, date, isMe, isRead, attachments }) => (
  <div className={classNames("message", { "message--isme": isMe })}>
    <div className="message__content">
      {isMe && isRead ? (
        <img className="message__icon-readed" src={readSvg} alt="read icon" />
      ) : (
        <img
          className="message__icon-readed"
          src={noReadSvg}
          alt="no read icon"
        />
      )}
      <div className="message__avatar">
        <img src={avatar} alt={`Avatar ${user.fullname}`}></img>
      </div>
      <div className="message__info">
        <div className="message__bubble">
          <p className="message__text">{text}</p>
        </div>
        <span className="message__date">
          {formatDistanceToNow(new Date(date), {
            addSuffix: true,
            locale: ruLocale,
          })}
        </span>
      </div>
      <div className="message__attachments">
        {attachments.map((item) => {
          <div className="message__attachments-item">
            <img src={item.url} alt={item.filename} />
          </div>;
        })}
      </div>
    </div>
  </div>
);

Message.defaultProps = {
  user: {},
};

Message.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
};

export default Message;
