import { UserModel } from "../models";

export default (req: express.Request, res: express.Response, next) => {
  UserModel.updateOne({ _id: req.user._id, last_seen: new Date() });
  next();
};
