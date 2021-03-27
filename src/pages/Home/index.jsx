import React from "react";
import { Message, Dialogs, Status, ChatInput } from "components";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Input, Button } from "antd";
import "./Home.scss";

const Home = () => (
  <section className="chat">
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <TeamOutlined />
        <div>
          <span>Список диалогов</span>
        </div>
        <Button type="link" shape="circle" icon={<FormOutlined />} />
      </div>
      <div className="chat__sidebar-search">
        <Input.Search placeholder="Поиск среди контактов" />
      </div>
      <div className="chat__sidebar-dialogs">
        <Dialogs
          userId={0}
          items={[
            //
            {
              _id: "c2322c09dc0f81274e0ab2f4fcc27620",
              text:
                "Do consequat commodo magna exercitation anim ut qui cupidatat id. Veniam consectetur aute minim adipisicing cupidatat dolore. Aliqua exercitation amet enim fugiat sint aliquip.",
              created_at: new Date("Mon May 18 2020 06:43:11"),
              user: {
                _id: "c2322c09dc0f81274e0ab2f4fcc27620",
                fullname: "Kirk Sheppard",
                avatar: null,
              },
            },
            {
              _id: "195d0596f004e486a2a8190a8bfe1e9b",
              text:
                "Id id voluptate labore in id duis. Ea proident nisi quis magna minim do qui ad culpa exercitation magna eu est proident. Aute tempor nisi culpa tempor occaecat esse magna deserunt.",
              created_at: new Date("Tue Mar 18 1986 11:54:33"),
              user: {
                _id: "195d0596f004e486a2a8190a8bfe1e9b",
                fullname: "Shepard Moss",
                avatar: null,
              },
            },
            {
              _id: "3fa67a3e97ba5f7e441e92a8a91fd18f",
              text:
                "Aliqua magna mollit qui elit anim. Irure commodo anim aute laboris ullamco in laboris deserunt aliquip. Consectetur veniam mollit laborum consectetur.",
              created_at: new Date("Sat Apr 16 2011 13:35:41"),
              user: {
                _id: "3fa67a3e97ba5f7e441e92a8a91fd18f",
                fullname: "Parsons Dunn",
                avatar: null,
              },
            },
            {
              _id: "d47c0806ceb2276f59a5a82d415c09af",
              text:
                "Laboris dolor elit Lorem adipisicing ipsum sunt ex. Dolore ut anim dolor tempor ut amet. Pariatur quis deserunt exercitation elit elit duis exercitation non eu ex.",
              created_at: new Date("Thu Jul 18 1996 04:52:06"),
              user: {
                _id: "d47c0806ceb2276f59a5a82d415c09af",
                fullname: "Weiss Alford",
                avatar: null,
              },
            },
            {
              _id: "4fd490095cd33a84e26de3501f787a98",
              text:
                "Enim in ex occaecat anim nostrud. Aliqua id adipisicing Lorem eu esse. Aute minim qui sint aliqua consectetur adipisicing nisi reprehenderit ut aute.",
              created_at: new Date("Thu Jun 23 1977 23:51:55"),
              user: {
                _id: "4fd490095cd33a84e26de3501f787a98",
                fullname: "Jolene Downs",
                avatar: null,
              },
            },
            {
              _id: "2c8e21a35e5179ec8507db26ee687c79",
              text:
                "Ipsum sit pariatur dolor eiusmod quis veniam qui nulla adipisicing do in occaecat incididunt. Irure esse ut nostrud esse qui ad in minim officia aliquip. Cupidatat nulla ad ut sint magna sunt.",
              created_at: new Date("Mon Dec 05 1977 11:26:42"),
              user: {
                _id: "2c8e21a35e5179ec8507db26ee687c79",
                fullname: "Anderson Munoz",
                avatar: null,
              },
            },
            {
              _id: "329842e3952a44e3ae27234c48f3c10a",
              text:
                "Nostrud exercitation irure adipisicing amet dolore est dolore pariatur ex aliquip Lorem nisi enim laborum. Ipsum fugiat qui cupidatat id cillum aliqua ut est magna ex ullamco voluptate duis. Amet ea eiusmod aute dolor aliquip minim minim excepteur aliquip velit quis voluptate consectetur.",
              created_at: new Date("Fri May 06 1977 11:16:08"),
              user: {
                _id: "329842e3952a44e3ae27234c48f3c10a",
                fullname: "Carroll Velazquez",
                avatar: null,
              },
            },
            {
              _id: "4ed141bae94b328c64abce3802e311bb",
              text:
                "Cillum veniam id occaecat officia ut anim eiusmod laboris anim Lorem ad commodo enim. Magna incididunt magna cillum magna sunt ullamco commodo anim amet. Dolore deserunt culpa eiusmod quis et velit aliqua dolore pariatur laborum id.",
              created_at: new Date("Mon Oct 19 1970 13:08:56"),
              user: {
                _id: "4ed141bae94b328c64abce3802e311bb",
                fullname: "Haley Frederick",
                avatar: null,
              },
            },
          ]}
        />
      </div>
    </div>
    <div className="chat__dialog">
      <div className="chat__dialog-header">
        <div />
        <div className="chat__dialog-header-center">
          <b className="chat__dialog-header-username">Гай Юлий Цезарь</b>
          <div className="chat__dialog-header-status">
            <Status online />
          </div>
        </div>
        <Button
          type="link"
          shape="circle"
          icon={<EllipsisOutlined style={{ fontSize: "22px" }} />}
        />
      </div>
      <div className="chat__dialog-messages">
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
      <div className="chat__dialog-input">
        <ChatInput />
      </div>
    </div>
  </section>
);

export default Home;
