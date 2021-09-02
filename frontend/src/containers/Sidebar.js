import React from "react";
import { Sidebar } from "components";
import { connect } from "react-redux";

const SidebarContainer = ({ fetchSendMessage, currentDialogId }) => {
  return (
    <Sidebar
      onSendMessage={fetchSendMessage}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ user }) => user.data)(SidebarContainer);
