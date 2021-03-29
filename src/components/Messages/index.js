import React from "react";
import PropTypes from "prop-types";
import { Empty } from "antd";
import { Message } from "components";

const Messages = ({ items }) => {
  return items ? (
    <div>
      <Message
        avatar="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
        date={new Date("Thu Mar 04 2019 13:36:08")}
        audio="https://filesamples.com/samples/audio/wav/sample1.wav"
      />
      <Message
        avatar="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
        text="Ну что там у нас? Все хорошо?"
        date="Thu Feb 13 2021 18:12:14"
        isMe={false}
        isRead={true}
      />
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
        text="Вот и наши подьехали, думаю это будет прикольно. Ну а вы что думали? Так просто никогда не бывает."
        attachments={[
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
          {
            filename: "image.jpg",
            url: "https://source.unsplash.com/100x100/?random=1&nature,water",
          },
        ]}
      />
      <Message
        avatar="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
        text="Вот и наши подьехали, думаю это будет прикольно. Ну а вы что думали? Так просто никогда не бывает."
      />
      <Message
        avatar="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
        text="Вот и наши подьехали, думаю это будет прикольно. Ну а вы что думали? Так просто никогда не бывает."
      />
      <Message
        avatar="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
        text="Вот и наши подьехали, думаю это будет прикольно. Ну а вы что думали? Так просто никогда не бывает."
      />
      <Message
        avatar="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
        text="Вот и наши подьехали, думаю это будет прикольно. Ну а вы что думали? Так просто никогда не бывает."
      />
      <Message
        avatar="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
        text="Вот и наши подьехали, думаю это будет прикольно. Ну а вы что думали? Так просто никогда не бывает."
      />
      <Message
        avatar="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
        isTyping
      />
    </div>
  ) : (
    <Empty description="Нет сообщений" />
  );
};

Messages.propTypes = {
  items: PropTypes.array,
};

export default Messages;
