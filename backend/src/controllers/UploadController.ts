import express from "express";
import { UploadFileModel } from "../models";

class UserController {
  create = (req: express.Request, res: Express.Response) => {
    const user = req.user._id;
    const file: any = req.file;

    const fileData = {
      filename: file.originalname,
      size: file.bits,
      ext: file.format,
      url: String,
      message: { type: Schema.Types.ObjectId, ref: "Message", require: true },
      user,
    };
    const dialog = new UploadFileModel(postData);
    dialog.save().then((dialogObj: any) => {});
  };
  delete = () => {};
}

export default UserController;
