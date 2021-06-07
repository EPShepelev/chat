import { UserModel } from "../models";

export default (req, res, next) => {
  UserModel.updateOne({ _id: req.user._id, last_seen: new Date() });
  next();
};
