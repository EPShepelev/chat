import mongoose from "mongoose";
import express from "express";
import socket from "socket.io";
import { creatServer } from "http";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import {
  UserController,
  DialogController,
  MessageController,
} from "./controllers";

import { updateLastSeen, checkAuth } from "./middlewares";
import { loginValidation } from "./utils/validations";

const app = express();
const http = creatServer(app);
const io = socket(http);
dotenv.config();

app.use(bodyParser.json());
app.use(updateLastSeen);
app.use(checkAuth);

const port = 3000;

mongoose.connect("mongodb://localhost:27017/chat", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.get("/user/me", UserController.getMe);
app.get("/user/:id", UserController.show);
app.delete("/user/:id", UserController.delete);
app.post("/user/registration", UserController.create);
app.post("/user/login", UserController.login);

app.get("/dialogs", DialogController.index);
app.post("/dialogs", DialogController.create);
app.delete("/dialogs/:id", DialogController.delete);

app.get("/messages", MessageController.index);
app.post("/messages", MessageController.create);
app.delete("/messages/:id", MessageController.delete);

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
