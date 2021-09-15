import React, { useState } from "react";
import { Modal, Button, Select } from "antd";
import { connect } from "react-redux";

import { Sidebar } from "components";
import { userApi, dialogsApi } from "utils/api";

const SidebarContainer = ({ user }) => {
  
  const [visible, setVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [users, setUsers] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(false);

  const onClose = () => {
    setVisible(false);
  };

  const onShow = () => {
    setVisible(true);
  }

  const onSearch = (value) => {
    setIsSearching(true);
    userApi.findUsers(value).then(({data})=>{
      setUsers(data)
      setIsSearching(false);
    }).catch(()=>{
      setIsSearching(false);
    })
  }

  const onAddDialog = () => {
    setIsSearching(true);
    userApi.findUsers(value).then(({data})=>{
      setUsers(data)
      setIsSearching(false);
    }).catch(()=>{
      setIsSearching(false);
    })
  }

  const handleChangeInput = (value) => {
   setInputValue(value);
  }

  const  onSelectUser = userId =>{
    setSelectedUserId(userId);
  }
  
  return <Sidebar user={user} inputValue={inputValue} visible={visible} onClose={onClose} onShow={onShow} onChangeInput={handleChangeInput} onSelectUser={ onSelectUser } onSearch={onSearch} isSerching={isSearching}/>;
};
export default connect(({ user }) => ({user: user.data})(SidebarContainer);
