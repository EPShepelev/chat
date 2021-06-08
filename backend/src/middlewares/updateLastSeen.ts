import { UserModel } from "../models";

export default (
  _: express.Request,
  __: express.Response,
  next: express.NextFunction
) => {
  UserModel.updateOne(
    { _id: req.user._id },
    { set: { last_seen: new Date() } },
    () => {}
  );
  next();
};
