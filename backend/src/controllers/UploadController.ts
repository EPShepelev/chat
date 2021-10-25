import express from "express";
import { UploadFileModel } from "../models";

class UserController {
  create = (req: express.Request, res: Express.Response) => {
    const file = {};
    const dialog = new UploadFileModel(postData);
    dialog.save().then((dialogObj: any) => {});
  };
  delete = () => {};
}

export default UserController;
