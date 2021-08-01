import { updateLastSeen, checkAuth } from "..middlewares";
import { loginValidation, registerValidation } from "../utils/validations";
import bodyParser from "body-parser";
import express from "express";
import socket from "socket.io";

import { UserCtr, DialogCtr, MessageCtr } from "../controllers";

const createRoutes = (app: express.Express, io: socket.Server) => {
  const UserController = new UserCtr(io);
  const DialogController = new DialogCtr(io);
  const MessageController = new MessageCtr(io);

  app.use(bodyParser.json());
  app.use(updateLastSeen);
  app.use(checkAuth);

  const port = 3000;

  app.get("/user/me", UserController.getMe);
  app.post("/user/verify", UserController.verify);
  app.get("/user/:id", UserController.show);
  app.post("/user/signup", registerValidation, UserController.create);
  app.post("/user/signin", loginValidation, UserController.login);
  app.delete("/user/:id", UserController.delete);

  app.get("/dialogs", DialogController.index);
  app.post("/dialogs", DialogController.create);
  app.delete("/dialogs/:id", DialogController.delete);

  app.get("/messages", MessageController.index);
  app.post("/messages", MessageController.create);
  app.delete("/messages/:id", MessageController.delete);
};

export default createRoutes;
