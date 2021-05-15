import React from "react";
import PropTypes from "prop-types";
import { Empty, Spin, Alert } from "antd";
import { Message } from "components";

const Messages = ({ isLoading, items }) => {
  return (
    <div className="messages">
      {isLoading && !items ? (
        <Spin tip="Loading...">
          <Alert
            message="Alert message title"
            description="Further details about the context of this alert."
            type="info"
          />
        </Spin>
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
