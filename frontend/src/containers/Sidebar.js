import React, { useState } from "react";
import { Modal, Button, Select } from "antd";
import { connect } from "react-redux";

import { Sidebar } from "components";

const SidebarContainer = ({ user }) => {
  
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onClose = () => {
    setVisible(false);
  };

  const onShow = () => {
    setVisible(true);
  }

  const handleChangeInput = (value) => {
   setInputValue(e.target.value);
  }
  
  return <Sidebar user={user} inputValue={inputValue} visible={visible} onClose={onClose} onShow={onShow}/>;
};
export default connect(({ user }) => ({user: user.data})(SidebarContainer);
