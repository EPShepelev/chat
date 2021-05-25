import express from "express";

import { UserModel } from "../schemas";

class UserController {
  index(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    UserModel.findById(id).then((user) => {
      res.json(user);
    });
  }
}

export default UserController;
