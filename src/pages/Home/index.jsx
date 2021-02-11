import React from "react";
import { Message } from "components";
import { Route } from "react-router-dom";
import "./Home.scss";

const Home = () => (
  <section className="home">
    <Message
      avatar="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
      text="Ну что у нас там? Все хорошо?"
      date="Thu Feb 11 2021 15:12:14"
    />
  </section>
);

export default Home;
