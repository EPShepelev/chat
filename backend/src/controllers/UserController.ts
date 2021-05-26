import express from "express";

import { UserModel } from "../schemas";

class UserController {
  index(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        return res.status(404).json({
          message: "Not found",
        });
      }
      res.json(user);
    });
  }

  getMe() {}

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

  delete(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    UserModel.findOneAndRemove({ _id: id })
      .then((user) => {
        if (user) {
          return res.status(404).json({
            message: "User not found",
          });
        }
        res.json({
          message: "User deleted",
        });
      })
      .catch((err) => {
        return res.status(404).json(err);
      });
  }
}

export default UserController;
