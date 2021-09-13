import React, { useState } from "react";
import { Modal, Button, Select } from "antd";
import { connect } from "react-redux";

import { Sidebar } from "components";
import { userApi } from "utils/api";

const SidebarContainer = ({ user }) => {
  
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const onShow = () => {
    setVisible(true);
  }

  const onSearch = (value) => {
    setIsLoading(true);
    userApi.findUsers(value).then(({data})=>{
      setUsers(data)
    })
  }

  const handleChangeInput = (value) => {
   setInputValue(value);
  }

  const  onSelectUser = userId =>{

  }
  
  return <Sidebar user={user} inputValue={inputValue} visible={visible} onClose={onClose} onShow={onShow} onChangeInput={handleChangeInput} onSelectUser={ onSelectUser } onSearch={onSearch}/>;
};
export default connect(({ user }) => ({user: user.data})(SidebarContainer);
