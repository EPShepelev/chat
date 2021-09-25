import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import { Message } from "components";
import classNames from "classnames";
import "./Messages.scss";

const Messages = ({ onRemoveMessage, blockRef, isLoading, items, user }) => {
  return (
    <div
      ref={blockRef}
      className={classNames("messages", { "messages--loading": isLoading })}
    >
      {isLoading ? (
        <Spin tip="Загрузка сообщений..." size="large"></Spin>
      ) : items && !isLoading ? (
        items.length > 0 ? (
          items.map((item) => (
            <Message
              key={item._id}
              {...item}
              isMe={user._id === item.user._id}
              onRemoveMessage={onRemoveMessage}
            />
          ))
        ) : (
          <Empty description="Сообщений еще нет" />
        )
      ) : (
        <Empty description="Откройте диалог" />
      )}
    </div>
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
