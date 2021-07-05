import express from "express";
import { validationResult } from "express-validator";
import { nextTick } from "process";
import bcrypt from "bcrypt";
import socket from "socket.io"
import { UserModel } from "../models";
import { IUser } from "../models/User";
import { createJWTToken } from "../utils";
import { isObject } from "lodash";

class UserController {
constructor(io: socket.EngineSocket){
  this.io = io;
}

  show(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        return res.status(404).json({
          message: "User not found",
        });
      }
      res.json(user);
    });
  }

  getMe(req: any, res: express.Response, io: any) {
    const id: string = req.user._id;
    UserModel.findById(id, (err, user) => {
      if (err) {
        return res.status(404).json({
          message: "User not found",
        });
      }
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

  delete(req: express.Request, res: express.Response) {
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
  }

  login(req: express.Request, res: express.Response) {
    const postData = {
      email: req.body.email,
      password: req.body.password,
    };

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
        res.json({
          status: "error",
          message: "invalid password or email",
        });
      }
    });
  }
}

export UserController;
