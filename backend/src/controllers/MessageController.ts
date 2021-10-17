import { O_NONBLOCK } from "constants";
import express from "express";
import socket from "socket.io";

import { MessageModel, DialogModel } from "../models";

class MessageController {
  io: socket.Server;
  constructor(io: socket.Server) {
    this.io = io;
  }

  index = (req: express.Request, res: express.Response) => {
    const dialogId: string = req.query.dialog;
    const userId = req.user._id;
    MessageModel.updateMany({
      dialog: dialogId,
      user: { $not: new RegExp(userId) },
    },{
      "read": true
    },(err: any) => {
      if (err) {
        return res.status(500).json({
          status: 'error',
          message: err,
        });
    } );
    MessageModel.find({ dialog: dialogId })
      .populate(["dialog", "user"])
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
      .save()
      .then((obj: any) => {
        obj.populate(["dialog", "user"], (err: any, message: any) => {
          message.save((err: any) => {
            if (err) {
              return res.status(500).json({
                status: "error",
                message: err,
              });
            }
          });
          DialogModel.findOneAndUpdate(
            { _id: postData.dialog },
            { lastMessage: message._id },
            { upsert: true },
            function (err) {
              if (err) {
                return res.status(500).json({
                  status: "error",
                  message: err,
                });
              }
            }
          );

          dialogObj.lastMessage = message._id;
          dialogObj.save().then(() => {
            res.json(message);
            this.io.emit("SERVER:NEW_MESSAGE", {
              ...postData,
              dialog: dialogObj,
            });
          });
        });
      })
      .catch((reason) => {
        res.json({ reason });
      });
  };

  delete = (req: express.Request, res: express.Response) => {
    const id: string = req.query.id;
    const userId: string = req.user.id;
    MessageModel.findById(id, (err, message: any) => {
      if (err || !message) {
        return res.status(404).json({
          status: "error",
          message: "Messages not found",
        });
      }

      if (message.user.toString() === userId) {
        const dialogId = message.dialog;
        message.remove();
        MessageModel.findOne(
          { dialog: dialogId },
          {},
          { sort: { create_at: -1 } },
          (err, lastMessage) => {
            if (err) {
              res.status(500).json({
                status: "error",
                message: err,
              });
            }
            DialogModel.findById(dialogId, (err: any, dialog: any) => {
              if (err) {
                res.status(500).json({
                  status: "error",
                  message: err,
                });
              }
              dialog.lastMessage = lastMessage;
              dialog.save();
            });
          }
        );

        return res.json({
          status: "success",
          message: "Message deleted",
        });
      } else {
        return res.status(403).json({
          status: "error",
          message: "Not have permission",
        });
      }
    });
  };
}

export default MessageController;
