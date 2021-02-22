import React from "react";
import { Message } from "components";

import "./Home.scss";

const Home = () => (
  <section className="home">
    <Message
      avatar="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
      text="Ну что у нас там? Все хорошо?"
      date="Thu Feb 13 2021 17:12:14"
      isMe={false}
      attachments={[
        {
          filename: "image.jpg",
          url: "https://source.unsplash.com/100x100/?random=1&nature,water",
        },
        {
          filename: "image.jpg",
          url: "https://source.unsplash.com/100x100/?random=2&nature,water",
        },
        {
          filename: "image.jpg",
          url: "https://source.unsplash.com/100x100/?random=3&nature,water",
        },
      ]}
    />
    <Message
      avatar="https://pbs.twimg.com/profile_images/456803584504393728/Im9iEap0.jpeg"
      text="Да, все хорошо. Все сделали, нарушения будут"
      date="Thu Feb 13 2021 18:12:14"
      isMe={true}
      isRead={true}
    />
    <Message avatar="https://pbs.twimg.com/profile_images/456803584504393728/Im9iEap0.jpeg" />
  </section>
);

export default Home;
