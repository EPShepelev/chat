import React from "react";
import { connect } from "react-redux";

import { Sidebar } from "components";

const SidebarContainer = ({ fetchSendMessage, currentDialogId }) => {
  return (
    <Sidebar
      onSendMessage={fetchSendMessage}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ user }) => user.data)(SidebarContainer);
