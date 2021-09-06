import React, { useState } from "react";
import { Modal, Button, Select } from "antd";
import { connect } from "react-redux";

import { Sidebar } from "components";

const SidebarContainer = ({ user }) => {
  
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };
  
  return <Sidebar user={user} />;
};
export default connect(({ user }) => ({user: user.data})(SidebarContainer);
