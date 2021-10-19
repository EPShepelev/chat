import { validationResult } from "express-validator";
import express from "express";
import bcrypt from "bcrypt";
import socket from "socket.io";

import { UserModel } from "../models";
import { IUser } from "../models/User";
import { createJWTToken } from "../utils";

class UserController {
  io: socket.Server;
  constructor(io: socket.Server) {
    this.io = io;
  }

  delete = (req: express.Request, res: express.Response) => {
    const id: string = req.params.id;
    UserModel.findOneAndRemove({ _id: id })
      .then((user) => {
        if (user) {
          res.json({
            message: `User ${user.fullname} deleted`,
          });
        }
      })
      .catch(() => {
        res.json({
          message: "User not found",
        });
      });
  };

  create = (req: express.Request, res: express.Response) => {
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
        res.status(500).json({
          status: "error",
          message: reason,
        });
      });
  };

  verify = (req: express.Request, res: express.Response) => {
    const hash = req.query.hash;
    if (!hash) {
      return res.status(422).json({ errors: "Invalid hash" });
    }
    UserModel.findOne({ confirm_hash: hash }, (err, user) => {
      if (err || !user) {
        return res.status(404).json({
          status: "error",
          message: "Hash not found",
        });
      }

      user.confirmed = true;
      user.save((err) => {
        if (err) {
          return res.status(404).json({
            status: "error",
            message: err,
          });
        }
        res.json({
          status: "success",
          message: "Аккаунт подтвержден!",
        });
      });
    });
  };

  login = (req: express.Request, res: express.Response) => {
    const postData = {
      email: req.body.email,
      password: req.body.password,
    };

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }

    UserModel.findOne({ email: postData.email }, (err, user: IUser) => {
      if (err) {
        return res.status(404).json({ message: "User not found" });
      }

      if (bcrypt.compareSync(postData.password, user.password)) {
        const token = createJWTToken(user);
        res.json({
          status: "success",
          token,
        });
      } else {
        res.status(403).json({
          status: "error",
          message: "invalid password or email",
        });
      }
    });
  };
}

export default UserController;
