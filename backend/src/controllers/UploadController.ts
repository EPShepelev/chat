import { UploadFileModel } from "../models";

class UserController {
  io: socket.Server;
  constructor(io: socket.Server) {
    this.io = io;
  }
}

export default UserController;
