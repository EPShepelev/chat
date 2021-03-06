import React from "react";
import { Message, Dialogs } from "components";

import "./Home.scss";

const Home = () => (
  <section className="home">
    <Dialogs
      userId={0}
      items={[
        {
          _id: Math.random(),
          text:
            "Вот мы все тут собрались... По легенде, всякие депутаты и руководители в СССР использовали в своих выступлениях заготовленный набор совмещающихся между собой словосочетаний, что позволяло нести псевдоумную ахинею часами. Что-то вроде дорвеев для политсобраний.",
          created_at: new Date("Thu Mar 04 2020 13:36:08"),
          user: {
            _id: 1,
            fullname: "Усатый Прибалт",
            avatar: null,
          },
        },
        {
          _id: Math.random(),
          text: "Привет! Как твои дела? Все хорошо?",
          created_at: new Date("Thu Mar 04 2019 13:36:08"),
          user: {
            _id: 1,
            fullname: "Пикачу Покемоновский",
            avatar: null,
          },
        },
      ]}
    />
    <Message
      avatar="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
      date={new Date("Thu Mar 04 2019 13:36:08")}
      audio="https://filesamples.com/samples/audio/wav/sample1.wav"
    />
    {/*
    <Message
      avatar="https://pbs.twimg.com/profile_images/456803584504393728/Im9iEap0.jpeg"
      text="Да, все хорошо. Все сделали, нарушения будут"
      date="Thu Feb 13 2021 18:12:14"
      isMe={true}
      isRead={true}
    />
    <Message
      avatar="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
      attachments={[
        {
          filename: "image.jpg",
          url: "https://source.unsplash.com/100x100/?random=1&nature,water",
        },
      ]}
    />
    <Message
      avatar="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
      isTyping
    />{" "}
    */}
  </section>
);

export default Home;
