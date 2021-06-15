import express from "express";
import { verifyJWTToken } from "../utils";
import { IUser } from "../models/User";

interface RequestCustom extends express.Request {
  user?: IUser;
  headers: {
    token?: string;
  };
}

export default (
  req: express.RequestCustom,
  res: express.Response,
  next: express.NextFunction
) => {
  const token = req.headers.token;

  verifyJWTToken(token)
    .then((user) => {
      req.user = user;
      next();
    })
    .catch(() => {
      res.status(403).json({ message: "Invalid auth token provided" });
    });
};