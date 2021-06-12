import jwt from "jsonwebtoken";
import {IUser} from "../models/User";

export default (user: IUser) => {
  
  }



  let token = jwt.sign(
    {
      data: user.reduce((initial, curVal, key)=>{},user),
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_MAX_AGE,
      algorithm: "HS256",
    }
  );

  return token;
};
