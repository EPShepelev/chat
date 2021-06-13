import express from "express";
import { verifyJWTToken } from "../utils";
import { IUser } from "../models/User";

declare namespace Express {
  export interface Request {
    user?: IUser;
  }
}

export default (
  req: express.Request,
  _: express.Response,
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
