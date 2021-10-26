import express from "express";
import { UploadFileModel } from "../models";

class UserController {
  create = (req: express.Request, res: Express.Response) => {
    const userId = req.user._id;
    const file: any = req.file;

    const fileData = {
      filename: file.originalname,
      size: file.bits,
      ext: file.format,
      url: String,
      user: userId,
    };
    const dialog = new UploadFileModel(postData);
    dialog.save().then((dialogObj: any) => {});
  };
  delete = () => {};
}

export default UserController;
