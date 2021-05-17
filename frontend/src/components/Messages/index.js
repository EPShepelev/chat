import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import { Message } from "components";
import classNames from "classnames";
import "./Messages.scss";

const Messages = ({ ref, isLoading, items }) => {
  return (
    <div
      ref={ref}
      className={classNames("messages", { "messages--loading": isLoading })}
    >
      {isLoading ? (
        <Spin tip="Загрузка сообщений..." size="large"></Spin>
      ) : items && !isLoading ? (
        items.map((item) => <Message key={item._id} {...item} />)
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
