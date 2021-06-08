import express from "express";
import { UserModel } from "../models";

export default (
  _: express.Request,
  __: express.Response,
  next: express.NextFunction
) => {
  UserModel.findOneAndUpdate(
    {
      _id: req.user._id,
    },
    { fullname: "qwe", last_seen: new Date() },
    { new: true }
  );
  // UserModel.updateOne(
  //   { _id: req.user._id },
  //   { set: { last_seen: new Date() } },
  //   () => {}
  // );
  next();
};
