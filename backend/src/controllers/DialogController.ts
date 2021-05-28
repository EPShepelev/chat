import express from "express";

import { DialogModel } from "../models";

class DialogController {
  index(req: express.Request, res: express.Response) {
    const authorId: string = req.params.id;
    DialogModel.find({ author: authorId }, (err, dialogs) => {
      if (err) {
        return res.status(404).json({
          message: "Dialogs not found",
        });
      }
      res.json(dialogs);
    });
  }

  create(req: express.Request, res: express.Response) {
    const postData = {
      author: req.body.author,
      partner: req.body.partner,
    };
    const dialog = new DialogModel(postData);
    dialog
      .save()
      .then((obj: any) => {
        res.json(obj);
      })
      .catch((reason) => {
        res.json({ reason });
      });
  }

  // delete(req: express.Request, res: express.Response) {
  //   const id: string = req.params.id;
  //   DialogModel.findOneAndRemove({ _id: id })
  //     .then((user) => {
  //       if (user) {
  //         res.json({
  //           message: `User ${user.fullname} deleted`,
  //         });
  //       }
  //     })
  //     .catch(() => {
  //       res.json({
  //         message: "User not found",
  //       });
  //     });
  // }
}

export default DialogController;
