import express from "express";
import socket from "socket.io";

import { MessageModel } from "../models";

class MessageController {
  io: socket.Server;
  constructor(io: socket.Server) {
    this.io = io;
  }

  index = (req: express.Request, res: express.Response) => {
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
  };

  create = (req: express.Request, res: express.Response) => {
    const userId = req.user._id;

    const postData = {
      text: req.body.text,
      dialog: req.body.dialog_id,
      user: userId,
    };
    const message = new MessageModel(postData);
    message
      .populate("dialog")
      .save()
      .then((obj: any) => {
        res.json(obj);
        this.io.emit("SERVER:NEW_MESSAGE", obj);
      })
      .catch((reason) => {
        res.json({ reason });
      });
  };

  delete = (req: express.Request, res: express.Response) => {
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
  };
}

export default MessageController;
