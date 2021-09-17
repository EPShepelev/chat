import React from "react";
import { Modal, Button, Select } from "antd";
import { Dialogs } from "containers";

const { Option } = Select;

const Sidebar = ({
  user,
  visible,
  inputValue,
  onShow,
  onClose,
  users,
  onChangeInput,
  onSearch,
  onSelectUser,
  isLoading,
  onAddDialog,
  onModalOk,
}) => {
  const options = users.map((user) => {
    <Option key={user._id}>{user.fullname}</Option>;
  });
  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <TeamOutlined />
        <div>
          <span>Список диалогов</span>
        </div>
        <Button
          onClick={onShow}
          type="link"
          shape="circle"
          icon={<FormOutlined />}
        />
      </div>

      <div className="chat__sidebar-dialogs">
        <Dialogs userId={user && user._id} />
      </div>
      <Modal
        title="Создать диалог"
        visible={visible}
        onOk={onModalOk}
        onCancel={onClose}
        okText="создать"
        canselText="закрыть"
        confirmLoading={isSerching}
      >
        <Select
          placeholder="Найти пользователя"
          value={inputValue}
          onSearch={onSearch}
          onChange={onChangeInput}
          onSelect={onSelectUser}
          style={{ width: "100%" }}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOptions={false}
          ShowSearch
        >
          {options}
        </Select>
      </Modal>
    </div>
  );
};

Sidebar.defaultProps = {
  users: [],
};

export default Sidebar;
