import express from "express";
// import { UploadFileModel } from "../models";

class UserController {
  create = (req: express.Request, res: Express.Response) => {
    console.log(req.file);
    let image = {};
    image.url = req.file.url;
    image.id = req.file.public._id;
  };
  delete = () => {};
}

export default UserController;
