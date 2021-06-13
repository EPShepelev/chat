import express from "express";
import { verifyJWTToken } from "../utils";

export default (
  req: express.Request,
  _: express.Response,
  next: express.NextFunction
) => {
  const token = req.headers.token;
  next();
};
