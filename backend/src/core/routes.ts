import { updateLastSeen, checkAuth } from "..middlewares";
import { loginValidation } from "../utils/validations";
import bodyParser from "body-parser";
import express from "express";
import io from "socket.io";

import { UserCtr, DialogCtr, MessageCtr } from "../controllers";

const createRoutes = (app: express.Express, io: io.EngineSocket) => {
  app.use(bodyParser.json());
  app.use(updateLastSeen);
  app.use(checkAuth);

  const port = 3000;

  app.get("/user/me", UserController.getMe);
  app.get("/user/:id", UserController.show);
  app.delete("/user/:id", UserController.delete);
  app.post("/user/registration", UserController.create);
  app.post("/user/login", loginValidation, UserController.login);

  app.get("/dialogs", DialogController.index);
  app.post("/dialogs", DialogController.create);
  app.delete("/dialogs/:id", DialogController.delete);

  app.get("/messages", MessageController.index);
  app.post("/messages", MessageController.create);
  app.delete("/messages/:id", MessageController.delete);
};

export default createRoutes;
