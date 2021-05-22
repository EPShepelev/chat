import mongoose from "mongoose";
import express from "express";

import User from "./schemas/User";

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/chat", {
  useNewUrlParser: true,
});

app.get("/", (_: any, res: any) => {
  res.send("Hello World!");
  const user = new User({ email: "hello@email.com", fullname: "Test User" });
  user.save().then(() => console.log("User created!"));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
