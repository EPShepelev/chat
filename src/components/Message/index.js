import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
// import { Divider, Message as BaseButton } from "antd";
import "./Message.scss";

const Message = ({ avatar, user, text, date }) => (
  <div className="message">
    <div className="message__avatar">
      <img src={avatar} alt={`Avatar ${user.fullname}`}></img>
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
};

export default Message;
