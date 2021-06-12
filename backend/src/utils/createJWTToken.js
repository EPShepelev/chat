import jwt from "jsonwebtoken";
import { reduce } from "lodash";
import { IUser } from "../models/User";

export default (user: IUser) => {
  let token = jwt.sign(
    {
      data: reduce(user, (initial, value, key) => {
        return initial;
      }),
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_MAX_AGE,
      algorithm: "HS256",
    }
  );

  return token;
};
