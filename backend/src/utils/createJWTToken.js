import jwt from "jsonwebtoken";

export default (details) => {
  if (typeof details !== "object") {
    details = {};
  }
  if (!details.maxAge || typeof details.maxAge !== "number") {
    details.maxAge = 3600;
  }

  // details.sessionData = _.reduce(
  //   details.sessionData || {},
  //   (memo, val, key) => {
  //     if (typeof val !== "function" && key !== "password") {
  //       memo[key] = val;
  //     }
  //     return memo;
  //   },
  //   {}
  // );

  let token = jwt.sign(
    {
      data: details.sessionData,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_MAX_AGE,
      algorithm: "HS256",
    }
  );

  return token;
};
