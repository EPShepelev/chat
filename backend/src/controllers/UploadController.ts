import express from "express";
import { UploadFileModel } from "../models";

class UserController {
  create = (req: express.Request, res: Express.Response) => {
    const file: any = req.file;

    const fileData = {
      filename: String,
      size: file.bits,
      url: String,
      ext: file.format,
      message: { type: Schema.Types.ObjectId, ref: "Message", require: true },
      user: { type: Schema.Types.ObjectId, ref: "User", require: true },
    };
    const dialog = new UploadFileModel(postData);
    dialog.save().then((dialogObj: any) => {});
  };
  delete = () => {};
}

export default UserController;
