import express from "express";

export default (
  req: express.Request,
  _: express.Response,
  next: express.NextFunction
) => {
  const token = req.header.token;
  next();
};
