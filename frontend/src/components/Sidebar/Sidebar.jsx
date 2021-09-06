import React, { useState } from "react";
import { Modal, Button } from "antd";

const Sidebar = ({ user }) => {
  const [visible, setVisible] = useState(false);

  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <TeamOutlined />
        <div>
          <span>Список диалогов</span>
        </div>
        <Button type="link" shape="circle" icon={<FormOutlined />} />
      </div>

      <div className="chat__sidebar-dialogs">
        <Dialogs userId={user && user._id} />
      </div>
    </div>
  );
};

export default Sidebar;
