import React from "react";
import PropTypes from "prop-types";
import readSvg from "assets/img/read.svg";
import noReadSvg from "assets/img/noread.svg";

const IconRead = ({ isMe, isRead }) =>
  isMe &&
  (isRead ? (
    <img className="message__icon-readed" src={readSvg} alt="read icon" />
  ) : (
    <img className="message__icon-readed" src={noReadSvg} alt="no read icon" />
  ));

IconRead.propTypes = {
  isRead: PropTypes.bool,
  isMe: PropTypes.bool,
};

export default IconRead;
