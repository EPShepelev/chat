import React from "react";
import { Dialogs, Messages, ChatInput, Status } from "containers";
import { Sidebar } from "containers";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import "./Home.scss";

// сделать загрузку для проверки user

const Home = () => (
  <section className="chat">
    <Sidebar />
    <div className="chat__dialog">
      <div className="chat__dialog-header">
        <div />
        <Status online />
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
