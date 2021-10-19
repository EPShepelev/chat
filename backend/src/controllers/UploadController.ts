import { validationResult } from "express-validator";
import express from "express";
import bcrypt from "bcrypt";
import socket from "socket.io";

import { UserModel } from "../models";
import { IUser } from "../models/User";
import { createJWTToken } from "../utils";

class UserController {
  io: socket.Server;
  constructor(io: socket.Server) {
    this.io = io;
  }
}

export default UserController;
