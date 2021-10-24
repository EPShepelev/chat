import express from "express";
import { UploadFileModel } from "../models";

class UserController {
  create = (req: express.Request, res: Express.Response) => {
    console.log(req.file);
    const image = {};
  };
  delete = () => {};
}

export default UserController;
