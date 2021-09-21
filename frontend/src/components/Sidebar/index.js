import React from "react";
import { Modal, Button, Select, Input, Form } from "antd";
import { Dialogs } from "containers";

import "./Sidebar.scss";

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
        canselText=""
        footer={[
          <Button key="back" onClick={onClose}>
            Закрыть
          </Button>,
          <Button
            disabled={!messageText}
            key="submit"
            type="primary"
            loading={isLoading}
            onClick={onModalOk}
          >
            Создать
          </Button>,
        ]}
      >
        <Form className="add-dialog-form">
          <Form.Item label="Введите имя пользователя или e-mail">
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
          </Form.Item>
          {messageText && (
            <Form.Item label="Введите сообщение">
              <TextArea
                autosize={{ minRows: 3, maxRows: 10 }}
                onChange={onChangeTextArea}
                value={messageText}
              />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

Sidebar.defaultProps = {
  users: [],
};

export default Sidebar;
