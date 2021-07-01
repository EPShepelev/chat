import express from "express";
import socket from "socket.io";
import { creatServer } from "http";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import "./core/db";

const app = express();
const http = creatServer(app);
const io = socket(http);
dotenv.config();

io.on("connection", function (socket: any) {
  console.log("CONNECTED!");
  socket.emit("111", "test message");
  socket.on("222", function (msg: any) {
    console.log("CLIENT_SAY " + msg);
  });
});

http.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
