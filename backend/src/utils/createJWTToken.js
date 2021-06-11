import jwt from "jsonwebtoken";

export default (details) => {
  if (typeof details !== "object") {
    details = {};
  }
};
