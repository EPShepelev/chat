import { updateLastSeen, checkAuth } from "..middlewares";
import { loginValidation, registerValidation } from "../utils/validations";
import bodyParser from "body-parser";
import express from "express";
import socket from "socket.io";

import uploader from "./uploader";

import { UserCtr, DialogCtr, MessageCtr, UploadCtr } from "../controllers";

const createRoutes = (app: express.Express, io: socket.Server) => {
  const UserController = new UserCtr(io);
  const DialogController = new DialogCtr(io);
  const MessageController = new MessageCtr(io);
  const UploadController = new UploadCtr();

  app.use(bodyParser.json());
  app.use(checkAuth);
  app.use(updateLastSeen);

  const port = 3000;

  app.get("/user/me", UserController.getMe);
  app.get("/user/verify", UserController.verify);
  app.post("/user/signup", registerValidation, UserController.create);
  app.post("/user/signin", loginValidation, UserController.login);
  app.get("/user/find", UserController.findUsers);
  app.get("/user/:id", UserController.show);
  app.delete("/user/:id", UserController.delete);

  app.get("/dialogs", DialogController.index);
  app.post("/dialogs", DialogController.create);
  app.delete("/dialogs/:id", DialogController.delete);

  app.get("/messages", MessageController.index);
  app.post("/messages", MessageController.create);
  app.delete("/messages", MessageController.delete);

  app.post("/files", uploader.single("image"), UploadController.create);
  app.delete("/files", UploadController.delete);
};

export default createRoutes;
