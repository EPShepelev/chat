import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import { UserController, DialogController } from "./controllers";

const app = express();

app.use(bodyParser.json());

const User = new UserController();
const Dialog = new DialogController();

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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
