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

app.get("/:id", User.index);

app.post("/create", (req: express.Request, res: express.Response) => {
  const postData = {
    email: req.body.email,
    fullname: req.body.fullname,
    password: req.body.password,
  };
  const user = new UserModel(postData);
  user
    .save()
    .then((obj: any) => {
      res.json(obj);
    })
    .catch((reason) => {
      res.json({ reason });
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});