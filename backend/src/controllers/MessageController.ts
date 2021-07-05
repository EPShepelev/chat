import express from "express";
import socket from "socket.io"

import { MessageModel } from "../models";

class MessageController {
  io: socket.EngineSocket;
  constructor(io: socket.EngineSocket){
    this.io = io;
  }

  index(req: express.Request, res: express.Response) {
    const dialogId: string = req.query.dialog;
    MessageModel.find({ dialog: dialogId })
      .populate(["dialog"])
      .exec(function (err, messages) {
        if (err) {
          return res.status(404).json({
            message: "Messages not found",
          });
        }
        return res.json(messages);
      });
  }

  create(req: any, res: express.Response) {
    const postData = {
      text: req.body.text,
      user: req.body.user, //временно указать юзера напрямую
      dialog: req.body.dialog_id,
    };
    const message = new MessageModel(postData);
    message
      .save()
      .then((obj: any) => {
        res.json(obj);
        this.io.emit(NEW:MESSAGE, obj);
      })
      .catch((reason) => {
        res.json({ reason });
      });
  }

  delete(req: express.Request, res: express.Response) {
    const id: string = req.params.id;
    MessageModel.findOneAndRemove({ _id: id })
      .then((message) => {
        if (message) {
          res.json({
            message: "Message deleted",
          });
        }
      })
      .catch(() => {
        res.json({
          message: "Message not found",
        });
      });
  }
}

export MessageController;
