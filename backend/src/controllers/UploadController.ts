import { validationResult } from "express-validator";
import express from "express";
import bcrypt from "bcrypt";
import socket from "socket.io";

import { UploadFileModel } from "../models";

class UserController {
  io: socket.Server;
  constructor(io: socket.Server) {
    this.io = io;
  }
}

export default UserController;
