import jwt from "jsonwebtoken";

export default (details) => {
  if (typeof details !== "object") {
    details = {};
  }
  if (!details.maxAge || typeof details.maxAge !== "number") {
    details.maxAge = 3600;
  }
};
