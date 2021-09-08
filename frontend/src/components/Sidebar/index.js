import React from "react";
import { Modal, Button, Select } from "antd";
import { Dialogs } from "containers";

const { Option } = Select;

const Sidebar = ({ user, visible, onShow, onClose }) => {
  const options = this.state.data.map(d=>{
    <Option key={d.value}>{d.text}</Option>
  })
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
        onOk={onClose}
        onCancel={onClose}
      >
        <Select ShowSearch value={}>{options}</Select>
      </Modal>
    </div>
  );
};

export default Sidebar;
