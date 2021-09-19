import React from "react";
import { Modal, Button, Select, Input } from "antd";
import { Dialogs } from "containers";

const { Option } = Select;
const { TextaArea } = Input;

const Sidebar = ({
  user,
  visible,
  inputValue,
  messageText,
  onShow,
  onClose,
  users,
  onChangeInput,
  onSearch,
  onSelectUser,
  isLoading,
  onAddDialog,
  onModalOk,
  onChangeTextArea,
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
        confirmLoading={isLoading}
        footer={[
          <Button key="back" onClick={this.handleCancel}>
            Return
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={this.handleOk}
          >
            Создать
          </Button>,
        ]}
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

        <TextArea
          placeholder="Введите сообщение"
          autosize={{ minRows: 3, maxRows: 10 }}
          onChange={onChangeTextArea}
          value={messageText}
        />
      </Modal>
    </div>
  );
};

Sidebar.defaultProps = {
  users: [],
};

export default Sidebar;
