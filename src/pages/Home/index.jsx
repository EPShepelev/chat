import React from "react";
import { Message, Dialogs } from "components";
import {
  TeamOutlined,
  FormOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { Input } from "antd";

import "./Home.scss";

const Home = () => (
  <section className="chat">
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <TeamOutlined />
        <div>
          <span>Список диалогов</span>
        </div>
        <FormOutlined />
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
              _id: "605850d02b41d1345e72fa93",
              text:
                "Do consequat commodo magna exercitation anim ut qui cupidatat id. Veniam consectetur aute minim adipisicing cupidatat dolore. Aliqua exercitation amet enim fugiat sint aliquip.",
              created_at: new Date("Mon May 18 2020 06:43:11"),
              user: {
                _id: "3605850d0a82b46c641dde31d",
                fullname: "Kirk Sheppard",
                avatar: null,
              },
            },
            {
              _id: "605850d08b9e7bb5a2c98a8a",
              text:
                "Id id voluptate labore in id duis. Ea proident nisi quis magna minim do qui ad culpa exercitation magna eu est proident. Aute tempor nisi culpa tempor occaecat esse magna deserunt.",
              created_at: new Date("Tue Mar 18 1986 11:54:33"),
              user: {
                _id: "4605850d04d35b15c65786811",
                fullname: "Shepard Moss",
                avatar: null,
              },
            },
            {
              _id: "605850d01a6445c09e030ad8",
              text:
                "Aliqua magna mollit qui elit anim. Irure commodo anim aute laboris ullamco in laboris deserunt aliquip. Consectetur veniam mollit laborum consectetur.",
              created_at: new Date("Sat Apr 16 2011 13:35:41"),
              user: {
                _id: "1605850d0256c66a26f3b46f6",
                fullname: "Parsons Dunn",
                avatar: null,
              },
            },
            {
              _id: "605850d033e448a48f3ff67c",
              text:
                "Laboris dolor elit Lorem adipisicing ipsum sunt ex. Dolore ut anim dolor tempor ut amet. Pariatur quis deserunt exercitation elit elit duis exercitation non eu ex.",
              created_at: new Date("Thu Jul 18 1996 04:52:06"),
              user: {
                _id: "6605850d024fdb353a1aa4c44",
                fullname: "Weiss Alford",
                avatar: null,
              },
            },
            {
              _id: "605850d0c79fdd2a4aedcff7",
              text:
                "Enim in ex occaecat anim nostrud. Aliqua id adipisicing Lorem eu esse. Aute minim qui sint aliqua consectetur adipisicing nisi reprehenderit ut aute.",
              created_at: new Date("Thu Jun 23 1977 23:51:55"),
              user: {
                _id: "9605850d08a66acd602299b16",
                fullname: "Jolene Downs",
                avatar: null,
              },
            },
            {
              _id: "605850d0913d528bb8209dd7",
              text:
                "Ipsum sit pariatur dolor eiusmod quis veniam qui nulla adipisicing do in occaecat incididunt. Irure esse ut nostrud esse qui ad in minim officia aliquip. Cupidatat nulla ad ut sint magna sunt.",
              created_at: new Date("Mon Dec 05 1977 11:26:42"),
              user: {
                _id: "1605850d0b98caeb76218014e",
                fullname: "Anderson Munoz",
                avatar: null,
              },
            },
            {
              _id: "605850d055d44b92dc81d303",
              text:
                "Nostrud exercitation irure adipisicing amet dolore est dolore pariatur ex aliquip Lorem nisi enim laborum. Ipsum fugiat qui cupidatat id cillum aliqua ut est magna ex ullamco voluptate duis. Amet ea eiusmod aute dolor aliquip minim minim excepteur aliquip velit quis voluptate consectetur.",
              created_at: new Date("Fri May 06 1977 11:16:08"),
              user: {
                _id: "3605850d04630a73cb6edd697",
                fullname: "Carroll Velazquez",
                avatar: null,
              },
            },
            {
              _id: "605850d0f9a7a03d1d690f96",
              text:
                "Cillum veniam id occaecat officia ut anim eiusmod laboris anim Lorem ad commodo enim. Magna incididunt magna cillum magna sunt ullamco commodo anim amet. Dolore deserunt culpa eiusmod quis et velit aliqua dolore pariatur laborum id.",
              created_at: new Date("Mon Oct 19 1970 13:08:56"),
              user: {
                _id: "2605850d06dcc3b4de02670ea",
                fullname: "Haley Frederick",
                avatar: null,
              },
            },
            {
              _id: "605850d0046b12b8070e2ebe",
              text:
                "Eu reprehenderit magna laborum anim ipsum consequat id consectetur consectetur eiusmod amet. Reprehenderit cupidatat id minim ut officia proident sint ea dolor nulla occaecat. Enim quis laboris id sint labore elit veniam ipsum.",
              created_at: new Date("Tue Mar 17 2020 17:45:43"),
              user: {
                _id: "8605850d051e6de2fb276fe1f",
                fullname: "Booth Frank",
                avatar: null,
              },
            },
            {
              _id: "605850d0b7aeee08d3c4eb05",
              text:
                "Consequat ipsum nostrud sit laboris velit. Aliquip amet qui elit et anim. Eu minim cupidatat nulla sunt sunt laboris fugiat magna Lorem ullamco commodo dolore ullamco anim.",
              created_at: new Date("Fri Aug 07 2015 05:23:58"),
              user: {
                _id: "9605850d0a7a2e1e686b4b838",
                fullname: "Davis Gonzalez",
                avatar: null,
              },
            },
          ]}
        />
      </div>
    </div>
    <div className="chat__dialog">
      <div className="chat__dialog-header">
        <div className="chat__dialog-header-center">
          <b className="chat__dialog-header-username">Гай Юлий Цезарь</b>
          <div className="chat__dialog-header-status">
            <div className="status status--online">онлайн</div>
          </div>
        </div>
        <EllipsisOutlined />
      </div>
    </div>
    {/* <Message
      avatar="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-90.jpg"
      date={new Date("Thu Mar 04 2019 13:36:08")}
      audio="https://filesamples.com/samples/audio/wav/sample1.wav"
    /> */}
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
