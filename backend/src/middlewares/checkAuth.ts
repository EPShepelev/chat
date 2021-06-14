import express from "express";
import { verifyJWTToken } from "../utils";
export { IUser } from "../models/User";

export default (
  req: express.Request,
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
