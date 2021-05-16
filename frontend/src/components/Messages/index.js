import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import { Message } from "components";
import classNames from "classnames";

const Messages = ({ isLoading, items }) => {
  return (
    <div className={classNames("messages", { "messages--loading": isLoading })}>
      {isLoading && !items ? (
        <Spin tip="Загрузка сообщений..." size="large"></Spin>
      ) : items ? (
        items.map((item) => <Message {...item} />)
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
