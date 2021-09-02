import React from "react";
import { Button } from "antd";

const Sidebar = ({ userId }) => {
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
        <Dialogs userId={userId} />
      </div>
    </div>
  );
};

export default Sidebar;
