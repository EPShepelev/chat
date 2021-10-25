import express from "express";
import { UploadFileModel } from "../models";

class UserController {
  create = (req: express.Request, res: Express.Response) => {
    const file = {};
    const dialog = new UploadFileModel(postData);
    let image = {};
    image.url = req.file.url;
    image.id = req.file.public._id;
  };
  delete = () => {};
}

export default UserController;
