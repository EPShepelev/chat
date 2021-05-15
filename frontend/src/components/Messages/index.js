import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin, Alert } from "antd";
import { Message } from "components";

const Messages = ({ items }) => {
  return items ? (
    <div>
      {items.map((item) => (
        <Message {...item} />
      ))}
    </div>
  ) : (
    <Empty description="Откройте диалог" />
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
