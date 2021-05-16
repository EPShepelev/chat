import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin } from "antd";
import { Message } from "components";

const Messages = ({ isLoading, items }) => {
  return (
    <div className="messages">
      {isLoading && !items ? (
        <Spin tip="Loading..."></Spin>
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
