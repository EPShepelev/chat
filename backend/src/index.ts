import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import {
  UserController,
  DialogController,
  MessageController,
} from "./controllers";

const app = express();

app.use(bodyParser.json());

const User = new UserController();
const Dialog = new DialogController();
const Messages = new MessageController();

const port = 3000;

mongoose.connect("mongodb://localhost:27017/chat", {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: true,
});

app.get("/user/:id", User.show);
app.post("/user/registration", User.create);
app.delete("/user/:id", User.delete);

app.get("/dialogs", Dialog.index);
app.post("/dialogs", Dialog.create);
app.delete("/dialogs/:id", Dialog.delete);

app.get("/messages", Messages.index);
app.post("/messages", Messages.create);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
