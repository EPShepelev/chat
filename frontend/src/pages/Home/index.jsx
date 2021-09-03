import React from "react";
import { Dialogs, Messages, ChatInput, Status } from "containers";
import { Sidebar } from "containers";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import "./Home.scss";

const Home = () => (
  <section className="chat">
    <Sidebar />
    <div className="chat__dialog">
      <div className="chat__dialog-header">
        <div />
        <Status online />

        <Button
          type="link"
          shape="circle"
          icon={<EllipsisOutlined style={{ fontSize: "22px" }} />}
        />
      </div>
      <div className="chat__dialog-messages">
        <Messages />
      </div>
      <div className="chat__dialog-input">
        <ChatInput />
      </div>
    </div>
  </section>
);

export default Home;
