import mongoose from "mongoose";
import express from "express";
import bodyParser from "body-parser";

import { UserModel } from "./schemas";
import { UserController } from "./controllers";

const app = express();

app.use(bodyParser.json());

const User = new UserController();

const port = 3000;

mongoose.connect("mongodb://localhost:27017/chat", {
  useNewUrlParser: true,
  useCreateIndex: true,
});

app.get("/user/:id", User.index);
app.get("/user/registration", User.create);
app.delete("/user/:id", User.delete);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
