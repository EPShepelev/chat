import React from "react";
import PropTypes from "prop-types";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import ruLocale from "date-fns/locale/ru";

const IconRead = ({ isMe, isRead }) => {
  isMe &&
    (isRead ? (
      <img className="message__icon-readed" src={readSvg} alt="read icon" />
    ) : (
      <img
        className="message__icon-readed"
        src={noReadSvg}
        alt="no read icon"
      />
    ));
};

IconRead.propTypes = {
  avatar: PropTypes.string,
  text: PropTypes.string,
  date: PropTypes.string,
  user: PropTypes.object,
  attachments: PropTypes.array,
  isTyping: PropTypes.bool,
  isRead: PropTypes.bool,
  isMe: PropTypes.bool,
};

export default IconRead;
