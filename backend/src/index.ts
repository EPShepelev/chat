import express from "express";
import socket from "socket.io";
import { creatServer } from "http";
import dotenv from "dotenv";

import "./core/db";
import createRoutes from "./core/routes";

const app = express();
const http = creatServer(app);
const io = socket(http);

dotenv.config();

createRoutes(app, io);

io.on("connection", function (socket: any) {});

http.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});
