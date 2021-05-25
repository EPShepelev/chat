import express from "express";

import { UserModel } from "../schemas";

class UserController {
  index(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    UserModel.findById(id).then((user) => {
      res.json(user);
    });
  }

  create(req: express.Request, res: express.Response) {
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
  }
}

export default UserController;
